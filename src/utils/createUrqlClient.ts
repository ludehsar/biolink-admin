import { ClientOptions, dedupExchange, fetchExchange, makeOperation } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'

import { GRAPHQL_ENDPOINT } from '../config/app'
import { MeQuery, MeDocument, LogoutMutation, LoginAdminMutation } from '../generated/graphql'
import betterUpdateQuery from './betterUpdateQuery'
import { authExchange } from '@urql/exchange-auth'

export const createUrqlClient = (ssrExchange: any): ClientOptions => ({
  url: GRAPHQL_ENDPOINT,
  fetchOptions: {
    credentials: 'include' as const,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (result, _, cache) => {
            betterUpdateQuery<LoginAdminMutation, MeQuery>(
              cache,
              { query: MeDocument },
              result,
              (nresult, query) => {
                if (nresult.loginAdmin.user) {
                  return {
                    me: nresult.loginAdmin.user,
                  }
                } else {
                  return query
                }
              }
            )
          },

          logout: (result, _, cache) => {
            betterUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              { query: MeDocument },
              result,
              () => ({
                me: null,
              })
            )
          },
        },
      },
    }),
    authExchange({
      addAuthToOperation: ({ authState, operation }) => {
        // the token isn't in the auth state, return the operation without changes
        if (!authState || !(authState as any).token) {
          return operation
        }

        // fetchOptions can be a function (See Client API) but you can simplify this based on usage
        const fetchOptions =
          typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {}

        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: `Bearer ${(authState as any).token}`,
            },
          },
        })
      },
      willAuthError: ({ authState }) => {
        if (!authState) return true
        // e.g. check for expiration, existence of auth etc
        return false
      },
      didAuthError: ({ error }) => {
        // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
        return error.graphQLErrors.some((e) => e.extensions?.code === 'FORBIDDEN')
      },
      getAuth: async ({ authState, mutate }) => {
        if (typeof window !== 'undefined') {
          // for initial launch, fetch the auth state from storage (local storage, async storage etc)
          if (!authState) {
            const token = localStorage.getItem('token')
            if (token) {
              return { token }
            }
            return null
          }

          /**
           * the following code gets executed when an auth error has occurred
           * we should refresh the token if possible and return a new auth state
           * If refresh fails, we should log out
           **/

          // if your refresh logic is in graphQL, you must use this mutate function to call it
          // if your refresh logic is a separate RESTful endpoint, use fetch or similar
          const result = await mutate(`
            mutation RefreshToken {
              refreshToken {
                access {
                  token
                  expires
                }
              }
            }
          `)

          if (result.data?.refreshToken) {
            // save the new tokens in storage for next restart
            localStorage.setItem('token', result.data.refreshToken.access?.token)

            // return the new tokens
            return {
              token: result.data.refreshToken.access?.token,
            }
          }

          return null
        }
        return null
      },
    }),
    ssrExchange,
    fetchExchange,
    multipartFetchExchange,
  ],
})

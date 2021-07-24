import { ClientOptions, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'

import { GRAPHQL_ENDPOINT } from '../config/app'
import { LoginMutation, MeQuery, MeDocument, LogoutMutation } from '../generated/graphql'
import betterUpdateQuery from './betterUpdateQuery'

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
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              result,
              (nresult, query) => {
                if (nresult.login.errors) {
                  return query
                } else {
                  return {
                    me: nresult.login.user,
                  }
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
    ssrExchange,
    fetchExchange,
    multipartFetchExchange,
  ],
})

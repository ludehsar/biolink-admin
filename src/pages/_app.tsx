import React from 'react'
import { AppProps } from 'next/app'
import { Provider as ReactReduxProvider } from 'react-redux'
import { createClient, dedupExchange, fetchExchange, Provider as UrqlProvider } from 'urql'
import { cacheExchange, Cache, QueryInput } from '@urql/exchange-graphcache'

import store from '../redux/store'
import { GRAPHQL_ENDPOINT } from '../config/app'

import '../assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../assets/css/argon-dashboard-react.min.css'
import '../assets/css/custom.css'
import { LoginMutation, LogoutMutation, MeDocument, MeQuery } from '../generated/graphql'

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
): void {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any)
}

const client = createClient({
  url: GRAPHQL_ENDPOINT,
  fetchOptions: {
    credentials: 'include',
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
    fetchExchange,
  ],
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ReactReduxProvider {...{ store }}>
    <UrqlProvider value={client}>
      <Component {...pageProps} />
    </UrqlProvider>
  </ReactReduxProvider>
)

export default MyApp

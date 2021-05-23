import React from 'react'
import { AppProps } from 'next/app'
import { Provider as ReactReduxProvider } from 'react-redux'
import { createClient, Provider as UrqlProvider } from 'urql'

import store from '../redux/store'
import { GRAPHQL_ENDPOINT } from '../config/app'

import '../assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../assets/css/argon-dashboard-react.min.css'
import '../assets/css/custom.css'

const client = createClient({
  url: GRAPHQL_ENDPOINT,
  fetchOptions: {
    credentials: 'include',
  },
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ReactReduxProvider {...{ store }}>
    <UrqlProvider value={client}>
      <Component {...pageProps} />
    </UrqlProvider>
  </ReactReduxProvider>
)

export default MyApp

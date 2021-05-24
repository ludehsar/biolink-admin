import React from 'react'
import { AppProps } from 'next/app'
import { Provider as ReactReduxProvider } from 'react-redux'

import store from '../redux/store'

import '../assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../assets/css/argon-dashboard-react.min.css'
import '../assets/css/custom.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ReactReduxProvider {...{ store }}>
    <Component {...pageProps} />
  </ReactReduxProvider>
)

export default MyApp

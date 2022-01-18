import React from 'react'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'

import store from '../redux/store'

import '../assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../assets/css/argon-dashboard-react.min.css'
import '../assets/css/custom.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp

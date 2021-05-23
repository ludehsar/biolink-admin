import React from 'react'
import { AppProps } from 'next/app'

import '../assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../assets/css/argon-dashboard-react.min.css'
import '../assets/css/custom.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp

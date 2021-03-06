import React, { useEffect } from 'react'
import { Container } from 'reactstrap'

import AdminNavbar from '../components/Navbar/AdminNavbar'
import AdminSidebar from '../components/Sidebar/AdminSidebar'
import AdminFooter from '../components/Footer/AdminFooter'
import { FRONTEND_APP_NAME } from '../config/app'
import { useMeQuery, User } from '../generated/graphql'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  AUTH_LOADING_REQUESTED,
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
} from '../redux/actions/authAction'
import InfoAlert from '../components/Header/InfoAlert'
import Loading from '../components/Loading/Loading'

interface AdminLayoutProps {
  loginCurrentUser: (user: User) => void
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  loginCurrentUser,
  startAuthenticationProcess,
  logoutCurrentUser,
}) => {
  const [{ data, fetching }] = useMeQuery()
  const router = useRouter()

  useEffect(() => {
    if (!fetching) {
      startAuthenticationProcess()
      if (!data?.me) {
        router.replace('/auth/login')
        logoutCurrentUser()
      } else {
        loginCurrentUser(data.me)
      }
    }
  }, [data, fetching, loginCurrentUser, logoutCurrentUser, router, startAuthenticationProcess])

  return (
    <>
      {fetching || !data?.me ? (
        <Loading />
      ) : (
        <>
          <AdminSidebar
            logo={{
              link: '/',
              imgSrc: '/img/logo.png',
              imgAlt: 'Logo',
            }}
          />
          <div className="main-content">
            <AdminNavbar brandText={FRONTEND_APP_NAME} />
            <InfoAlert />
            {children}
            <Container fluid>
              <AdminFooter />
            </Container>
          </div>
        </>
      )}
    </>
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  loginCurrentUser: (user: User) => void
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
} => ({
  startAuthenticationProcess: () => dispatch({ type: AUTH_LOADING_REQUESTED }),
  loginCurrentUser: (user: User) => dispatch({ type: AUTH_LOGIN_REQUESTED, payload: user }),
  logoutCurrentUser: () => dispatch({ type: AUTH_LOGOUT_REQUESTED }),
})

export default connect(null, mapDispatchToProps)(AdminLayout)

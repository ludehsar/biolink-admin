import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import { Dispatch } from 'redux'

import AuthFooter from '../components/Footer/AuthFooter'
import InfoAlert from '../components/Header/InfoAlert'
import Loading from '../components/Loading/Loading'
import { useMeQuery, User } from '../generated/graphql'
import {
  AUTH_LOADING_REQUESTED,
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
} from '../redux/actions/authAction'

interface AuthLayoutProps {
  loginCurrentUser: (user: User) => void
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  loginCurrentUser,
  startAuthenticationProcess,
  logoutCurrentUser,
}) => {
  const [{ data, fetching }] = useMeQuery()
  const router = useRouter()

  useEffect(() => {
    document.body.classList.add('bg-default')
    return () => {
      document.body.classList.remove('bg-default')
    }
  }, [])

  useEffect(() => {
    if (!fetching) {
      startAuthenticationProcess()
      if (data?.me) {
        router.replace('/')
        loginCurrentUser(data.me)
      } else {
        logoutCurrentUser()
      }
    }
  }, [data?.me, fetching, loginCurrentUser, logoutCurrentUser, router, startAuthenticationProcess])

  return (
    <>
      {fetching || data?.me ? (
        <Loading textColor={'white'} />
      ) : (
        <>
          <div className="main-content">
            <InfoAlert />
            <div className="header bg-gradient-info py-7 py-lg-8">
              <Container>
                <div className="header-body text-center mb-7">
                  <Row className="justify-content-center">
                    <Col lg="5" md="6">
                      <h1 className="text-white">Welcome back!</h1>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon className="fill-default" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </div>
            {/* Page content */}
            <Container className="mt--8 pb-5">
              <Row className="justify-content-center">{children}</Row>
            </Container>
          </div>
          <AuthFooter />
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

export default connect(null, mapDispatchToProps)(AuthLayout)

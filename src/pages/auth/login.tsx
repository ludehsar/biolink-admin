import React from 'react'
import { NextPage } from 'next'
import { Col, Card, Button, CardBody, Form, Row } from 'reactstrap'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { withUrqlClient } from 'next-urql'

import AuthLayout from '../../layouts/Auth.layout'
import InputField from '../../components/InputField/InputField'
import { ErrorResponse, LoginInput, useLoginMutation, User } from '../../generated/graphql'
import { toErrorMap } from '../../utils/toErrorMap'
import {
  AUTH_LOADING_REQUESTED,
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
} from '../../redux/actions/authAction'
import { useRouter } from 'next/router'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { createUrqlClient } from '../../utils/createUrqlClient'

interface LoginPageProps {
  loginCurrentUser: (user: User) => void
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
  addErrors: (errors: ErrorResponse[]) => void
}

const LoginPage: NextPage<LoginPageProps> = ({
  loginCurrentUser,
  startAuthenticationProcess,
  logoutCurrentUser,
  addErrors,
}) => {
  const [, login] = useLoginMutation()
  const router = useRouter()

  return (
    <AuthLayout>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <h3 className="text-center mb-4">Sign in to get access</h3>
            <Formik
              initialValues={{ email: '', password: '' } as LoginInput}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                startAuthenticationProcess()
                const response = await login({ options: values })

                if (response.data?.login.errors) {
                  setErrors(toErrorMap(response.data.login.errors))
                  logoutCurrentUser()
                } else if (response.data?.login.user) {
                  loginCurrentUser(response.data.login.user)
                  router.push('/')
                } else {
                  addErrors([
                    {
                      errorCode: 10000,
                      message: 'Something went wrong!',
                    },
                  ])
                  logoutCurrentUser()
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting, handleSubmit }) => (
                <Form role="form" method="post" onSubmit={handleSubmit}>
                  <InputField
                    name="email"
                    type="email"
                    label="Email Address"
                    className="mb-3"
                    placeholder="Enter your email address"
                  />
                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                    className="mb-3"
                    placeholder="Enter password"
                  />
                  <div className="text-center">
                    <Button className="my-4" type="submit" color="primary">
                      {isSubmitting ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Signing in
                        </>
                      ) : (
                        <>Sign in</>
                      )}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>Forgot password?</small>
            </a>
          </Col>
        </Row>
      </Col>
    </AuthLayout>
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  loginCurrentUser: (user: User) => void
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  startAuthenticationProcess: () => dispatch({ type: AUTH_LOADING_REQUESTED }),
  loginCurrentUser: (user: User) => dispatch({ type: AUTH_LOGIN_REQUESTED, payload: user }),
  logoutCurrentUser: () => dispatch({ type: AUTH_LOGOUT_REQUESTED }),
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default withUrqlClient(createUrqlClient)(connect(null, mapDispatchToProps)(LoginPage))

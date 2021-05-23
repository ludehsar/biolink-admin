import React from 'react'
import { NextPage } from 'next'
import { Col, Card, Button, CardBody, Form, Row } from 'reactstrap'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import AuthLayout from '../../layouts/Auth.layout'
import InputField from '../../components/InputField/InputField'
import { LoginInput, useLoginMutation, User } from '../../generated/graphql'
import { toErrorMap } from '../../utils/toErrorMap'
import { AUTH_LOGIN_REQUESTED } from '../../redux/actions/authAction'
import { useRouter } from 'next/router'

interface LoginPageProps {
  loginCurrentUser: (user: User) => void
}

const LoginPage: NextPage<LoginPageProps> = ({ loginCurrentUser }) => {
  const [, register] = useLoginMutation()
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
                const response = await register({ options: values })

                if (response.error) {
                  // TODO: Global error handling
                } else if (response.data?.login.errors) {
                  setErrors(toErrorMap(response.data.login.errors))
                } else if (response.data?.login.user) {
                  loginCurrentUser(response.data.login.user)
                  router.push('/')
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
} => ({
  loginCurrentUser: (user: User) => dispatch({ type: AUTH_LOGIN_REQUESTED, payload: user }),
})

export default connect(null, mapDispatchToProps)(LoginPage)

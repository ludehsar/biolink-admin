import React from 'react'
import { NextPage } from 'next'
import { Col, Card, Button, CardBody, Form, Row } from 'reactstrap'
import { Formik } from 'formik'

import AuthLayout from '../../layouts/Auth.layout'
import InputField from '../../components/InputField/InputField'

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <h3 className="text-center mb-4">Sign in to get access</h3>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
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

export default LoginPage

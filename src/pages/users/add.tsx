import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Container, Row, Card, CardHeader, Col, Button, CardFooter, Form } from 'reactstrap'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import InputField from '../../components/InputField/InputField'
import { Formik } from 'formik'

const AddUserPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col>
                    <h3 className="mb-0 float-left">Create New User</h3>
                    <div className="float-right">
                      <Button color="primary" size="sm">
                        Back
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                  }, 1000)
                }}
              >
                {({ isSubmitting, handleSubmit }) => (
                  <Form role="form" method="post" onSubmit={handleSubmit}>
                    <div className="p-4">
                      <Row>
                        <Col md={4}>
                          <InputField
                            name="email"
                            type="email"
                            label="Email Address"
                            className="mb-3"
                            placeholder="Enter your email address"
                          />
                        </Col>
                        <Col md={4}>
                          <InputField
                            name="email"
                            type="email"
                            label="Email Address"
                            className="mb-3"
                            placeholder="Enter your email address"
                          />
                        </Col>
                        <Col md={4}>
                          <InputField
                            name="email"
                            type="email"
                            label="Email Address"
                            className="mb-3"
                            placeholder="Enter your email address"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <InputField
                            name="email"
                            type="email"
                            label="Email Address"
                            className="mb-3"
                            placeholder="Enter your email address"
                          />
                        </Col>
                        <Col md={4}>
                          <InputField
                            name="email"
                            type="email"
                            label="Email Address"
                            className="mb-3"
                            placeholder="Enter your email address"
                          />
                        </Col>
                        <Col md={4}>
                          <InputField
                            name="email"
                            type="email"
                            label="Email Address"
                            className="mb-3"
                            placeholder="Enter your email address"
                          />
                        </Col>
                      </Row>
                    </div>
                    <CardFooter className="py-4">
                      <Button className="my-4" type="submit" color="primary">
                        {isSubmitting ? (
                          <>
                            <i className="fa fa-spinner fa-spin"></i> Signing in
                          </>
                        ) : (
                          <>Sign in</>
                        )}
                      </Button>
                    </CardFooter>
                  </Form>
                )}
              </Formik>
            </Card>
          </div>
        </Row>
      </Container>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddUserPage)

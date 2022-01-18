import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Dispatch } from 'redux'
import Link from 'next/link'
import moment from 'moment'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap'

import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useGetSupportQuery, useReplyToSupportMutation } from '../../../generated/graphql'
import AdminHeader from '../../../components/Header/AdminHeader'
import { ADD_ERRORS_REQUESTED } from '../../../redux/actions/errorAction'

interface SupportDetailsPageProps {
  addErrors: (errorMessage: string) => void
}

const SupportDetailsPage: NextPage<SupportDetailsPageProps> = ({ addErrors }) => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetSupportQuery({ variables: { supportId: (id as string) || '' } })
  const [, editSupport] = useReplyToSupportMutation()

  return data?.getSupport ? (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <Col xl="9">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Support Details</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h6 className="heading-small text-muted mb-4">Contact Information</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-email">
                          User
                        </label>
                        <div>
                          <Link href={'/users/view/' + data.getSupport.user?.id}>
                            <a>{data.getSupport.user?.email}</a>
                          </Link>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-full-name">
                          Full Name
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getSupport.fullName || ''}
                          id="input-full-name"
                          placeholder="Full Name"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-email">
                          Contact Email
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getSupport.email || ''}
                          id="input-email"
                          placeholder="Email Address"
                          type="email"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-phone-number">
                          Phone Number
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getSupport.phoneNumber || ''}
                          id="input-phone-number"
                          placeholder="Phone Number"
                          type="tel"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-company">
                          Company
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getSupport.company || ''}
                          id="input-company"
                          placeholder="Company"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Support Information</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-subject">
                          Subject
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getSupport.subject || ''}
                          id="input-subject"
                          placeholder="Subject"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-message">
                          Message
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getSupport.message || ''}
                          id="input-message"
                          placeholder="Message"
                          rows="4"
                          type="textarea"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Support Status</h6>
                <div className="pl-lg-4">
                  <Formik
                    enableReinitialize
                    initialValues={{
                      status: data.getSupport.status,
                      supportReply: data.getSupport.supportReply,
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                      const response = await editSupport({
                        supportId: data.getSupport?.id as string,
                        input: {
                          status: values.status,
                          supportReply: values.supportReply,
                        },
                      })

                      if (response.error) {
                        addErrors(response.error.message)
                      } else {
                        router.push('/supports/pending')
                      }
                      setSubmitting(false)
                    }}
                  >
                    {({ isSubmitting, handleChange, handleBlur, handleSubmit, values }) => (
                      <Form role="form" method="post" onSubmit={handleSubmit}>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label className="form-control-label" htmlFor="input-change-status">
                                Change Status
                              </label>
                              <Input
                                type="select"
                                name="status"
                                className="bg-white form-control-alternative"
                                id="input-change-status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.status || ''}
                                placeholder="Change Status"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Dismissed">Dismissed</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="8">
                            <FormGroup>
                              <label className="form-control-label" htmlFor="input-issued">
                                Issued at
                              </label>
                              <Input
                                className="bg-white form-control-alternative"
                                value={moment
                                  .unix(parseInt(data.getSupport?.createdAt || '') / 1000)
                                  .format('DD-MM-YYYY HH:mm:ss')}
                                id="input-issued"
                                placeholder="Issue Date"
                                type="datetime"
                                readOnly
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label className="form-control-label" htmlFor="input-support-reply">
                                Admin Reply
                              </label>
                              <Input
                                type="textarea"
                                name="supportReply"
                                className="bg-white form-control-alternative"
                                id="input-support-reply"
                                rows="4"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.supportReply || ''}
                                placeholder="Admin Reply"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button type="submit" color="primary">
                              {isSubmitting ? (
                                <>
                                  <i className="fa fa-spinner fa-spin"></i> Saving
                                </>
                              ) : (
                                <>Save</>
                              )}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errorMessage: string) => void
} => ({
  addErrors: (errorMessage: string) =>
    dispatch({ type: ADD_ERRORS_REQUESTED, payload: errorMessage }),
})

export default withUrqlClient(createUrqlClient)(
  connect(null, mapDispatchToProps)(SupportDetailsPage)
)

import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'
import moment from 'moment'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { useRouter } from 'next/router'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
import {
  ErrorResponse,
  useChangeReportStatusMutation,
  useGetReportQuery,
} from '../../../generated/graphql'
import AdminHeader from '../../../components/Header/AdminHeader'
import { ADD_ERRORS_REQUESTED } from '../../../redux/actions/errorAction'

interface ReportDetailsPageProps {
  addErrors: (errors: ErrorResponse[]) => void
}

const ReportDetailsPage: NextPage<ReportDetailsPageProps> = ({ addErrors }) => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetReportQuery({ variables: { reportId: (id as string) || '' } })

  const [, changeReportStatus] = useChangeReportStatusMutation()

  return data?.getReport?.report ? (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <Col xl="9">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Report Details</h3>
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
                          <Link href={'/users/view/' + data.getReport.report.reporter?.id}>
                            <a>{data.getReport.report.reporter?.email}</a>
                          </Link>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-first-name">
                          First Name
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getReport.report.firstName || ''}
                          id="input-first-name"
                          placeholder="First Name"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-last-name">
                          Last Name
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getReport.report.lastName || ''}
                          id="input-last-name"
                          placeholder="Last Name"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-email">
                          Contact Email
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getReport.report.email || ''}
                          id="input-email"
                          placeholder="Email Address"
                          type="email"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Report Information</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-reported-url">
                          Reported URL
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getReport.report.reportedUrl || ''}
                          id="input-reported-url"
                          placeholder="URL"
                          type="url"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-description">
                          Description
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getReport.report.description || ''}
                          id="input-description"
                          placeholder="Description"
                          rows="4"
                          type="textarea"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Report Status</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-status">
                          Status
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getReport.report.status || ''}
                          id="input-status"
                          placeholder="Report Status"
                          type="text"
                        />
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
                            .unix(parseInt(data.getReport.report.createdAt || '') / 1000)
                            .format('DD-MM-YYYY HH:mm:ss')}
                          id="input-issued"
                          placeholder="Issue Date"
                          type="datetime"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </CardBody>
              <CardFooter>
                <div className="pl-lg-4">
                  <Formik
                    enableReinitialize
                    initialValues={{
                      status: data.getReport.report.status,
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                      const response = await changeReportStatus({
                        reportId: data.getReport?.report?.id as string,
                        options: {
                          status: values.status,
                        },
                      })

                      if (response.data?.changeReportStatus?.errors) {
                        addErrors(response.data.changeReportStatus.errors)
                      } else {
                        router.push('/reports/pending')
                      }
                      setSubmitting(false)
                    }}
                  >
                    {({ isSubmitting, handleChange, handleBlur, handleSubmit, values }) => (
                      <Form role="form" method="post" onSubmit={handleSubmit}>
                        <Row className="d-flex align-items-center">
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
                          <Col lg="3">
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
              </CardFooter>
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
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default withUrqlClient(createUrqlClient)(
  connect(null, mapDispatchToProps)(ReportDetailsPage)
)

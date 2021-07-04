import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
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
import { useRouter } from 'next/router'
import { useGetReportQuery } from '../../../generated/graphql'
import AdminHeader from '../../../components/Header/AdminHeader'
import Link from 'next/link'
import moment from 'moment'

const ReportDetailsPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetReportQuery({ variables: { reportId: (id as string) || '' } })

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
                <Form>
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
                </Form>
              </CardBody>
              <CardFooter>
                <Row className="d-flex align-items-center">
                  <Col lg="4">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="input-change-status">
                        Change Status
                      </label>
                      <Input
                        className="bg-white form-control-alternative"
                        id="input-change-status"
                        defaultValue={data.getReport.report.status || ''}
                        placeholder="Change Status"
                        type="select"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Dismissed">Dismissed</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="3">
                    <Button color="primary">Save</Button>
                  </Col>
                </Row>
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

export default withUrqlClient(createUrqlClient)(ReportDetailsPage)

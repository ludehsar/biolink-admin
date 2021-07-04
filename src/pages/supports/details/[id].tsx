import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
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
import { useRouter } from 'next/router'
import { useGetSupportQuery } from '../../../generated/graphql'
import AdminHeader from '../../../components/Header/AdminHeader'
import Link from 'next/link'
import moment from 'moment'

const SupportDetailsPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetSupportQuery({ variables: { supportId: (id as string) || '' } })

  return data?.getSupport?.support ? (
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
                            <Link href={'/users/view/' + data.getSupport.support.user?.id}>
                              <a>{data.getSupport.support.user?.email}</a>
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
                            value={data.getSupport.support.fullName || ''}
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
                            value={data.getSupport.support.email || ''}
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
                            value={data.getSupport.support.phoneNumber || ''}
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
                            value={data.getSupport.support.company || ''}
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
                            value={data.getSupport.support.subject || ''}
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
                            value={data.getSupport.support.message || ''}
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
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-change-status">
                            Change Status
                          </label>
                          <Input
                            className="bg-white form-control-alternative"
                            id="input-change-status"
                            defaultValue={data.getSupport.support.status || ''}
                            placeholder="Change Status"
                            type="select"
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
                              .unix(parseInt(data.getSupport.support.createdAt || '') / 1000)
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
                            className="bg-white form-control-alternative"
                            defaultValue={data.getSupport.support.supportReply || ''}
                            id="input-support-reply"
                            placeholder="Admin Reply"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button color="primary">Submit</Button>
                      </Col>
                    </Row>
                  </div>
                </Form>
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

export default withUrqlClient(createUrqlClient)(SupportDetailsPage)

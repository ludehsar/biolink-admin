import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Dispatch } from 'redux'
import Link from 'next/link'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
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
  Media,
  Row,
} from 'reactstrap'

import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import {
  ErrorResponse,
  useChangeVerificationStatusMutation,
  useGetVerificationQuery,
} from '../../../generated/graphql'
import AdminHeader from '../../../components/Header/AdminHeader'
import { ADD_ERRORS_REQUESTED } from '../../../redux/actions/errorAction'

interface VerificationDetailsPageProps {
  addErrors: (errors: ErrorResponse[]) => void
}

const VerificationDetailsPage: NextPage<VerificationDetailsPageProps> = ({ addErrors }) => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetVerificationQuery({
    variables: { verificationId: (id as string) || '' },
  })
  const [, changeVerificationStatus] = useChangeVerificationStatusMutation()

  return data?.getVerification?.verification ? (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <Col xl="9">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Verification Details</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h6 className="heading-small text-muted mb-4">User Information</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-biolink">
                          Biolink
                        </label>
                        <div>
                          <Link
                            href={'/biolinks/view/' + data.getVerification.verification.biolink?.id}
                          >
                            <a
                              href={
                                '/biolinks/view/' + data.getVerification.verification.biolink?.id
                              }
                            >
                              <Media className="align-items-center">
                                <a className="avatar rounded-circle mr-3" href="#">
                                  <img
                                    alt="Biolink Profile"
                                    src={
                                      data.getVerification.verification.biolink?.profilePhotoUrl ||
                                      ''
                                    }
                                  />
                                </a>
                                <Media>
                                  <span className="mb-0 text-sm">
                                    {data.getVerification.verification.biolink?.username
                                      ?.username || ''}
                                  </span>
                                </Media>
                              </Media>
                            </a>
                          </Link>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-email">
                          User
                        </label>
                        <div>
                          <Link href={'/users/view/' + data.getVerification.verification.user?.id}>
                            <a>{data.getVerification.verification.user?.email}</a>
                          </Link>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Contact Information</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-first-name">
                          First Name
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.firstName || ''}
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
                          value={data.getVerification.verification.lastName || ''}
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
                        <label className="form-control-label" htmlFor="input-category">
                          Category
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.category?.categoryName || ''}
                          id="input-category"
                          placeholder="Category"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-username">
                          Username
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.username || ''}
                          id="input-username"
                          placeholder="Username"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-email">
                          Email
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.email || ''}
                          id="input-email"
                          placeholder="Email"
                          type="email"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-mobile-number">
                          Mobile Number
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.mobileNumber || ''}
                          id="input-mobile-number"
                          placeholder="Mobile Number"
                          type="tel"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-work-number">
                          Work Number
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.workNumber || ''}
                          id="input-work-number"
                          placeholder="Work Number"
                          type="tel"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Website URL</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-website-link">
                          Website
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.websiteLink || ''}
                          id="input-website-link"
                          placeholder="Website Link"
                          type="url"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-instagram-link">
                          Instagram
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.instagramUrl || ''}
                          id="input-instagram-link"
                          placeholder="Instagram URL"
                          type="url"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-twitter-link">
                          Twitter
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.twitterUrl || ''}
                          id="input-twitter-link"
                          placeholder="Twitter URL"
                          type="url"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-linkedin-link">
                          Linkedin
                        </label>
                        <Input
                          className="bg-white form-control-alternative"
                          value={data.getVerification.verification.linkedinUrl || ''}
                          id="input-linkedin-link"
                          placeholder="Linkedin URL"
                          type="url"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Documents</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-photo-id">
                          Photo ID
                        </label>
                        <div>
                          <Link href={data.getVerification.verification.photoIdUrl || ''}>
                            <Button color="primary" size="sm">
                              Download
                            </Button>
                          </Link>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-business-documents">
                          Business Documents
                        </label>
                        <div>
                          <Link href={data.getVerification.verification.businessDocumentUrl || ''}>
                            <Button color="primary" size="sm">
                              Download
                            </Button>
                          </Link>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-other-documents">
                          Other Documents
                        </label>
                        <div>
                          <Link href={data.getVerification.verification.otherDocumentsUrl || ''}>
                            <Button color="primary" size="sm">
                              Download
                            </Button>
                          </Link>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Verification Status</h6>
                <div className="pl-lg-4">
                  <Formik
                    enableReinitialize
                    initialValues={{
                      verificationStatus:
                        data.getVerification.verification.verificationStatus || 'Pending',
                      verifiedGovernmentId:
                        data.getVerification.verification.verifiedGovernmentId === true
                          ? 'true'
                          : 'false',
                      verifiedEmail:
                        data.getVerification.verification.verifiedEmail === true ? 'true' : 'false',
                      verifiedPhoneNumber:
                        data.getVerification.verification.verifiedPhoneNumber === true
                          ? 'true'
                          : 'false',
                      verifiedWorkEmail:
                        data.getVerification.verification.verifiedWorkEmail === true
                          ? 'true'
                          : 'false',
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                      const response = await changeVerificationStatus({
                        verificationId: id as string,
                        options: {
                          status: values.verificationStatus,
                          verifiedEmail: values.verifiedEmail === 'true' ? true : false,
                          verifiedGovernmentId:
                            values.verifiedGovernmentId === 'true' ? true : false,
                          verifiedPhoneNumber: values.verifiedPhoneNumber === 'true' ? true : false,
                          verifiedWorkEmail: values.verifiedWorkEmail === 'true' ? true : false,
                        },
                      })

                      if (response.data?.changeVerificationStatus?.errors) {
                        addErrors(response.data.changeVerificationStatus.errors)
                      } else {
                        router.push('/supports/pending')
                      }
                      setSubmitting(false)
                    }}
                  >
                    {({ isSubmitting, handleChange, handleBlur, handleSubmit, values }) => (
                      <Form role="form" method="post" onSubmit={handleSubmit}>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-verification-status"
                              >
                                Verification Status
                              </label>
                              <Input
                                type="select"
                                name="verificationStatus"
                                className="bg-white form-control-alternative"
                                id="input-change-status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.verificationStatus}
                                placeholder="Change Verification Status"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Verified">Verified</option>
                                <option value="Rejected">Rejected</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-verifiedGovernmentId"
                              >
                                Government ID
                              </label>
                              <Input
                                type="select"
                                name="verifiedGovernmentId"
                                className="bg-white form-control-alternative"
                                id="input-verifiedGovernmentId"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.verifiedGovernmentId}
                                placeholder="Change Verification Status of Government ID"
                              >
                                <option value="true">Verified</option>
                                <option value="false">Not Verified</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label className="form-control-label" htmlFor="input-verifiedEmail">
                                Email
                              </label>
                              <Input
                                type="select"
                                name="verifiedEmail"
                                className="bg-white form-control-alternative"
                                id="input-verifiedEmail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.verifiedEmail}
                                placeholder="Change Verification Status of Email"
                              >
                                <option value="true">Verified</option>
                                <option value="false">Not Verified</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-verifiedPhoneNumber"
                              >
                                Phone Number
                              </label>
                              <Input
                                type="select"
                                name="verifiedPhoneNumber"
                                className="bg-white form-control-alternative"
                                id="input-verifiedPhoneNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.verifiedPhoneNumber}
                                placeholder="Change Verification Status of Phone Number"
                              >
                                <option value="true">Verified</option>
                                <option value="false">Not Verified</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-verifiedWorkEmail"
                              >
                                Work Email
                              </label>
                              <Input
                                type="select"
                                name="verifiedWorkEmail"
                                className="bg-white form-control-alternative"
                                id="input-verifiedWorkEmail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.verifiedWorkEmail}
                                placeholder="Change Verification Status of Work Email"
                              >
                                <option value="true">Verified</option>
                                <option value="false">Not Verified</option>
                              </Input>
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
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default withUrqlClient(createUrqlClient)(
  connect(null, mapDispatchToProps)(VerificationDetailsPage)
)

import React from 'react'
import {
  Container,
  Row,
  Card,
  CardHeader,
  Col,
  Button,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import InputField from '../InputField/InputField'
import { Formik } from 'formik'
import {
  ErrorResponse,
  PlanInput,
  useCreatePlanMutation,
  useEditPlanMutation,
  useGetPlanQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Link from 'next/link'
import router from 'next/router'

interface AddOrEditUsersFormProps {
  addErrors: (errors: ErrorResponse[]) => void
  variant: 'Add' | 'Edit'
  id?: number
}

const AddOrEditPlanForm: React.FC<AddOrEditUsersFormProps> = ({ addErrors, id, variant }) => {
  const [, createPlan] = useCreatePlanMutation()
  const [, editPlan] = useEditPlanMutation()
  const [{ data }] = useGetPlanQuery({ variables: { id: id as number } })

  return (
    <Container className="mt--7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col>
                  <h3 className="mb-0 float-left">
                    {variant === 'Add' ? 'Create New Plan' : 'Edit Plan'}
                  </h3>
                  <div className="float-right">
                    <Link href="/plans">
                      <Button color="primary" size="sm">
                        Back
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <Formik
              enableReinitialize={true}
              initialValues={
                {
                  name: variant === 'Add' ? '' : data?.getPlan.plan?.name,
                  monthlyPrice: variant === 'Add' ? 0.0 : data?.getPlan.plan?.monthlyPrice,
                  monthlyPriceStripeId:
                    variant === 'Add' ? '' : data?.getPlan.plan?.monthlyPriceStripeId,
                  annualPrice: variant === 'Add' ? 0.0 : data?.getPlan.plan?.annualPrice,
                  annualPriceStripeId:
                    variant === 'Add' ? '' : data?.getPlan.plan?.annualPriceStripeId,
                  visibilityStatus:
                    variant === 'Add' ? false : data?.getPlan.plan?.visibilityStatus,

                  // settings
                  totalBiolinksLimit:
                    variant === 'Add' ? 0 : data?.getPlan.plan?.settings?.totalBiolinksLimit,
                  totalCustomDomainLimit:
                    variant === 'Add' ? 0 : data?.getPlan.plan?.settings?.totalCustomDomainLimit,
                  totalLinksLimit:
                    variant === 'Add' ? 0 : data?.getPlan.plan?.settings?.totalLinksLimit,
                  addedToDirectoryEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.addedToDirectoryEnabled,
                  coloredLinksEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.coloredLinksEnabled,
                  customBackHalfEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.customBackHalfEnabled,
                  customFooterBrandingEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.customFooterBrandingEnabled,
                  darkModeEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.darkModeEnabled,
                  emailCaptureEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.emailCaptureEnabled,
                  facebookPixelEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.facebookPixelEnabled,
                  googleAnalyticsEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.googleAnalyticsEnabled,
                  leapLinkEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.leapLinkEnabled,
                  linksSchedulingEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.linksSchedulingEnabled,
                  noAdsEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.noAdsEnabled,
                  passwordProtectionEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.passwordProtectionEnabled,
                  removableBrandingEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.removableBrandingEnabled,
                  sensitiveContentWarningEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.sensitiveContentWarningEnabled,
                  seoEnabled: variant === 'Add' ? false : data?.getPlan.plan?.settings?.seoEnabled,
                  socialEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.socialEnabled,
                  utmParametersEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.utmParametersEnabled,
                  verifiedCheckmarkEnabled:
                    variant === 'Add'
                      ? false
                      : data?.getPlan.plan?.settings?.verifiedCheckmarkEnabled,
                  donationLinkEnabled:
                    variant === 'Add' ? false : data?.getPlan.plan?.settings?.donationLinkEnabled,
                } as PlanInput
              }
              onSubmit={async (values, { setSubmitting }) => {
                if (variant === 'Add') {
                  const response = await createPlan({
                    options: {
                      addedToDirectoryEnabled: values.addedToDirectoryEnabled,
                      annualPrice: values.annualPrice,
                      annualPriceStripeId: values.annualPriceStripeId,
                      coloredLinksEnabled: values.coloredLinksEnabled,
                      customBackHalfEnabled: values.customBackHalfEnabled,
                      customFooterBrandingEnabled: values.customFooterBrandingEnabled,
                      darkModeEnabled: values.darkModeEnabled,
                      emailCaptureEnabled: values.emailCaptureEnabled,
                      facebookPixelEnabled: values.facebookPixelEnabled,
                      googleAnalyticsEnabled: values.googleAnalyticsEnabled,
                      leapLinkEnabled: values.leapLinkEnabled,
                      linksSchedulingEnabled: values.linksSchedulingEnabled,
                      monthlyPrice: values.monthlyPrice,
                      monthlyPriceStripeId: values.monthlyPriceStripeId,
                      name: values.name,
                      noAdsEnabled: values.noAdsEnabled,
                      passwordProtectionEnabled: values.passwordProtectionEnabled,
                      removableBrandingEnabled: values.removableBrandingEnabled,
                      sensitiveContentWarningEnabled: values.sensitiveContentWarningEnabled,
                      seoEnabled: values.seoEnabled,
                      socialEnabled: values.socialEnabled,
                      totalBiolinksLimit: values.totalBiolinksLimit,
                      totalCustomDomainLimit: values.totalCustomDomainLimit,
                      totalLinksLimit: values.totalLinksLimit,
                      utmParametersEnabled: values.utmParametersEnabled,
                      verifiedCheckmarkEnabled: values.verifiedCheckmarkEnabled,
                      visibilityStatus: values.visibilityStatus,
                      donationLinkEnabled: values.donationLinkEnabled,
                    },
                  })

                  if (response.data?.createPlan?.errors) {
                    addErrors(response.data.createPlan.errors)
                  } else {
                    router.push('/plans')
                  }
                } else {
                  const response = await editPlan({
                    id: id as number,
                    options: {
                      addedToDirectoryEnabled: values.addedToDirectoryEnabled,
                      annualPrice: values.annualPrice,
                      annualPriceStripeId: values.annualPriceStripeId,
                      coloredLinksEnabled: values.coloredLinksEnabled,
                      customBackHalfEnabled: values.customBackHalfEnabled,
                      customFooterBrandingEnabled: values.customFooterBrandingEnabled,
                      darkModeEnabled: values.darkModeEnabled,
                      emailCaptureEnabled: values.emailCaptureEnabled,
                      facebookPixelEnabled: values.facebookPixelEnabled,
                      googleAnalyticsEnabled: values.googleAnalyticsEnabled,
                      leapLinkEnabled: values.leapLinkEnabled,
                      linksSchedulingEnabled: values.linksSchedulingEnabled,
                      monthlyPrice: values.monthlyPrice,
                      monthlyPriceStripeId: values.monthlyPriceStripeId,
                      name: values.name,
                      noAdsEnabled: values.noAdsEnabled,
                      passwordProtectionEnabled: values.passwordProtectionEnabled,
                      removableBrandingEnabled: values.removableBrandingEnabled,
                      sensitiveContentWarningEnabled: values.sensitiveContentWarningEnabled,
                      seoEnabled: values.seoEnabled,
                      socialEnabled: values.socialEnabled,
                      totalBiolinksLimit: values.totalBiolinksLimit,
                      totalCustomDomainLimit: values.totalCustomDomainLimit,
                      totalLinksLimit: values.totalLinksLimit,
                      utmParametersEnabled: values.utmParametersEnabled,
                      verifiedCheckmarkEnabled: values.verifiedCheckmarkEnabled,
                      visibilityStatus: values.visibilityStatus,
                      donationLinkEnabled: values.donationLinkEnabled,
                    },
                  })

                  if (response.data?.editPlan?.errors) {
                    addErrors(response.data.editPlan.errors)
                  } else {
                    router.push('/plans')
                  }
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
                <Form role="form" method="post" onSubmit={handleSubmit}>
                  <div className="p-4">
                    <Row>
                      <Col>
                        <InputField
                          name="name"
                          type="text"
                          label="Plan Name"
                          className="mb-3"
                          placeholder="Enter plan name"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <InputField
                          name="monthlyPrice"
                          type="number"
                          label="Monthly Price"
                          className="mb-3"
                          placeholder="Enter monthly price"
                        />
                      </Col>
                      <Col md={6}>
                        <InputField
                          name="monthlyPriceStripeId"
                          type="text"
                          label="Monthly Price Stripe ID"
                          className="mb-3"
                          placeholder="Enter monthly price stripe ID"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <InputField
                          name="annualPrice"
                          type="number"
                          label="Annual Price"
                          className="mb-3"
                          placeholder="Enter annual price"
                        />
                      </Col>
                      <Col md={6}>
                        <InputField
                          name="annualPriceStripeId"
                          type="text"
                          label="Annual Price Stripe ID"
                          className="mb-3"
                          placeholder="Enter annual price stripe ID"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup check>
                          <Label for="visibilityStatus" check>
                            <Input
                              name="visibilityStatus"
                              id="visibilityStatus"
                              type="checkbox"
                              defaultChecked={values.visibilityStatus as boolean}
                              onChange={(e) => setFieldValue('visibilityStatus', e.target.checked)}
                            />
                            Visibility Status
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <h3 className="mt-4 mb-4">Plan Settings</h3>
                    <Row>
                      <Col md={4}>
                        <InputField
                          name="totalBiolinksLimit"
                          type="number"
                          label="Total Biolinks Limit"
                          className="mb-3"
                          placeholder="Enter total biolinks limit"
                        />
                      </Col>
                      <Col md={4}>
                        <InputField
                          name="totalCustomDomainLimit"
                          type="number"
                          label="Total Custom Domain Limit"
                          className="mb-3"
                          placeholder="Enter total custom domain limit"
                        />
                      </Col>
                      <Col md={4}>
                        <InputField
                          name="totalLinksLimit"
                          type="number"
                          label="Total Links Limit"
                          className="mb-3"
                          placeholder="Enter total links limit"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="addedToDirectoryEnabled">
                            Enable Adding to The Directory
                          </Label>
                          <Input
                            name="addedToDirectoryEnabled"
                            id="addedToDirectoryEnabled"
                            type="select"
                            value={values.addedToDirectoryEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'addedToDirectoryEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="coloredLinksEnabled">Enable Colored Links</Label>
                          <Input
                            name="coloredLinksEnabled"
                            id="coloredLinksEnabled"
                            type="select"
                            value={values.coloredLinksEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'coloredLinksEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="customBackHalfEnabled">Enable Custom Back Half</Label>
                          <Input
                            name="customBackHalfEnabled"
                            id="customBackHalfEnabled"
                            type="select"
                            value={values.customBackHalfEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'customBackHalfEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="customFooterBrandingEnabled">
                            Enable Custom Footer Branding
                          </Label>
                          <Input
                            name="customFooterBrandingEnabled"
                            id="customFooterBrandingEnabled"
                            type="select"
                            value={values.customFooterBrandingEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'customFooterBrandingEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="darkModeEnabled">Enable Dark Mode</Label>
                          <Input
                            name="darkModeEnabled"
                            id="darkModeEnabled"
                            type="select"
                            value={values.darkModeEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'darkModeEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="emailCaptureEnabled">Enable Email Capture</Label>
                          <Input
                            name="emailCaptureEnabled"
                            id="emailCaptureEnabled"
                            type="select"
                            value={values.emailCaptureEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'emailCaptureEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="facebookPixelEnabled">Enable Facebook Pixel</Label>
                          <Input
                            name="facebookPixelEnabled"
                            id="facebookPixelEnabled"
                            type="select"
                            value={values.facebookPixelEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'facebookPixelEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="googleAnalyticsEnabled">Enable Google Analytics</Label>
                          <Input
                            name="googleAnalyticsEnabled"
                            id="googleAnalyticsEnabled"
                            type="select"
                            value={values.googleAnalyticsEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'googleAnalyticsEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="leapLinkEnabled">Enable Leap Links</Label>
                          <Input
                            name="leapLinkEnabled"
                            id="leapLinkEnabled"
                            type="select"
                            value={values.leapLinkEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'leapLinkEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="linksSchedulingEnabled">Enable Links Scheduling</Label>
                          <Input
                            name="linksSchedulingEnabled"
                            id="linksSchedulingEnabled"
                            type="select"
                            value={values.linksSchedulingEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'linksSchedulingEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="noAdsEnabled">Enable No Ads</Label>
                          <Input
                            name="noAdsEnabled"
                            id="noAdsEnabled"
                            type="select"
                            value={values.noAdsEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue('noAdsEnabled', e.target.value === '1' ? true : false)
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="passwordProtectionEnabled">Enable Password Protection</Label>
                          <Input
                            name="passwordProtectionEnabled"
                            id="passwordProtectionEnabled"
                            type="select"
                            value={values.passwordProtectionEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'passwordProtectionEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="removableBrandingEnabled">Enable Removable Branding</Label>
                          <Input
                            name="removableBrandingEnabled"
                            id="removableBrandingEnabled"
                            type="select"
                            value={values.removableBrandingEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'removableBrandingEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="sensitiveContentWarningEnabled">
                            Enable Sensitive Content Warning
                          </Label>
                          <Input
                            name="sensitiveContentWarningEnabled"
                            id="sensitiveContentWarningEnabled"
                            type="select"
                            value={values.sensitiveContentWarningEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'sensitiveContentWarningEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="seoEnabled">Enable SEO</Label>
                          <Input
                            name="seoEnabled"
                            id="seoEnabled"
                            type="select"
                            value={values.seoEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue('seoEnabled', e.target.value === '1' ? true : false)
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="socialEnabled">Enable Social Links</Label>
                          <Input
                            name="socialEnabled"
                            id="socialEnabled"
                            type="select"
                            value={values.socialEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue('socialEnabled', e.target.value === '1' ? true : false)
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="utmParametersEnabled">Enable UTM Parameters</Label>
                          <Input
                            name="utmParametersEnabled"
                            id="utmParametersEnabled"
                            type="select"
                            value={values.utmParametersEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'utmParametersEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="verifiedCheckmarkEnabled">Enable Verified Checkmarks</Label>
                          <Input
                            name="verifiedCheckmarkEnabled"
                            id="verifiedCheckmarkEnabled"
                            type="select"
                            value={values.verifiedCheckmarkEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'verifiedCheckmarkEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="donationLinkEnabled">Enable Donation Links</Label>
                          <Input
                            name="donationLinkEnabled"
                            id="donationLinkEnabled"
                            type="select"
                            value={values.donationLinkEnabled === true ? '1' : '0'}
                            onChange={(e) =>
                              setFieldValue(
                                'donationLinkEnabled',
                                e.target.value === '1' ? true : false
                              )
                            }
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <CardFooter className="py-4">
                    <Button className="my-4" type="submit" color="primary">
                      {isSubmitting ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Saving
                        </>
                      ) : (
                        <>Save</>
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
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default connect(null, mapDispatchToProps)(AddOrEditPlanForm)

import React, { useState } from 'react'
import ErrorPage from 'next/error'
import {
  Container,
  Row,
  Card,
  CardHeader,
  Col,
  Button,
  Form,
  CardBody,
  FormGroup,
} from 'reactstrap'
import { Formik } from 'formik'
import {
  useCreateBiolinkMutation,
  useEditBiolinkMutation,
  useGetBiolinkQuery,
  useGetAllUsersQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Link from 'next/link'
import router from 'next/router'
import SelectField from '../SelectField/SelectField'

interface AddOrEditBiolinksFormProps {
  addErrors: (errorMessage: string) => void
  variant: 'Add' | 'Edit'
  id?: string
}

const AddOrEditBiolinksForm: React.FC<AddOrEditBiolinksFormProps> = ({
  addErrors,
  id,
  variant,
}) => {
  const [userInput, setUserInput] = useState<string>('')

  const [, addNewBiolink] = useCreateBiolinkMutation()
  const [, editBiolink] = useEditBiolinkMutation()

  const [{ data: users }] = useGetAllUsersQuery({
    variables: { options: { limit: 5, query: userInput } },
  })

  const [{ data: biolinkData }] = useGetBiolinkQuery({ variables: { biolinkId: id as string } })

  const userOptions = users?.getAllUsers?.data.map((user) => ({
    value: user.id,
    label: user.email,
  }))

  return variant === 'Add' || biolinkData?.getBiolink ? (
    <Container className="mt--7" fluid>
      <Row className="d-flex justify-content-center">
        <Col xl={9}>
          <Formik
            enableReinitialize={true}
            initialValues={{
              userId: variant === 'Add' ? '' : (biolinkData?.getBiolink?.user?.id as string),
              username:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.username?.username as string),
              displayName:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.displayName as string),
              categoryId:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.category?.id as string),
              city: variant === 'Add' ? '' : (biolinkData?.getBiolink?.city as string),
              state: variant === 'Add' ? '' : (biolinkData?.getBiolink?.state as string),
              country: variant === 'Add' ? '' : (biolinkData?.getBiolink?.country as string),
              bio: variant === 'Add' ? '' : (biolinkData?.getBiolink?.bio as string),
              featured:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.featured === true
                  ? 'true'
                  : 'false',
              profilePhoto: undefined,
              coverPhoto: undefined,
              changedUsername:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.changedUsername === true
                  ? 'true'
                  : 'false',

              showEmail:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.showEmail === true
                  ? 'true'
                  : 'false',
              email: variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.email as string),
              showPhone:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.showPhone === true
                  ? 'true'
                  : 'false',
              phone: variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.phone as string),
              enableColoredContactButtons:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableColoredContactButtons === true
                  ? 'true'
                  : 'false',

              blockSearchEngineIndexing:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.blockSearchEngineIndexing === true
                  ? 'true'
                  : 'false',
              metaDescription:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.metaDescription as string),
              opengraphImageUrl: undefined,
              pageTitle:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.pageTitle as string),

              removeDefaultBranding:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.removeDefaultBranding === true
                  ? 'true'
                  : 'false',
              enableCustomBranding:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableCustomBranding === true
                  ? 'true'
                  : 'false',
              customBrandingName:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.customBrandingName as string),
              customBrandingUrl:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.customBrandingUrl as string),

              addedToDirectory:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.addedToDirectory === true
                  ? 'true'
                  : 'false',
              directoryBio:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.directoryBio as string),

              enableEmailCapture:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableEmailCapture === true
                  ? 'true'
                  : 'false',
              emailCaptureId:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.emailCaptureId as string),
              enableFacebookPixel:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableFacebookPixel === true
                  ? 'true'
                  : 'false',
              facebookPixelId:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.facebookPixelId as string),
              enableGoogleAnalytics:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableGoogleAnalytics === true
                  ? 'true'
                  : 'false',
              googleAnalyticsCode:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.googleAnalyticsCode as string),

              enableDarkMode:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableDarkMode === true
                  ? 'true'
                  : 'false',

              enablePasswordProtection:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enablePasswordProtection === true
                  ? 'true'
                  : 'false',
              password: undefined,
              enableSensitiveContentWarning:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableSensitiveContentWarning === true
                  ? 'true'
                  : 'false',

              enableUtmParameters:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableUtmParameters === true
                  ? 'true'
                  : 'false',
              utmCampaign:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.utmCampaign as string),
              utmMedium:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.utmMedium as string),
              utmSource:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.utmSource as string),

              payoneerLink:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.payoneerLink as string),
              paypalLink:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.paypalLink as string),
              venmoLink:
                variant === 'Add' ? '' : (biolinkData?.getBiolink?.settings?.venmoLink as string),

              enableColoredSocialMediaIcons:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.settings?.enableColoredSocialMediaIcons === true
                  ? 'true'
                  : 'false',
              socialAccountStyleType:
                variant === 'Add'
                  ? ''
                  : (biolinkData?.getBiolink?.settings?.socialAccountStyleType as string),
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (variant === 'Add') {
                const response = await addNewBiolink({
                  input: {
                    addedToDirectory: values.addedToDirectory === 'true',
                    bio: values.bio,
                    blockSearchEngineIndexing: values.blockSearchEngineIndexing === 'true',
                    categoryId: values.categoryId,
                    changedUsername: values.changedUsername === 'true',
                    city: values.city,
                    country: values.country,
                    coverPhoto: values.coverPhoto,
                    customBrandingName: values.customBrandingName,
                    customBrandingUrl: values.customBrandingUrl,
                    directoryBio: values.directoryBio,
                    displayName: values.displayName,
                    email: values.email,
                    emailCaptureId: values.emailCaptureId,
                    enableColoredContactButtons: values.enableColoredContactButtons === 'true',
                    enableColoredSocialMediaIcons: values.enableColoredSocialMediaIcons === 'true',
                    enableCustomBranding: values.enableCustomBranding === 'true',
                    enableDarkMode: values.enableDarkMode === 'true',
                    enableEmailCapture: values.enableEmailCapture === 'true',
                    enableFacebookPixel: values.enableFacebookPixel === 'true',
                    enableGoogleAnalytics: values.enableGoogleAnalytics === 'true',
                    enablePasswordProtection: values.enablePasswordProtection === 'true',
                    enableSensitiveContentWarning: values.enableSensitiveContentWarning === 'true',
                    enableUtmParameters: values.enableUtmParameters === 'true',
                    facebookPixelId: values.facebookPixelId,
                    featured: values.featured === 'true',
                    googleAnalyticsCode: values.googleAnalyticsCode,
                    metaDescription: values.metaDescription,
                    opengraphImageUrl: values.opengraphImageUrl,
                    pageTitle: values.pageTitle,
                    password: values.password,
                    payoneerLink: values.payoneerLink,
                    paypalLink: values.paypalLink,
                    phone: values.phone,
                    profilePhoto: values.profilePhoto,
                    removeDefaultBranding: values.removeDefaultBranding === 'true',
                    showEmail: values.showEmail === 'true',
                    showPhone: values.showPhone === 'true',
                    socialAccountStyleType: values.socialAccountStyleType,
                    state: values.state,
                    userId: values.userId,
                    username: values.username,
                    utmCampaign: values.utmCampaign,
                    utmMedium: values.utmMedium,
                    utmSource: values.utmSource,
                    venmoLink: values.venmoLink,
                  },
                })

                if (response.error) {
                  addErrors(response.error.message)
                } else {
                  router.push('/users')
                }
              } else {
                const response = await editBiolink({
                  id: id as string,
                  input: {
                    addedToDirectory: values.addedToDirectory === 'true',
                    bio: values.bio,
                    blockSearchEngineIndexing: values.blockSearchEngineIndexing === 'true',
                    categoryId: values.categoryId,
                    changedUsername: values.changedUsername === 'true',
                    city: values.city,
                    country: values.country,
                    coverPhoto: values.coverPhoto,
                    customBrandingName: values.customBrandingName,
                    customBrandingUrl: values.customBrandingUrl,
                    directoryBio: values.directoryBio,
                    displayName: values.displayName,
                    email: values.email,
                    emailCaptureId: values.emailCaptureId,
                    enableColoredContactButtons: values.enableColoredContactButtons === 'true',
                    enableColoredSocialMediaIcons: values.enableColoredSocialMediaIcons === 'true',
                    enableCustomBranding: values.enableCustomBranding === 'true',
                    enableDarkMode: values.enableDarkMode === 'true',
                    enableEmailCapture: values.enableEmailCapture === 'true',
                    enableFacebookPixel: values.enableFacebookPixel === 'true',
                    enableGoogleAnalytics: values.enableGoogleAnalytics === 'true',
                    enablePasswordProtection: values.enablePasswordProtection === 'true',
                    enableSensitiveContentWarning: values.enableSensitiveContentWarning === 'true',
                    enableUtmParameters: values.enableUtmParameters === 'true',
                    facebookPixelId: values.facebookPixelId,
                    featured: values.featured === 'true',
                    googleAnalyticsCode: values.googleAnalyticsCode,
                    metaDescription: values.metaDescription,
                    opengraphImageUrl: values.opengraphImageUrl,
                    pageTitle: values.pageTitle,
                    password: values.password,
                    payoneerLink: values.payoneerLink,
                    paypalLink: values.paypalLink,
                    phone: values.phone,
                    profilePhoto: values.profilePhoto,
                    removeDefaultBranding: values.removeDefaultBranding === 'true',
                    showEmail: values.showEmail === 'true',
                    showPhone: values.showPhone === 'true',
                    socialAccountStyleType: values.socialAccountStyleType,
                    state: values.state,
                    userId: values.userId,
                    username: values.username,
                    utmCampaign: values.utmCampaign,
                    utmMedium: values.utmMedium,
                    utmSource: values.utmSource,
                    venmoLink: values.venmoLink,
                  },
                })

                if (response.error) {
                  addErrors(response.error.message)
                } else {
                  router.push('/users')
                }
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
              <Form role="form" method="post" onSubmit={handleSubmit}>
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col>
                        <h3 className="mb-0 float-left">
                          {variant === 'Add' ? 'Create New User' : 'Edit User'}
                        </h3>
                        <div className="float-right">
                          <Link href="/biolinks">
                            <Button color="primary" size="sm">
                              Back
                            </Button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <h6 className="heading-small text-muted mb-4">Basic Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="userId">
                              User
                            </label>
                            <SelectField
                              name="userId"
                              id="userId"
                              options={userOptions}
                              handleInputChange={(value) => setUserInput(value)}
                              onChange={(value) => setFieldValue('userId', value?.value)}
                              value={values.userId as string}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
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
                  </CardBody>
                </Card>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
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

export default connect(null, mapDispatchToProps)(AddOrEditBiolinksForm)

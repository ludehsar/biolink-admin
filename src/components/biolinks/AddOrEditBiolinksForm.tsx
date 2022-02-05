import React, { useEffect, useState } from 'react'
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
  Input,
  CustomInput,
} from 'reactstrap'
import { Formik } from 'formik'
import {
  useCreateBiolinkMutation,
  useEditBiolinkMutation,
  useGetBiolinkQuery,
  useGetAllUsersQuery,
  useGetAllCategoriesQuery,
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
  userId?: string
}

const AddOrEditBiolinksForm: React.FC<AddOrEditBiolinksFormProps> = ({
  addErrors,
  id,
  variant,
}) => {
  const [userInput, setUserInput] = useState<string>('')
  const [categoryInput, setCategoryInput] = useState<string>('')

  const [, addNewBiolink] = useCreateBiolinkMutation()
  const [, editBiolink] = useEditBiolinkMutation()

  const [{ data: users }] = useGetAllUsersQuery({
    variables: { options: { limit: 5, query: userInput } },
  })

  const [{ data: categories }] = useGetAllCategoriesQuery({
    variables: { options: { limit: 5, query: categoryInput } },
  })

  const [{ data: biolinkData }] = useGetBiolinkQuery({ variables: { biolinkId: id as string } })

  const userOptions = users?.getAllUsers?.data.map((user) => ({
    value: user.id,
    label: user.email,
  }))

  const categoryOptions = categories?.getAllCategories?.data.map((category) => ({
    value: category.id,
    label: category.categoryName,
  }))

  useEffect(() => {
    if (biolinkData?.getBiolink) {
      setUserInput(biolinkData.getBiolink.user?.email || '')
      setCategoryInput(biolinkData.getBiolink.category?.categoryName || '')
    }
  }, [biolinkData?.getBiolink])

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
              profilePhoto: undefined as File | undefined,
              coverPhoto: undefined as File | undefined,
              featured:
                variant === 'Add'
                  ? 'false'
                  : biolinkData?.getBiolink?.featured === true
                  ? 'true'
                  : 'false',
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
              opengraphImageUrl: '',
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
                  ? 'Round'
                  : (biolinkData?.getBiolink?.settings?.socialAccountStyleType as string),
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (variant === 'Add') {
                console.log(values.profilePhoto)
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
                  router.push('/biolinks')
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
                  router.push('/biolinks')
                }
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting, handleSubmit, handleBlur, handleChange, values, setFieldValue }) => (
              <Form role="form" method="post" onSubmit={handleSubmit}>
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col>
                        <h3 className="mb-0 float-left">
                          {variant === 'Add' ? 'Create New Biolink' : 'Edit Biolink'}
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
                              User <span>*</span>
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
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="username">
                              Username <span>*</span>
                            </label>
                            <Input
                              type="text"
                              name="username"
                              className="bg-white form-control-alternative"
                              id="username"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.username || ''}
                              placeholder="Enter username"
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Profile Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="displayName">
                              Display Name
                            </label>
                            <Input
                              type="text"
                              name="displayName"
                              className="bg-white form-control-alternative"
                              id="displayName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.displayName || ''}
                              placeholder="Enter display name"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="categoryId">
                              Category
                            </label>
                            <SelectField
                              name="categoryId"
                              id="categoryId"
                              options={categoryOptions}
                              handleInputChange={(value) => setCategoryInput(value)}
                              onChange={(value) => setFieldValue('categoryId', value?.value)}
                              value={values.categoryId as string}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="city">
                              City
                            </label>
                            <Input
                              type="text"
                              name="city"
                              className="bg-white form-control-alternative"
                              id="city"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.city || ''}
                              placeholder="Enter city"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="state">
                              State
                            </label>
                            <Input
                              type="text"
                              name="state"
                              className="bg-white form-control-alternative"
                              id="state"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.state || ''}
                              placeholder="Enter state"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="country">
                              Country
                            </label>
                            <Input
                              type="text"
                              name="country"
                              className="bg-white form-control-alternative"
                              id="country"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.country || ''}
                              placeholder="Enter country"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="bio">
                              Bio
                            </label>
                            <Input
                              type="textarea"
                              rows={4}
                              name="bio"
                              className="bg-white form-control-alternative"
                              id="bio"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.bio || ''}
                              placeholder="Enter small description"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="profilePhoto">
                              Profile Photo
                            </label>
                            <CustomInput
                              type="file"
                              accept="image/*"
                              name="profilePhoto"
                              className="bg-white form-control-alternative"
                              id="profilePhoto"
                              onChange={(event) => {
                                setFieldValue(
                                  'profilePhoto',
                                  event.currentTarget.files && event.currentTarget.files[0]
                                    ? event.currentTarget.files[0]
                                    : undefined
                                )
                              }}
                              placeholder="Enter profile photo"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="coverPhoto">
                              Cover Photo
                            </label>
                            <CustomInput
                              type="file"
                              accept="image/*"
                              name="coverPhoto"
                              className="bg-white form-control-alternative"
                              id="coverPhoto"
                              onChange={(event) => {
                                setFieldValue(
                                  'coverPhoto',
                                  event.currentTarget.files
                                    ? event.currentTarget.files[0]
                                    : undefined
                                )
                              }}
                              placeholder="Enter cover photo"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="featured">
                              Featured?
                            </label>
                            <Input
                              type="select"
                              name="featured"
                              className="bg-white form-control-alternative"
                              id="featured"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.featured || 'false'}
                              placeholder="Featured"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="changedUsername">
                              Changed Username?
                            </label>
                            <Input
                              type="select"
                              name="changedUsername"
                              className="bg-white form-control-alternative"
                              id="changedUsername"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.changedUsername || 'false'}
                              placeholder="Changed Username?"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Contact Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="enableColoredContactButtons"
                            >
                              Enable Colored Contact Button
                            </label>
                            <Input
                              type="select"
                              name="enableColoredContactButtons"
                              className="bg-white form-control-alternative"
                              id="enableColoredContactButtons"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableColoredContactButtons || 'false'}
                              placeholder="Enable colored contact button"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="showEmail">
                              Show Email
                            </label>
                            <Input
                              type="select"
                              name="showEmail"
                              className="bg-white form-control-alternative"
                              id="showEmail"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.showEmail || 'false'}
                              placeholder="Show Email"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="email">
                              Email
                            </label>
                            <Input
                              type="email"
                              name="email"
                              className="bg-white form-control-alternative"
                              id="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email || ''}
                              placeholder="Enter email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="showPhone">
                              Show Phone
                            </label>
                            <Input
                              type="select"
                              name="showPhone"
                              className="bg-white form-control-alternative"
                              id="showPhone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.showPhone || 'false'}
                              placeholder="Show Phone"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="phone">
                              Phone
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              className="bg-white form-control-alternative"
                              id="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone || ''}
                              placeholder="Enter phone"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">SEO Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="blockSearchEngineIndexing"
                            >
                              Block Search Engine Indexing
                            </label>
                            <Input
                              type="select"
                              name="blockSearchEngineIndexing"
                              className="bg-white form-control-alternative"
                              id="blockSearchEngineIndexing"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.blockSearchEngineIndexing || 'false'}
                              placeholder="Block search engine indexing"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="opengraphImageUrl">
                              Open Graph Image URL
                            </label>
                            <Input
                              type="text"
                              name="opengraphImageUrl"
                              className="bg-white form-control-alternative"
                              id="opengraphImageUrl"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.opengraphImageUrl || ''}
                              placeholder="Enter open graph image url"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="pageTitle">
                              Page Title
                            </label>
                            <Input
                              type="text"
                              name="pageTitle"
                              className="bg-white form-control-alternative"
                              id="pageTitle"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.pageTitle || ''}
                              placeholder="Enter page title"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="metaDescription">
                              Meta Description
                            </label>
                            <Input
                              type="textarea"
                              rows={4}
                              name="metaDescription"
                              className="bg-white form-control-alternative"
                              id="metaDescription"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.metaDescription || ''}
                              placeholder="Enter meta description"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Branding Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="removeDefaultBranding">
                              Remove Default Branding
                            </label>
                            <Input
                              type="select"
                              name="removeDefaultBranding"
                              className="bg-white form-control-alternative"
                              id="removeDefaultBranding"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.removeDefaultBranding || 'false'}
                              placeholder="Remove default branding"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="enableCustomBranding">
                              Enable Custom Branding
                            </label>
                            <Input
                              type="select"
                              name="enableCustomBranding"
                              className="bg-white form-control-alternative"
                              id="enableCustomBranding"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableCustomBranding || 'false'}
                              placeholder="Enable custom branding"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="customBrandingName">
                              Custom Branding Name
                            </label>
                            <Input
                              type="text"
                              name="customBrandingName"
                              className="bg-white form-control-alternative"
                              id="customBrandingName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.customBrandingName || ''}
                              placeholder="Enter custom branding name"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="customBrandingUrl">
                              Custom Branding URL
                            </label>
                            <Input
                              type="text"
                              name="customBrandingUrl"
                              className="bg-white form-control-alternative"
                              id="customBrandingUrl"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.customBrandingUrl || ''}
                              placeholder="Enter custom branding url"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Directory Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="addedToDirectory">
                              Added to Directory
                            </label>
                            <Input
                              type="select"
                              name="addedToDirectory"
                              className="bg-white form-control-alternative"
                              id="addedToDirectory"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.addedToDirectory || 'false'}
                              placeholder="Added to directory"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="directoryBio">
                              Directory Bio
                            </label>
                            <Input
                              type="textarea"
                              rows={4}
                              name="directoryBio"
                              className="bg-white form-control-alternative"
                              id="directoryBio"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.directoryBio || ''}
                              placeholder="Enter directory bio"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Integration Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="enableEmailCapture">
                              Enable Email Capture
                            </label>
                            <Input
                              type="select"
                              name="enableEmailCapture"
                              className="bg-white form-control-alternative"
                              id="enableEmailCapture"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableEmailCapture || 'false'}
                              placeholder="Enable Email Capture"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="emailCaptureId">
                              Email Capture Id
                            </label>
                            <Input
                              type="text"
                              name="emailCaptureId"
                              className="bg-white form-control-alternative"
                              id="emailCaptureId"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.emailCaptureId || ''}
                              placeholder="Enter email capture id"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="enableFacebookPixel">
                              Enable Facebook Pixel
                            </label>
                            <Input
                              type="select"
                              name="enableFacebookPixel"
                              className="bg-white form-control-alternative"
                              id="enableFacebookPixel"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableFacebookPixel || 'false'}
                              placeholder="Enable Facebook Pixel"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="facebookPixelId">
                              Facebook Pixel ID
                            </label>
                            <Input
                              type="text"
                              name="facebookPixelId"
                              className="bg-white form-control-alternative"
                              id="facebookPixelId"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.facebookPixelId || ''}
                              placeholder="Enter facebook pixel id"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="enableGoogleAnalytics">
                              Enable Google Analytics
                            </label>
                            <Input
                              type="select"
                              name="enableGoogleAnalytics"
                              className="bg-white form-control-alternative"
                              id="enableGoogleAnalytics"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableGoogleAnalytics || 'false'}
                              placeholder="Enable Google Analytics"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="googleAnalyticsCode">
                              Google Analytics Code
                            </label>
                            <Input
                              type="text"
                              name="googleAnalyticsCode"
                              className="bg-white form-control-alternative"
                              id="googleAnalyticsCode"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.googleAnalyticsCode || ''}
                              placeholder="Enter google analytics code"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Theme Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="enableDarkMode">
                              Enable Dark Mode
                            </label>
                            <Input
                              type="select"
                              name="enableDarkMode"
                              className="bg-white form-control-alternative"
                              id="enableDarkMode"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableDarkMode || 'false'}
                              placeholder="Enable Dark Mode"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Privacy Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="enablePasswordProtection"
                            >
                              Enable Password Protection
                            </label>
                            <Input
                              type="select"
                              name="enablePasswordProtection"
                              className="bg-white form-control-alternative"
                              id="enablePasswordProtection"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enablePasswordProtection || 'false'}
                              placeholder="Enable Password Protection"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="enableSensitiveContentWarning"
                            >
                              Enable Sensitive Content Warning
                            </label>
                            <Input
                              type="select"
                              name="enableSensitiveContentWarning"
                              className="bg-white form-control-alternative"
                              id="enableSensitiveContentWarning"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableSensitiveContentWarning || 'false'}
                              placeholder="Enable Sensitive Content Warning"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="password">
                              Password
                            </label>
                            <Input
                              type="password"
                              name="password"
                              className="bg-white form-control-alternative"
                              id="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password || ''}
                              placeholder="Enter Password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">UTM Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="enableUtmParameters">
                              Enable UTM Parameter
                            </label>
                            <Input
                              type="select"
                              name="enableUtmParameters"
                              className="bg-white form-control-alternative"
                              id="enableUtmParameters"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableUtmParameters || 'false'}
                              placeholder="Enable UTM Parameter"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="utmCampaign">
                              UTM Campaign
                            </label>
                            <Input
                              type="text"
                              name="utmCampaign"
                              className="bg-white form-control-alternative"
                              id="utmCampaign"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.utmCampaign || ''}
                              placeholder="Enter UTM Campaign"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="utmMedium">
                              UTM Medium
                            </label>
                            <Input
                              type="text"
                              name="utmMedium"
                              className="bg-white form-control-alternative"
                              id="utmMedium"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.utmMedium || ''}
                              placeholder="Enter UTM Medium"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="utmSource">
                              UTM Source
                            </label>
                            <Input
                              type="text"
                              name="utmSource"
                              className="bg-white form-control-alternative"
                              id="utmSource"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.utmSource || ''}
                              placeholder="Enter UTM Source"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Donation Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="payoneerLink">
                              Payoneer Link
                            </label>
                            <Input
                              type="text"
                              name="payoneerLink"
                              className="bg-white form-control-alternative"
                              id="payoneerLink"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.payoneerLink || ''}
                              placeholder="Enter Payoneer Link"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="paypalLink">
                              PayPal Link
                            </label>
                            <Input
                              type="text"
                              name="paypalLink"
                              className="bg-white form-control-alternative"
                              id="paypalLink"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.paypalLink || ''}
                              placeholder="Enter PayPal Link"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="venmoLink">
                              Venmo Link
                            </label>
                            <Input
                              type="text"
                              name="venmoLink"
                              className="bg-white form-control-alternative"
                              id="venmoLink"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.venmoLink || ''}
                              placeholder="Enter Venmo Link"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Social Icons Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="enableColoredSocialMediaIcons"
                            >
                              Enable Colored Social Media Icons
                            </label>
                            <Input
                              type="select"
                              name="enableColoredSocialMediaIcons"
                              className="bg-white form-control-alternative"
                              id="enableColoredSocialMediaIcons"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.enableColoredSocialMediaIcons || 'false'}
                              placeholder="Enable Colored Social Media Icons"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="socialAccountStyleType">
                              Social Account Style Type
                            </label>
                            <Input
                              type="select"
                              name="socialAccountStyleType"
                              className="bg-white form-control-alternative"
                              id="socialAccountStyleType"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.socialAccountStyleType || 'false'}
                              placeholder="Social Account Style Type"
                            >
                              <option value="Round">Round</option>
                              <option value="Square">Square</option>
                              <option value="OneClick">OneClick</option>
                            </Input>
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

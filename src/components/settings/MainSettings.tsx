import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const MainSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: '',
        defaultLanguage: 'english',
        websiteLogoUrl: '',
        faviconLogoUrl: '',
        defaultTimezone: 'utc',
        enableEmailConfirmation: 'false',
        enableNewUserRegistration: 'false',
        termsAndConditionsUrl: '',
        privacyPolicyUrl: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false)
        return
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} method="post">
          <Card className="shadow">
            <CardBody>
              <FormGroup>
                <label htmlFor="title">Website Title</label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="defaultLanguage">Default Language</label>
                <Input
                  type="select"
                  name="defaultLanguage"
                  id="defaultLanguage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.defaultLanguage}
                >
                  <option value="english">English</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="logo">Website Logo</label>
                <Input
                  type="text"
                  name="logo"
                  id="logo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.websiteLogoUrl}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="favicon">Favicon</label>
                <Input
                  type="text"
                  name="favicon"
                  id="favicon"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.faviconLogoUrl}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="defaultTimezone">Default Timezone</label>
                <Input
                  type="select"
                  name="defaultTimezone"
                  id="defaultTimezone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.defaultTimezone}
                >
                  <option value="utc">UTC</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableEmailConfirmation">Email Confirmation</label>
                <Input
                  type="select"
                  name="enableEmailConfirmation"
                  id="enableEmailConfirmation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableEmailConfirmation}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
                <small id="enableEmailConfirmationHelpBox" className="form-text text-muted">
                  Send out email confirmation when a user registers or changes his email address.
                </small>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableNewUserRegistration">Enable New User Registration</label>
                <Input
                  type="select"
                  name="enableNewUserRegistration"
                  id="enableNewUserRegistration"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableNewUserRegistration}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="termsAndConditionsUrl">Terms and Conditions URL</label>
                <Input
                  type="text"
                  name="termsAndConditionsUrl"
                  id="termsAndConditionsUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.termsAndConditionsUrl}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="privacyPolicyUrl">Privacy Policy URL</label>
                <Input
                  type="text"
                  name="privacyPolicyUrl"
                  id="privacyPolicyUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.privacyPolicyUrl}
                />
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary">
                {isSubmitting ? (
                  <>
                    <i className="fa fa-spinner fa-spin"></i> Saving
                  </>
                ) : (
                  <>Save</>
                )}
              </Button>
            </CardFooter>
          </Card>
        </Form>
      )}
    </Formik>
  )
}

export default MainSettings

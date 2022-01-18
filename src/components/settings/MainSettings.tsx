import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import {
  MainSystemSettings,
  useEditMainSettingsMutation,
  useGetSettingsByKeyQuery,
} from '../../generated/graphql'

const MainSettings: React.FC = () => {
  const [{ data }] = useGetSettingsByKeyQuery({
    variables: { key: 'main' },
  })
  const [, editMainSettings] = useEditMainSettingsMutation()

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: (data?.getSettingsByKey as MainSystemSettings)?.title || '',
        defaultLanguage:
          (data?.getSettingsByKey as MainSystemSettings)?.defaultLanguage || 'english',
        defaultTimezone: (data?.getSettingsByKey as MainSystemSettings)?.defaultTimezone || 'utc',
        enableEmailConfirmation:
          (data?.getSettingsByKey as MainSystemSettings)?.enableEmailConfirmation === true
            ? 'true'
            : 'false',
        enableNewUserRegistration:
          (data?.getSettingsByKey as MainSystemSettings)?.enableNewUserRegistration === true
            ? 'true'
            : 'false',
        termsAndConditionsUrl:
          (data?.getSettingsByKey as MainSystemSettings)?.termsAndConditionsUrl || '',
        privacyPolicyUrl: (data?.getSettingsByKey as MainSystemSettings)?.privacyPolicyUrl || '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await editMainSettings({
          options: {
            title: values.title || '',
            defaultLanguage: values.defaultLanguage || '',
            defaultTimezone: values.defaultTimezone || '',
            enableEmailConfirmation: values.enableEmailConfirmation === 'true',
            enableNewUserRegistration: values.enableNewUserRegistration === 'true',
            termsAndConditionsUrl: values.termsAndConditionsUrl || '',
            privacyPolicyUrl: values.privacyPolicyUrl || '',
          },
        })

        if (response.error) {
          Swal.fire({
            title: 'Error!',
            text: response.error.message,
            icon: 'error',
          })
        }

        if (response.data) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully edited email settings',
            icon: 'success',
          })
          // resetForm({
          //   values: {
          //     title: response.data.editMainSettings.settings.title || '',
          //     defaultLanguage: response.data.editMainSettings.settings.defaultLanguage || '',
          //     defaultTimezone: response.data.editMainSettings.settings.defaultTimezone || '',
          //     enableEmailConfirmation:
          //       response.data.editMainSettings.settings.enableEmailConfirmation === true
          //         ? 'true'
          //         : 'false',
          //     enableNewUserRegistration:
          //       response.data.editMainSettings.settings.enableNewUserRegistration === true
          //         ? 'true'
          //         : 'false',
          //     termsAndConditionsUrl:
          //       response.data.editMainSettings.settings.termsAndConditionsUrl || '',
          //     privacyPolicyUrl: response.data.editMainSettings.settings.privacyPolicyUrl || '',
          //   },
          // })
        }
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

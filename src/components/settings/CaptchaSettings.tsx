import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import { useEditCaptchaSettingsMutation, useGetCaptchaSettingsQuery } from '../../generated/graphql'

const CaptchaSettings: React.FC = () => {
  const [{ data }] = useGetCaptchaSettingsQuery()
  const [, editCaptchaSettings] = useEditCaptchaSettingsMutation()

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        captchaType: data?.getCaptchaSettings.settings?.captchaType || 'basic',
        enableCaptchaOnLoginPage:
          data?.getCaptchaSettings.settings?.enableCaptchaOnLoginPage === true ? 'true' : 'false',
        enableCaptchaOnRegisterPage:
          data?.getCaptchaSettings.settings?.enableCaptchaOnRegisterPage === true
            ? 'true'
            : 'false',
        enableCaptchaOnLostPasswordPage:
          data?.getCaptchaSettings.settings?.enableCaptchaOnLostPasswordPage === true
            ? 'true'
            : 'false',
        enableCaptchaOnResendActivationPage:
          data?.getCaptchaSettings.settings?.enableCaptchaOnResendActivationPage === true
            ? 'true'
            : 'false',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await editCaptchaSettings({
          options: {
            captchaType: values.captchaType,
            enableCaptchaOnLoginPage: values.enableCaptchaOnLoginPage === 'true',
            enableCaptchaOnLostPasswordPage: values.enableCaptchaOnLostPasswordPage === 'true',
            enableCaptchaOnRegisterPage: values.enableCaptchaOnRegisterPage === 'true',
            enableCaptchaOnResendActivationPage:
              values.enableCaptchaOnResendActivationPage === 'true',
          },
        })

        if (
          response.data?.editCaptchaSettings.errors &&
          response.data.editCaptchaSettings.errors.length > 0
        ) {
          Swal.fire({
            title: 'Error!',
            text: response.data?.editCaptchaSettings.errors[0].message,
            icon: 'error',
          })
        }

        if (response.data?.editCaptchaSettings.settings) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully edited captcha settings',
            icon: 'success',
          })
          resetForm({
            values: {
              captchaType: response.data.editCaptchaSettings.settings.captchaType || 'basic',
              enableCaptchaOnLoginPage:
                response.data.editCaptchaSettings.settings.enableCaptchaOnLoginPage === true
                  ? 'true'
                  : 'false',
              enableCaptchaOnLostPasswordPage:
                response.data.editCaptchaSettings.settings.enableCaptchaOnLostPasswordPage === true
                  ? 'true'
                  : 'false',
              enableCaptchaOnRegisterPage:
                response.data.editCaptchaSettings.settings.enableCaptchaOnRegisterPage === true
                  ? 'true'
                  : 'false',
              enableCaptchaOnResendActivationPage:
                response.data.editCaptchaSettings.settings.enableCaptchaOnResendActivationPage ===
                true
                  ? 'true'
                  : 'false',
            },
          })
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
                <label htmlFor="captchaType">Captcha Type</label>
                <Input
                  type="select"
                  name="captchaType"
                  id="captchaType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.captchaType}
                >
                  <option value="basic">Basic Captcha</option>
                  <option value="recaptcha">Google ReCaptcha v2 Checkbox</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableCaptchaOnLoginPage">Enable Captcha on Login Page</label>
                <Input
                  type="select"
                  name="enableCaptchaOnLoginPage"
                  id="enableCaptchaOnLoginPage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableCaptchaOnLoginPage}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableCaptchaOnRegisterPage">
                  Enable Captcha on Registration Page
                </label>
                <Input
                  type="select"
                  name="enableCaptchaOnRegisterPage"
                  id="enableCaptchaOnRegisterPage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableCaptchaOnRegisterPage}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableCaptchaOnLostPasswordPage">
                  Enable Captcha on Lost Password Page
                </label>
                <Input
                  type="select"
                  name="enableCaptchaOnLostPasswordPage"
                  id="enableCaptchaOnLostPasswordPage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableCaptchaOnLostPasswordPage}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableCaptchaOnResendActivationPage">
                  Enable Captcha on Resend Email Activation Page
                </label>
                <Input
                  type="select"
                  name="enableCaptchaOnResendActivationPage"
                  id="enableCaptchaOnResendActivationPage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableCaptchaOnResendActivationPage}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
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

export default CaptchaSettings

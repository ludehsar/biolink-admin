import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const CaptchaSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        captchaType: 'basic',
        enableCaptchaOnLoginPage: 'false',
        enableCaptchaOnRegisterPage: 'false',
        enableCaptchaOnLostPasswordPage: 'false',
        enableCaptchaOnResendActivationPage: 'false',
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

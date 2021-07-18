import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const FacebookLoginSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        enableFacebookLogin: 'false',
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
                <label htmlFor="enableFacebookLogin">Enable Facebook Login</label>
                <Input
                  type="select"
                  name="enableFacebookLogin"
                  id="enableFacebookLogin"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableFacebookLogin}
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

export default FacebookLoginSettings

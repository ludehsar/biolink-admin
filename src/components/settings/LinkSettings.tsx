import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const LinkSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        branding: '',
        enableLinkShortenerSystem: 'false',
        enablePhishtank: 'false',
        enableGoogleSafeBrowsing: 'false',
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
                <label htmlFor="branding">Branding</label>
                <Input
                  type="text"
                  name="branding"
                  id="branding"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.branding}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableLinkShortenerSystem">Enable Link Shortener System</label>
                <Input
                  type="select"
                  name="enableLinkShortenerSystem"
                  id="enableLinkShortenerSystem"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableLinkShortenerSystem}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enablePhishtank">Enable Phishtank</label>
                <Input
                  type="select"
                  name="enablePhishtank"
                  id="enablePhishtank"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enablePhishtank}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableGoogleSafeBrowsing">Enable Google Safe Browsing</label>
                <Input
                  type="select"
                  name="enableGoogleSafeBrowsing"
                  id="enableGoogleSafeBrowsing"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableGoogleSafeBrowsing}
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

export default LinkSettings

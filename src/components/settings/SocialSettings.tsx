import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const SocialSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        youtube: '',
        facebook: '',
        twitter: '',
        instagram: '',
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
                <label htmlFor="youtube">YouTube</label>
                <Input
                  type="text"
                  name="youtube"
                  id="youtube"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.youtube}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="facebook">Facebook</label>
                <Input
                  type="text"
                  name="facebook"
                  id="facebook"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.facebook}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="twitter">Twitter</label>
                <Input
                  type="text"
                  name="twitter"
                  id="twitter"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.twitter}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="instagram">Instagram</label>
                <Input
                  type="text"
                  name="instagram"
                  id="instagram"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.instagram}
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

export default SocialSettings

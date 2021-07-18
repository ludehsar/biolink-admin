import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const EmailSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        fromName: '',
        fromEmail: '',
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
                <label htmlFor="fromName">From Name</label>
                <Input
                  type="text"
                  name="fromName"
                  id="fromName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fromName}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="fromEmail">From Email</label>
                <Input
                  type="email"
                  name="fromEmail"
                  id="fromEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fromEmail}
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

export default EmailSettings

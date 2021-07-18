import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const NotificationSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        emailsToBeNotified: [].join('\n').toString(),
        emailOnNewUser: 'false',
        emailOnNewPayment: 'false',
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
                <label htmlFor="emailsToBeNotified">Emails to Be Notified</label>
                <Input
                  type="textarea"
                  rows="4"
                  name="emailsToBeNotified"
                  id="emailsToBeNotified"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailsToBeNotified}
                />
                <small id="emailsToBeNotifiedHelpBox" className="form-text text-muted">
                  Emails that will receive a notification when one of the actions from below are
                  performed. Add valid email addresses separated by new lines.
                </small>
              </FormGroup>

              <FormGroup>
                <label htmlFor="emailOnNewUser">Email on New User</label>
                <Input
                  type="select"
                  name="emailOnNewUser"
                  id="emailOnNewUser"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailOnNewUser}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="emailOnNewPayment">Email on New Payment</label>
                <Input
                  type="select"
                  name="emailOnNewPayment"
                  id="emailOnNewPayment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailOnNewPayment}
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

export default NotificationSettings

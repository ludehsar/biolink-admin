import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import { useEditEmailSettingsMutation, useGetEmailSettingsQuery } from '../../generated/graphql'

const EmailSettings: React.FC = () => {
  const [{ data }] = useGetEmailSettingsQuery()
  const [, editEmailSettings] = useEditEmailSettingsMutation()
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        fromName: data?.getEmailSettings.settings?.fromName || '',
        fromEmail: data?.getEmailSettings.settings?.fromEmail || '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await editEmailSettings({
          options: {
            fromEmail: values.fromEmail,
            fromName: values.fromName,
          },
        })

        if (
          response.data?.editEmailSettings.errors &&
          response.data.editEmailSettings.errors.length > 0
        ) {
          Swal.fire({
            title: 'Error!',
            text: response.data.editEmailSettings.errors[0].message,
            icon: 'error',
          })
        }

        if (response.data?.editEmailSettings.settings) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully edited email settings',
            icon: 'success',
          })
          resetForm({
            values: {
              fromEmail: response.data.editEmailSettings.settings.fromEmail || '',
              fromName: response.data.editEmailSettings.settings.fromName || '',
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

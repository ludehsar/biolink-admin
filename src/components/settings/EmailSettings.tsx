import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import {
  EmailSystemSettings,
  useEditEmailSettingsMutation,
  useGetSettingsByKeyQuery,
} from '../../generated/graphql'

const EmailSettings: React.FC = () => {
  const [{ data }] = useGetSettingsByKeyQuery({
    variables: { key: 'email' },
  })
  const [, editEmailSettings] = useEditEmailSettingsMutation()
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        fromName: (data?.getSettingsByKey as EmailSystemSettings)?.fromName || '',
        fromEmail: (data?.getSettingsByKey as EmailSystemSettings)?.fromEmail || '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await editEmailSettings({
          options: {
            fromEmail: values.fromEmail,
            fromName: values.fromName,
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
          //     fromEmail: response.data.editEmailSettings.settings.fromEmail || '',
          //     fromName: response.data.editEmailSettings.settings.fromName || '',
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

import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import {
  useEditFacebookSettingsMutation,
  useGetFacebookSettingsQuery,
} from '../../generated/graphql'

const FacebookLoginSettings: React.FC = () => {
  const [{ data }] = useGetFacebookSettingsQuery()
  const [, editFacebookSettings] = useEditFacebookSettingsMutation()

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        enableFacebookLogin:
          data?.getFacebookSettings.settings?.enableFacebookLogin === true ? 'true' : 'false',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await editFacebookSettings({
          options: {
            enableFacebookLogin: values.enableFacebookLogin === 'true',
          },
        })

        if (
          response.data?.editFacebookSettings.errors &&
          response.data.editFacebookSettings.errors.length > 0
        ) {
          Swal.fire({
            title: 'Error!',
            text: response.data.editFacebookSettings.errors[0].message,
            icon: 'error',
          })
        }

        if (response.data?.editFacebookSettings.settings) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully edited email settings',
            icon: 'success',
          })
          resetForm({
            values: {
              enableFacebookLogin:
                response.data.editFacebookSettings.settings.enableFacebookLogin === true
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

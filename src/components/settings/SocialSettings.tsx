import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import { useEditSocialSettingsMutation, useGetSocialSettingsQuery } from '../../generated/graphql'

const SocialSettings: React.FC = () => {
  const [{ data }] = useGetSocialSettingsQuery()
  const [, editSocialSettings] = useEditSocialSettingsMutation()

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        youtube: data?.getSocialSettings.settings?.youtube || '',
        facebook: data?.getSocialSettings.settings?.facebook || '',
        twitter: data?.getSocialSettings.settings?.twitter || '',
        instagram: data?.getSocialSettings.settings?.instagram || '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await editSocialSettings({
          options: {
            facebook: values.facebook,
            instagram: values.instagram,
            twitter: values.twitter,
            youtube: values.youtube,
          },
        })

        if (
          response.data?.editSocialSettings.errors &&
          response.data.editSocialSettings.errors.length > 0
        ) {
          Swal.fire({
            title: 'Error!',
            text: response.data.editSocialSettings.errors[0].message,
            icon: 'error',
          })
        }

        if (response.data?.editSocialSettings.settings) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully edited email settings',
            icon: 'success',
          })
          resetForm({
            values: {
              youtube: response.data.editSocialSettings.settings.youtube || '',
              facebook: response.data.editSocialSettings.settings.facebook || '',
              twitter: response.data.editSocialSettings.settings.twitter || '',
              instagram: response.data.editSocialSettings.settings.instagram || '',
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

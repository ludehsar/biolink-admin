import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import {
  LinkSystemSettings,
  useEditLinkSettingsMutation,
  useGetSettingsByKeyQuery,
} from '../../generated/graphql'

const LinkSettings: React.FC = () => {
  const [{ data }] = useGetSettingsByKeyQuery({
    variables: { key: 'links' },
  })
  const [, editLinkSettings] = useEditLinkSettingsMutation()

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        branding: (data?.getSettingsByKey as LinkSystemSettings)?.branding || '',
        enableLinkShortenerSystem:
          (data?.getSettingsByKey as LinkSystemSettings)?.enableLinkShortenerSystem === true
            ? 'true'
            : 'false',
        enablePhishtank:
          (data?.getSettingsByKey as LinkSystemSettings)?.enablePhishtank === true
            ? 'true'
            : 'false',
        enableGoogleSafeBrowsing:
          (data?.getSettingsByKey as LinkSystemSettings)?.enableGoogleSafeBrowsing === true
            ? 'true'
            : 'false',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await editLinkSettings({
          options: {
            branding: values.branding,
            enableGoogleSafeBrowsing: values.enableGoogleSafeBrowsing === 'true',
            enableLinkShortenerSystem: values.enableLinkShortenerSystem === 'true',
            enablePhishtank: values.enablePhishtank === 'true',
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
          //     branding: response.data.editLinkSettings.settings.branding || '',
          //     enableGoogleSafeBrowsing:
          //       response.data.editLinkSettings.settings.enableGoogleSafeBrowsing === true
          //         ? 'true'
          //         : 'false',
          //     enableLinkShortenerSystem:
          //       response.data.editLinkSettings.settings.enableLinkShortenerSystem === true
          //         ? 'true'
          //         : 'false',
          //     enablePhishtank:
          //       response.data.editLinkSettings.settings.enablePhishtank === true ? 'true' : 'false',
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

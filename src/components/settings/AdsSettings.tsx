import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import { useEditAdsSettingsMutation, useGetAdsSettingsQuery } from '../../generated/graphql'

const AdsSettings: React.FC = () => {
  const [{ data }] = useGetAdsSettingsQuery()
  const [, editAdsSettings] = useEditAdsSettingsMutation()
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        header: data?.getAdsSettings.settings?.header || '',
        footer: data?.getAdsSettings.settings?.footer || '',
        biolinkPageHeader: data?.getAdsSettings.settings?.biolinkPageHeader || '',
        biolinkPageFooter: data?.getAdsSettings.settings?.biolinkPageFooter || '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await editAdsSettings({
          options: {
            biolinkPageFooter: values.biolinkPageFooter,
            biolinkPageHeader: values.biolinkPageHeader,
            footer: values.footer,
            header: values.header,
          },
        })

        if (
          response.data?.editAdsSettings.errors &&
          response.data.editAdsSettings.errors.length > 0
        ) {
          Swal.fire({
            title: 'Error!',
            text: response.data?.editAdsSettings.errors[0].message,
            icon: 'error',
          })
        }

        if (response.data?.editAdsSettings.settings) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully edited ads settings',
            icon: 'success',
          })
          resetForm({
            values: {
              biolinkPageFooter: response.data.editAdsSettings.settings.biolinkPageFooter || '',
              biolinkPageHeader: response.data.editAdsSettings.settings.biolinkPageHeader || '',
              footer: response.data.editAdsSettings.settings.footer || '',
              header: response.data.editAdsSettings.settings.header || '',
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
                <label htmlFor="header">Header</label>
                <Input
                  type="text"
                  name="header"
                  id="header"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.header}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="footer">Footer</label>
                <Input
                  type="text"
                  name="footer"
                  id="footer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.footer}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="biolinkPageHeader">Biolink Page Header</label>
                <Input
                  type="text"
                  name="biolinkPageHeader"
                  id="biolinkPageHeader"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.biolinkPageHeader}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="biolinkPageFooter">Biolink Page Footer</label>
                <Input
                  type="text"
                  name="biolinkPageFooter"
                  id="biolinkPageFooter"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.biolinkPageFooter}
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

export default AdsSettings

import Swal from 'sweetalert2'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import Select from 'react-select'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form, Row, Col } from 'reactstrap'
import {
  BusinessSystemSettings,
  useEditBusinessSettingsMutation,
  useGetSettingsByKeyQuery,
} from '../../generated/graphql'

const BusinessSettings: React.FC = () => {
  const [availableCountries, setAvailableCountries] = useState<{ value: string; label: string }[]>(
    []
  )
  const [{ data }] = useGetSettingsByKeyQuery({
    variables: { key: 'business' },
  })
  const [, editBusinessSettings] = useEditBusinessSettingsMutation()

  const fetchCountries = useCallback(async () => {
    const countryData = await axios.get('https://restcountries.eu/rest/v2/all')

    const countries = await countryData.data
    setAvailableCountries(
      countries.map((country: any) => ({
        value: country.name,
        label: country.name,
      }))
    )
  }, [])

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        enableInvoice:
          (data?.getSettingsByKey as BusinessSystemSettings)?.enableInvoice === true
            ? 'true'
            : 'false',
        name: (data?.getSettingsByKey as BusinessSystemSettings)?.name || '',
        address: (data?.getSettingsByKey as BusinessSystemSettings)?.address || '',
        city: (data?.getSettingsByKey as BusinessSystemSettings)?.city || '',
        zipCode: (data?.getSettingsByKey as BusinessSystemSettings)?.zipCode || '',
        country: (data?.getSettingsByKey as BusinessSystemSettings)?.country || '',
        email: (data?.getSettingsByKey as BusinessSystemSettings)?.email || '',
        phone: (data?.getSettingsByKey as BusinessSystemSettings)?.phone || '',
        taxType: (data?.getSettingsByKey as BusinessSystemSettings)?.taxType || '',
        taxId: (data?.getSettingsByKey as BusinessSystemSettings)?.taxId || '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await editBusinessSettings({
          options: {
            address: values.address,
            city: values.city,
            country: values.country,
            email: values.email,
            enableInvoice: values.enableInvoice === 'true',
            name: values.name,
            phone: values.phone,
            taxId: values.taxId,
            taxType: values.taxType,
            zipCode: values.zipCode,
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
            text: 'Successfully edited business settings',
            icon: 'success',
          })
          // resetForm({
          //   values: {
          //     address: response.data.editBusinessSettings.value?.address || '',
          //     city: response.data.editBusinessSettings.settings.city || '',
          //     country: response.data.editBusinessSettings.settings.country || '',
          //     email: response.data.editBusinessSettings.settings.email || '',
          //     enableInvoice:
          //       response.data.editBusinessSettings.settings.enableInvoice === true
          //         ? 'true'
          //         : 'false',
          //     name: response.data.editBusinessSettings.settings.name || '',
          //     phone: response.data.editBusinessSettings.settings.phone || '',
          //     taxId: response.data.editBusinessSettings.settings.taxId || '',
          //     taxType: response.data.editBusinessSettings.settings.taxType || '',
          //     zipCode: response.data.editBusinessSettings.settings.zipCode || '',
          //   },
          // })
        }
        setSubmitting(false)
        return
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
        <Form onSubmit={handleSubmit} method="post">
          <Card className="shadow">
            <CardBody>
              <FormGroup>
                <label htmlFor="enableInvoice">Enable Invoice</label>
                <Input
                  type="select"
                  name="enableInvoice"
                  id="enableInvoice"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableInvoice}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="address">Address</label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </FormGroup>

              <Row>
                <Col xl={8}>
                  <FormGroup>
                    <label htmlFor="city">City</label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                  </FormGroup>
                </Col>
                <Col xl={4}>
                  <FormGroup>
                    <label htmlFor="zipCode">Zip Code</label>
                    <Input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.zipCode}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <label htmlFor="country">Country</label>
                <Select
                  value={availableCountries.filter((country) => country.label === values.country)}
                  name="country"
                  id="country"
                  options={availableCountries}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => setFieldValue('country', e?.value)}
                />
              </FormGroup>

              <Row>
                <Col xl={6}>
                  <FormGroup>
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </FormGroup>
                </Col>
                <Col xl={6}>
                  <FormGroup>
                    <label htmlFor="phone">Phone</label>
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xl={6}>
                  <FormGroup>
                    <label htmlFor="taxType">Tax Type</label>
                    <Input
                      type="text"
                      name="taxType"
                      id="taxType"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.taxType}
                    />
                  </FormGroup>
                </Col>
                <Col xl={6}>
                  <FormGroup>
                    <label htmlFor="taxId">Tax ID</label>
                    <Input
                      type="text"
                      name="taxId"
                      id="taxId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.taxId}
                    />
                  </FormGroup>
                </Col>
              </Row>
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

export default BusinessSettings

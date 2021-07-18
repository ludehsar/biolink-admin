import axios from 'axios'
import { Formik } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import Select from 'react-select'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form, Row, Col } from 'reactstrap'

const BusinessSettings: React.FC = () => {
  const [availableCountries, setAvailableCountries] = useState<{ value: string; label: string }[]>(
    []
  )

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
        enableInvoice: 'false',
        name: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        email: '',
        phone: '',
        taxType: '',
        taxId: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values))
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
                  defaultValue={{
                    label: values.country,
                    value: values.country,
                  }}
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

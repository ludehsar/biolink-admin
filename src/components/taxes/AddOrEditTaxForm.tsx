import React, { useState, useCallback, useEffect } from 'react'
import ErrorPage from 'next/error'
import {
  Container,
  Row,
  Card,
  CardHeader,
  Col,
  Button,
  Form,
  CardBody,
  FormGroup,
  Input,
} from 'reactstrap'
import Select from 'react-select'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import router from 'next/router'
import axios from 'axios'

import { Formik } from 'formik'
import {
  ErrorResponse,
  useAddTaxMutation,
  useEditTaxMutation,
  useGetTaxQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'

interface AddOrEditTaxFormProps {
  addErrors: (errors: ErrorResponse[]) => void
  variant: 'Add' | 'Edit'
  id?: number
}

const AddOrEditTaxForm: React.FC<AddOrEditTaxFormProps> = ({ addErrors, id, variant }) => {
  const [, addNewTax] = useAddTaxMutation()
  const [, editTax] = useEditTaxMutation()
  const [availableCountries, setAvailableCountries] = useState<{ value: string; label: string }[]>(
    []
  )
  const [{ data }] = useGetTaxQuery({ variables: { taxId: id || 0 } })

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

  return variant === 'Add' || data?.getTax?.tax ? (
    <Container className="mt--7" fluid>
      <Row className="d-flex justify-content-center">
        <Col xl="9">
          <Formik
            enableReinitialize={true}
            initialValues={{
              internalName: variant === 'Add' ? '' : (data?.getTax?.tax?.internalName as string),
              name: variant === 'Add' ? '' : (data?.getTax?.tax?.name as string),
              description: variant === 'Add' ? '' : (data?.getTax?.tax?.description as string),
              value: variant === 'Add' ? 0 : (data?.getTax?.tax?.value as number),
              valueType:
                variant === 'Add' ? 'Percentage' : (data?.getTax?.tax?.valueType as string),
              type: variant === 'Add' ? 'Inclusive' : (data?.getTax?.tax?.type as string),
              billingFor:
                variant === 'Add' ? 'Personal' : (data?.getTax?.tax?.billingFor as string),
              countries:
                variant === 'Add' ? [] : (data?.getTax?.tax?.countries as string).split(','),
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (variant === 'Add') {
                const response = await addNewTax({
                  options: {
                    billingFor: values.billingFor,
                    countries: values.countries.join(','),
                    description: values.description,
                    internalName: values.internalName,
                    name: values.name,
                    type: values.type,
                    value: values.value,
                    valueType: values.valueType,
                  },
                })

                if (response.data?.addTax?.errors) {
                  addErrors(response.data.addTax.errors)
                } else {
                  router.push('/taxes')
                }
              } else {
                const response = await editTax({
                  taxId: id as number,
                  options: {
                    billingFor: values.billingFor,
                    countries: values.countries.join(','),
                    description: values.description,
                    internalName: values.internalName,
                    name: values.name,
                    type: values.type,
                    value: values.value,
                    valueType: values.valueType,
                  },
                })

                if (response.data?.editTax?.errors) {
                  addErrors(response.data.editTax.errors)
                } else {
                  router.push('/taxes')
                }
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting, handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
              <Form role="form" method="post" onSubmit={handleSubmit}>
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">{variant === 'Add' ? 'Add New Tax' : 'Edit Tax'}</h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <h6 className="heading-small text-muted mb-4">Tax Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="internalName">
                              Internal Name
                            </label>
                            <Input
                              type="text"
                              name="internalName"
                              className="bg-white form-control-alternative"
                              id="internalName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.internalName || ''}
                              placeholder="Internal Name"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="name">
                              Name
                            </label>
                            <Input
                              type="text"
                              name="name"
                              className="bg-white form-control-alternative"
                              id="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name || ''}
                              placeholder="Full Name"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="description">
                              Description
                            </label>
                            <Input
                              type="textarea"
                              name="description"
                              className="bg-white form-control-alternative"
                              id="description"
                              rows="4"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.description || ''}
                              placeholder="Description"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="value">
                              Value
                            </label>
                            <Input
                              type="number"
                              name="value"
                              className="bg-white form-control-alternative"
                              id="value"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.value || ''}
                              placeholder="Value"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="valueType">
                              Value Type
                            </label>
                            <Input
                              type="select"
                              name="valueType"
                              className="bg-white form-control-alternative"
                              id="valueType"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.valueType || ''}
                              placeholder="Value Type"
                            >
                              <option value="Percentage">Percentage</option>
                              <option value="Fixed">Fixed</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="type">
                              Type
                            </label>
                            <Input
                              type="select"
                              name="type"
                              className="bg-white form-control-alternative"
                              id="type"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.type || ''}
                              placeholder="Type"
                            >
                              <option value="Inclusive">Inclusive</option>
                              <option value="Exclusive">Exclusive</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="billingFor">
                              Billing For
                            </label>
                            <Input
                              type="select"
                              name="billingFor"
                              className="bg-white form-control-alternative"
                              id="billingFor"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billingFor || ''}
                              placeholder="Type"
                            >
                              <option value="Personal">Personal</option>
                              <option value="Business">Business</option>
                              <option value="Personal &amp; Business">Both</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="countries">
                              Countries
                            </label>
                            <Select
                              defaultValue={values.countries.map((country) => ({
                                value: country,
                                label: country,
                              }))}
                              isMulti
                              name="countries"
                              options={availableCountries}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              onChange={(e) =>
                                setFieldValue(
                                  'countries',
                                  e.map((country) => country.value)
                                )
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button type="submit" color="primary">
                            {isSubmitting ? (
                              <>
                                <i className="fa fa-spinner fa-spin"></i> Saving
                              </>
                            ) : (
                              <>Save</>
                            )}
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default connect(null, mapDispatchToProps)(AddOrEditTaxForm)

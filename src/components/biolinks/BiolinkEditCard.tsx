import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { Formik } from 'formik'
import Link from 'next/link'
import router from 'next/router'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Card, CardHeader, Row, Col, Button, CardBody, Form, FormGroup, Input } from 'reactstrap'

import { Biolink, useEditBiolinkMutation, useGetAllCategoriesQuery } from '../../generated/graphql'
import SelectField from '../SelectField/SelectField'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'

export interface BiolinkEditCardProps {
  biolink?: Biolink
  addErrors: (errorMessage: string) => void
}

const BiolinkEditCard: React.FC<BiolinkEditCardProps> = ({ biolink, addErrors }) => {
  const [, editBiolink] = useEditBiolinkMutation()
  const [availableCountries, setAvailableCountries] = useState<{ value: string; label: string }[]>(
    []
  )
  const [categoryInput, setCategoryInput] = useState<string>('')
  const [{ data: categories }] = useGetAllCategoriesQuery({
    variables: { options: { limit: 5, query: categoryInput } },
  })

  const categoryOptions = categories?.getAllCategories?.data.map((category) => ({
    value: category.id || 0,
    label: category.categoryName || '',
  }))

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
    if (biolink) {
      setCategoryInput(biolink.category?.categoryName || '')
    }
  }, [biolink, fetchCountries])

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        displayName: biolink?.displayName || '',
        categoryId: biolink?.category?.id || '0',
        city: biolink?.city || '',
        state: biolink?.state || '',
        country: biolink?.country || '',
        bio: biolink?.bio || '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await editBiolink({
          id: biolink?.id || '',
          input: {
            bio: values.bio,
            categoryId: values.categoryId,
            city: values.city,
            country: values.country,
            displayName: values.displayName,
            state: values.state,
          },
        })

        if (response.error) {
          addErrors(response.error.message)
        } else {
          router.push('/biolinks')
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
                  <h3 className="mb-0">Biolink Profile</h3>
                </Col>
                <Col className="text-right" xs="4">
                  <Link href={'/biolinks'}>
                    <Button color="primary" href={'/biolinks'} size="sm">
                      Back
                    </Button>
                  </Link>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <h6 className="heading-small text-muted mb-4">User Information</h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="displayName">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="displayName"
                        className="bg-white form-control-alternative"
                        id="displayName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.displayName || ''}
                        placeholder="Full Name"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="username">
                        Username
                      </label>
                      <Input
                        className="bg-white form-control-alternative"
                        value={biolink?.username?.username || ''}
                        id="username"
                        placeholder="Username"
                        type="text"
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="categoryId">
                        Category
                      </label>
                      <SelectField
                        name="categoryId"
                        id="categoryId"
                        options={categoryOptions}
                        handleInputChange={(value) => setCategoryInput(value)}
                        onChange={(value) => setFieldValue('categoryId', value?.value)}
                        value={values.categoryId}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Address */}
              <h6 className="heading-small text-muted mb-4">Contact information</h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="city">
                        City
                      </label>
                      <Input
                        type="text"
                        name="city"
                        className="bg-white form-control-alternative"
                        id="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city || ''}
                        placeholder="City"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="state">
                        State
                      </label>
                      <Input
                        type="text"
                        name="state"
                        className="bg-white form-control-alternative"
                        id="state"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state || ''}
                        placeholder="State"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="country">
                        Country
                      </label>
                      <Select
                        value={availableCountries.filter(
                          (country) => country.label === values.country
                        )}
                        name="country"
                        id="country"
                        options={availableCountries}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(e) => setFieldValue('country', e?.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Description */}
              <h6 className="heading-small text-muted mb-4">About Section</h6>
              <div className="pl-lg-4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="bio">
                    Bio
                  </label>
                  <Input
                    type="textarea"
                    rows={4}
                    name="bio"
                    className="bg-white form-control-alternative"
                    id="bio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bio || ''}
                    placeholder="Bio"
                  />
                </FormGroup>
              </div>
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
            </CardBody>
          </Card>
        </Form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errorMessage: string) => void
} => ({
  addErrors: (errorMessage: string) =>
    dispatch({ type: ADD_ERRORS_REQUESTED, payload: errorMessage }),
})

export default connect(null, mapDispatchToProps)(BiolinkEditCard)

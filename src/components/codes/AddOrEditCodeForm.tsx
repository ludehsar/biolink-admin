import React, { useState, useEffect } from 'react'
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
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import router from 'next/router'

import { Formik } from 'formik'
import {
  ErrorResponse,
  useAddCodeMutation,
  useEditCodeMutation,
  useGetAllUsersQuery,
  useGetCodeQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import SelectField from '../SelectField/SelectField'

interface AddOrEditCodeFormProps {
  addErrors: (errors: ErrorResponse[]) => void
  variant: 'Add' | 'Edit'
  id?: string
}

const AddOrEditCodeForm: React.FC<AddOrEditCodeFormProps> = ({ addErrors, id, variant }) => {
  const [userInput, setUserInput] = useState<string>('')
  const [, addNewCode] = useAddCodeMutation()
  const [, editCode] = useEditCodeMutation()
  const [{ data }] = useGetCodeQuery({ variables: { codeId: id || '' } })
  const [{ data: users }] = useGetAllUsersQuery({
    variables: { options: { first: 5, query: userInput } },
  })

  const userOptions = users?.getAllUsers?.edges?.map((edge) => ({
    value: edge.node.id || '',
    label: edge.node.email || '',
  }))

  useEffect(() => {
    if (variant === 'Edit' && data?.getCode?.code) {
      setUserInput(data.getCode.code.referrer?.email || '')
    }
  }, [data?.getCode?.code, variant])

  return variant === 'Add' || data?.getCode?.code ? (
    <Container className="mt--7" fluid>
      <Row className="d-flex justify-content-center">
        <Col xl="9">
          <Formik
            enableReinitialize={true}
            initialValues={{
              type: variant === 'Add' ? 'Discount' : (data?.getCode?.code?.type as string),
              code: variant === 'Add' ? '' : (data?.getCode?.code?.code as string),
              discount: variant === 'Add' ? 0 : (data?.getCode?.code?.discount as number),
              quantity: variant === 'Add' ? 0 : (data?.getCode?.code?.quantity as number),
              expireDate: variant === 'Add' ? null : (data?.getCode?.code?.expireDate as string),
              referrerId: variant === 'Add' ? '' : (data?.getCode?.code?.referrer?.id as string),
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (variant === 'Add') {
                const response = await addNewCode({
                  options: {
                    code: values.code,
                    discount: values.discount,
                    expireDate: values.expireDate,
                    quantity: values.quantity,
                    referrerId: values.referrerId,
                    type: values.type,
                  },
                })

                if (response.data?.addCode?.errors) {
                  addErrors(response.data.addCode.errors)
                } else {
                  router.push('/codes/discounts')
                }
              } else {
                const response = await editCode({
                  codeId: id as string,
                  options: {
                    code: values.code,
                    discount: values.discount,
                    expireDate: values.expireDate,
                    quantity: values.quantity,
                    referrerId: values.referrerId,
                    type: values.type,
                  },
                })

                if (response.data?.editCode?.errors) {
                  addErrors(response.data.editCode.errors)
                } else {
                  router.push('/codes/discounts')
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
                        <h3 className="mb-0">{variant === 'Add' ? 'Add New Code' : 'Edit Code'}</h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <h6 className="heading-small text-muted mb-4">Code Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="code">
                              Code
                            </label>
                            <Input
                              type="text"
                              name="code"
                              className="bg-white form-control-alternative"
                              id="code"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.code || ''}
                              placeholder="Code"
                            />
                          </FormGroup>
                        </Col>
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
                              <option value="Discount">Discount</option>
                              <option value="Referral">Referral</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="discount">
                              Discount
                            </label>
                            <Input
                              type="number"
                              name="discount"
                              className="bg-white form-control-alternative"
                              id="discount"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.discount || 0}
                              placeholder="Discount"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="quantity">
                              Quantity
                            </label>
                            <Input
                              type="number"
                              name="quantity"
                              className="bg-white form-control-alternative"
                              id="quantity"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.quantity || 0}
                              placeholder="Quantity"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="referrerId">
                              Referrer
                            </label>
                            <SelectField
                              name="referrerId"
                              id="referrerId"
                              options={userOptions}
                              handleInputChange={(value) => setUserInput(value)}
                              onChange={(value) => setFieldValue('referrerId', value?.value)}
                              value={values.referrerId as string}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="expireDate">
                              Expire Date
                            </label>
                            <Input
                              type="date"
                              name="expireDate"
                              className="bg-white form-control-alternative"
                              id="expireDate"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.expireDate || -1}
                              placeholder="Expire Date"
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

export default connect(null, mapDispatchToProps)(AddOrEditCodeForm)

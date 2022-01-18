import React, { useEffect, useState } from 'react'
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
  useAddUsernameMutation,
  useEditUsernameMutation,
  useGetAllUsersQuery,
  useGetUsernameQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import SelectField from '../SelectField/SelectField'

interface AddOrEditUsernameFormProps {
  addErrors: (errorMessage: string) => void
  variant: 'Add' | 'Edit'
  id?: string
}

const AddOrEditUsernameForm: React.FC<AddOrEditUsernameFormProps> = ({
  addErrors,
  id,
  variant,
}) => {
  const [userInput, setUserInput] = useState<string>('')
  const [, addNewUsername] = useAddUsernameMutation()
  const [, editUsername] = useEditUsernameMutation()
  const [{ data }] = useGetUsernameQuery({ variables: { usernameId: id || '' } })
  const [{ data: users }] = useGetAllUsersQuery({
    variables: { options: { limit: 5, query: userInput } },
  })

  const userOptions = users?.getAllUsers?.data.map((user) => ({
    value: user.id || '',
    label: user.email || '',
  }))

  useEffect(() => {
    if (variant === 'Edit' && data?.getUsername) {
      setUserInput(data.getUsername.owner?.email || '')
    }
  }, [data?.getUsername, variant])

  return variant === 'Add' || data?.getUsername ? (
    <Container className="mt--7" fluid>
      <Row className="d-flex justify-content-center">
        <Col xl="9">
          <Formik
            enableReinitialize={true}
            initialValues={{
              premiumType: variant === 'Add' ? 'None' : (data?.getUsername?.premiumType as string),
              username: variant === 'Add' ? '' : (data?.getUsername?.username as string),
              ownerId: variant === 'Add' ? null : (data?.getUsername?.owner?.id as string),
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (variant === 'Add') {
                const response = await addNewUsername({
                  input: {
                    ownerId: values.ownerId,
                    premiumType: values.premiumType,
                    username: values.username,
                  },
                })

                if (response.error) {
                  addErrors(response.error.message)
                } else {
                  router.push('/usernames')
                }
              } else {
                const response = await editUsername({
                  usernameId: id as string,
                  input: {
                    ownerId: values.ownerId,
                    premiumType: values.premiumType,
                    username: values.username,
                  },
                })

                if (response.error) {
                  addErrors(response.error.message)
                } else {
                  router.push('/usernames')
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
                        <h3 className="mb-0">
                          {variant === 'Add' ? 'Add New Username' : 'Edit Username'}
                        </h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <h6 className="heading-small text-muted mb-4">Username Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="premiumType">
                              Premium Type
                            </label>
                            <Input
                              type="select"
                              name="premiumType"
                              className="bg-white form-control-alternative"
                              id="premiumType"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.premiumType || 'None'}
                              placeholder="Premium Type"
                            >
                              <option value="None">None</option>
                              <option value="Premium">Premium</option>
                              <option value="Trademark">Trademark</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="username">
                              Username
                            </label>
                            <Input
                              type="text"
                              name="username"
                              className="bg-white form-control-alternative"
                              id="username"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.username || ''}
                              placeholder="Username"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="ownerId">
                              Owner
                            </label>
                            <SelectField
                              name="ownerId"
                              id="ownerId"
                              options={userOptions}
                              handleInputChange={(value) => setUserInput(value)}
                              onChange={(value) => setFieldValue('ownerId', value?.value)}
                              value={values.ownerId as string}
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
  addErrors: (errorMessage: string) => void
} => ({
  addErrors: (errorMessage: string) =>
    dispatch({ type: ADD_ERRORS_REQUESTED, payload: errorMessage }),
})

export default connect(null, mapDispatchToProps)(AddOrEditUsernameForm)

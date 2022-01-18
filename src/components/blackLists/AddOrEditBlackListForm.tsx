import React from 'react'
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
  useAddBlacklistMutation,
  useEditBlacklistMutation,
  useGetBlacklistQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'

interface AddOrEditBlackListFormProps {
  addErrors: (errorMessage: string) => void
  variant: 'Add' | 'Edit'
  id?: string
}

const AddOrEditBlackListForm: React.FC<AddOrEditBlackListFormProps> = ({
  addErrors,
  id,
  variant,
}) => {
  const [, addNewBlackList] = useAddBlacklistMutation()
  const [, editBlackList] = useEditBlacklistMutation()
  const [{ data }] = useGetBlacklistQuery({ variables: { blacklistId: id || '' } })

  return variant === 'Add' || data?.getBlackList ? (
    <Container className="mt--7" fluid>
      <Row className="d-flex justify-content-center">
        <Col xl="9">
          <Formik
            enableReinitialize={true}
            initialValues={{
              blackListType:
                variant === 'Add' ? 'BadWord' : (data?.getBlackList?.blacklistType as string),
              keyword: variant === 'Add' ? '' : (data?.getBlackList?.keyword as string),
              reason: variant === 'Add' ? '' : (data?.getBlackList?.reason as string),
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (variant === 'Add') {
                const response = await addNewBlackList({
                  input: {
                    blacklistType: values.blackListType,
                    keyword: values.keyword,
                    reason: values.reason,
                  },
                })

                if (response.error) {
                  addErrors(response.error.message)
                } else {
                  router.push('/black-lists/bad-words')
                }
              } else {
                const response = await editBlackList({
                  blacklistId: id || '',
                  input: {
                    blacklistType: values.blackListType,
                    keyword: values.keyword,
                    reason: values.reason,
                  },
                })

                if (response.error) {
                  addErrors(response.error.message)
                } else {
                  router.push('/black-lists/bad-words')
                }
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting, handleChange, handleBlur, handleSubmit, values }) => (
              <Form role="form" method="post" onSubmit={handleSubmit}>
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">
                          {variant === 'Add' ? 'Add New Black List' : 'Edit Black List'}
                        </h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <h6 className="heading-small text-muted mb-4">Black List Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="blackListType">
                              Black List Type
                            </label>
                            <Input
                              type="select"
                              name="blackListType"
                              className="bg-white form-control-alternative"
                              id="blackListType"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.blackListType || 'BadWord'}
                              placeholder="Black List Type"
                            >
                              <option value="BadWord">Bad Word</option>
                              <option value="Email">Email</option>
                              <option value="Username">Username</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="keyword">
                              Keyword
                            </label>
                            <Input
                              type="text"
                              name="keyword"
                              className="bg-white form-control-alternative"
                              id="keyword"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.keyword || ''}
                              placeholder="Keyword"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="reason">
                              Reason
                            </label>
                            <Input
                              type="textarea"
                              name="reason"
                              className="bg-white form-control-alternative"
                              id="reason"
                              rows="4"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.reason || ''}
                              placeholder="Reason"
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

export default connect(null, mapDispatchToProps)(AddOrEditBlackListForm)

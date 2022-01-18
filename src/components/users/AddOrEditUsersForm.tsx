import React, { useState } from 'react'
import ErrorPage from 'next/error'
import { Container, Row, Card, CardHeader, Col, Button, CardFooter, Form, Label } from 'reactstrap'
import InputField from '../InputField/InputField'
import { Formik } from 'formik'
import {
  useCreateUserMutation,
  useGetAllAdminRolesQuery,
  useGetAllPlansQuery,
  useEditUserMutation,
  useGetUserQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Link from 'next/link'
import router from 'next/router'
import SelectField from '../SelectField/SelectField'

interface AddOrEditUsersFormProps {
  addErrors: (errorMessage: string) => void
  variant: 'Add' | 'Edit'
  id?: string
}

const AddOrEditUsersForm: React.FC<AddOrEditUsersFormProps> = ({ addErrors, id, variant }) => {
  const [planInput, setPlanInput] = useState<string>('')
  const [roleInput, setRoleInput] = useState<string>('')
  const [, addNewUser] = useCreateUserMutation()
  const [, editUser] = useEditUserMutation()
  const [{ data: plans }] = useGetAllPlansQuery({
    variables: { options: { limit: 5, query: planInput } },
  })
  const [{ data: adminRoles }] = useGetAllAdminRolesQuery({
    variables: { options: { limit: 5, query: roleInput } },
  })
  const [{ data: userData }] = useGetUserQuery({ variables: { userId: id as string } })

  const planOptions = plans?.getAllPlans.data.map((plan) => ({
    value: plan.id,
    label: plan.name,
  }))

  const adminRoleOptions = adminRoles?.getAllAdminRoles.data.map((role) => ({
    value: role.id,
    label: role.roleName,
  }))

  return variant === 'Add' || userData?.getUser ? (
    <Container className="mt--7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col>
                  <h3 className="mb-0 float-left">
                    {variant === 'Add' ? 'Create New User' : 'Edit User'}
                  </h3>
                  <div className="float-right">
                    <Link href="/users">
                      <Button color="primary" size="sm">
                        Back
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <Formik
              enableReinitialize={true}
              initialValues={{
                email: variant === 'Add' ? '' : (userData?.getUser?.email as string),
                adminRoleId: variant === 'Add' ? '' : userData?.getUser?.adminRole?.id,
                planId: variant === 'Add' ? '' : userData?.getUser?.plan?.id,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                if (variant === 'Add') {
                  const response = await addNewUser({
                    input: {
                      email: values.email,
                      adminRoleId: values.adminRoleId,
                      planId: values.planId,
                    },
                  })

                  if (response.error) {
                    addErrors(response.error.message)
                  } else {
                    router.push('/users')
                  }
                } else {
                  const response = await editUser({
                    userId: id as string,
                    input: {
                      email: values.email,
                      adminRoleId: values.adminRoleId,
                      planId: values.planId,
                    },
                  })

                  if (response.error) {
                    addErrors(response.error.message)
                  } else {
                    router.push('/users')
                  }
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
                <Form role="form" method="post" onSubmit={handleSubmit}>
                  <div className="p-4">
                    <Row>
                      <Col md={4}>
                        <InputField
                          name="email"
                          type="email"
                          label="Email Address"
                          className="mb-3"
                          placeholder="Enter email address"
                        />
                      </Col>
                      <Col md={4}>
                        <Label for="planId">Plan</Label>
                        <SelectField
                          name="planId"
                          id="planId"
                          options={planOptions}
                          handleInputChange={(value) => setPlanInput(value)}
                          onChange={(value) => setFieldValue('planId', value?.value)}
                          value={values.planId as string}
                        />
                      </Col>
                      <Col md={4}>
                        <Label for="adminRoleId">Admin Role</Label>
                        <SelectField
                          name="adminRoleId"
                          id="adminRoleId"
                          options={adminRoleOptions}
                          handleInputChange={(value) => setRoleInput(value)}
                          onChange={(value) => setFieldValue('adminRoleId', value?.value)}
                          value={values.adminRoleId as string}
                        />
                      </Col>
                    </Row>
                  </div>
                  <CardFooter className="py-4">
                    <Button className="my-4" type="submit" color="primary">
                      {isSubmitting ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Saving
                        </>
                      ) : (
                        <>Save</>
                      )}
                    </Button>
                  </CardFooter>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
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

export default connect(null, mapDispatchToProps)(AddOrEditUsersForm)

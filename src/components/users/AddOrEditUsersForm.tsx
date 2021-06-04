import React, { useState } from 'react'
import { NextPage } from 'next'
import { Container, Row, Card, CardHeader, Col, Button, CardFooter, Form, Label } from 'reactstrap'
import InputField from '../InputField/InputField'
import { Formik } from 'formik'
import {
  ErrorResponse,
  useAddNewUserMutation,
  useGetAllAdminRolesQuery,
  useGetAlLCategoriesQuery,
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
  addErrors: (errors: ErrorResponse[]) => void
  variant: 'Add' | 'Edit'
  id?: string
}

const AddOrEditUsersForm: NextPage<AddOrEditUsersFormProps> = ({ addErrors, id, variant }) => {
  const [categoryInput, setCategoryInput] = useState<string>('')
  const [, addNewUser] = useAddNewUserMutation()
  const [, editUser] = useEditUserMutation()
  const [{ data: categories }] = useGetAlLCategoriesQuery({
    variables: { options: { first: 5, query: categoryInput } },
  })
  const [{ data: plans }] = useGetAllPlansQuery()
  const [{ data: adminRoles }] = useGetAllAdminRolesQuery()
  const [{ data: userData }] = useGetUserQuery({ variables: { id: id || '' } })

  const categoryOptions = categories?.getAllCategories?.edges.map((edge) => ({
    value: edge.node.id || '',
    label: edge.node.categoryName || '',
  }))

  const planOptions = plans?.getAllPlans.plans?.map((plan) => ({
    value: plan.id,
    label: plan.name,
  }))

  const adminRoleOptions = adminRoles?.getAllAdminRoles.adminRoles?.map((role) => ({
    value: role.id as number,
    label: role.roleName as string,
  }))

  return (
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
                email: variant === 'Add' ? '' : (userData?.getUser?.user?.email as string),
                username: '',
                displayName: '',
                adminRoleId: variant === 'Add' ? 0 : userData?.getUser?.user?.adminRole?.id,
                categoryId: 0,
                planId: variant === 'Add' ? 0 : userData?.getUser?.user?.plan?.id,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2))
                if (variant === 'Add') {
                  const response = await addNewUser({
                    options: {
                      email: values.email,
                      username: values.username,
                      adminRoleId: values.adminRoleId,
                      categoryId: values.categoryId,
                      displayName: values.displayName,
                      planId: values.planId,
                    },
                  })

                  if (response.data?.addNewUser?.errors) {
                    addErrors(response.data.addNewUser.errors)
                  } else {
                    router.push('/users')
                  }
                } else {
                  const response = await editUser({
                    id: id as string,
                    options: {
                      email: values.email,
                      adminRoleId: values.adminRoleId,
                      planId: values.planId,
                    },
                  })

                  if (response.data?.editUser?.errors) {
                    addErrors(response.data.editUser.errors)
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
                      {variant === 'Add' && (
                        <Col md={4}>
                          <InputField
                            name="displayName"
                            type="text"
                            label="Name"
                            className="mb-3"
                            placeholder="Enter name"
                          />
                        </Col>
                      )}
                      {variant === 'Add' && (
                        <Col md={4}>
                          <InputField
                            name="username"
                            type="text"
                            label="Username"
                            className="mb-3"
                            placeholder="Enter username"
                          />
                        </Col>
                      )}
                      {variant === 'Add' && (
                        <Col md={4}>
                          <Label for="categoryId">Category</Label>
                          <SelectField
                            name="categoryId"
                            id="categoryId"
                            options={categoryOptions}
                            handleInputChange={(value) => setCategoryInput(value)}
                            onChange={(value) => setFieldValue('categoryId', value.value)}
                            value={values.categoryId as number}
                          />
                        </Col>
                      )}
                      <Col md={4}>
                        <Label for="plan">Plan</Label>
                        <SelectField
                          name="plan"
                          id="plan"
                          options={planOptions}
                          onChange={(value) => setFieldValue('planId', value.value)}
                          value={values.planId as number}
                        />
                      </Col>
                      <Col md={4}>
                        <Label for="adminRole">Admin Role</Label>
                        <SelectField
                          name="adminRole"
                          id="adminRole"
                          options={adminRoleOptions}
                          onChange={(value) => setFieldValue('adminRoleId', value.value)}
                          value={values.adminRoleId as number}
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
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default connect(null, mapDispatchToProps)(AddOrEditUsersForm)

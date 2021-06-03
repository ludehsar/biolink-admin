import React, { useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Container, Row, Card, CardHeader, Col, Button, CardFooter, Form, Label } from 'reactstrap'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import InputField from '../../components/InputField/InputField'
import { Formik } from 'formik'
import {
  ErrorResponse,
  useAddNewUserMutation,
  useGetAllAdminRolesQuery,
  useGetAlLCategoriesQuery,
  useGetAllPlansQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Link from 'next/link'
import router from 'next/router'
import SelectField from '../../components/SelectField/SelectField'

interface AddUserProps {
  addErrors: (errors: ErrorResponse[]) => void
}

const AddUserPage: NextPage<AddUserProps> = ({ addErrors }) => {
  const [categoryInput, setCategoryInput] = useState<string>('')
  const [, addNewUser] = useAddNewUserMutation()
  const [{ data: categories }] = useGetAlLCategoriesQuery({
    variables: { options: { first: 5, query: categoryInput } },
  })
  const [{ data: plans }] = useGetAllPlansQuery()
  const [{ data: adminRoles }] = useGetAllAdminRolesQuery()

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
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col>
                    <h3 className="mb-0 float-left">Create New User</h3>
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
                initialValues={{
                  email: '',
                  username: '',
                  displayName: '',
                  adminRole: {
                    value: 0,
                    label: '',
                  },
                  category: {
                    value: 0,
                    label: '',
                  },
                  plan: {
                    value: 0,
                    label: '',
                  },
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  const response = await addNewUser({
                    options: {
                      email: values.email,
                      username: values.username,
                      adminRoleId: values.adminRole?.value,
                      categoryId: values.category?.value,
                      displayName: values.displayName,
                      planId: values.plan?.value,
                    },
                  })

                  if (response.data?.addNewUser?.errors) {
                    addErrors(response.data.addNewUser.errors)
                  } else {
                    router.push('/users')
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
                          <InputField
                            name="displayName"
                            type="text"
                            label="Name"
                            className="mb-3"
                            placeholder="Enter name"
                          />
                        </Col>
                        <Col md={4}>
                          <InputField
                            name="username"
                            type="text"
                            label="Username"
                            className="mb-3"
                            placeholder="Enter username"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Label for="category">Category</Label>
                          <SelectField
                            name="category"
                            id="category"
                            options={categoryOptions}
                            handleInputChange={(value) => setCategoryInput(value)}
                            onChange={(value) => setFieldValue('categoryId', value)}
                            value={values.category.value as number}
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="plan">Plan</Label>
                          <SelectField
                            name="plan"
                            id="plan"
                            options={planOptions}
                            onChange={(value) => setFieldValue('planId', value)}
                            value={values.plan.value as number}
                          />
                        </Col>
                        <Col md={4}>
                          <Label for="adminRole">Admin Role</Label>
                          <SelectField
                            name="adminRole"
                            id="adminRole"
                            options={adminRoleOptions}
                            onChange={(value) => setFieldValue('adminRoleId', value)}
                            value={values.adminRole.value as number}
                          />
                        </Col>
                      </Row>
                    </div>
                    <CardFooter className="py-4">
                      <Button className="my-4" type="submit" color="primary">
                        {isSubmitting ? (
                          <>
                            <i className="fa fa-spinner fa-spin"></i> Signing in
                          </>
                        ) : (
                          <>Sign in</>
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
    </AdminLayout>
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default withUrqlClient(createUrqlClient)(connect(null, mapDispatchToProps)(AddUserPage))

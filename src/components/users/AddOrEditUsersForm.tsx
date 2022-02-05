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
import { Formik } from 'formik'
import {
  useCreateUserMutation,
  useGetAllAdminRolesQuery,
  useGetAllPlansQuery,
  useEditUserMutation,
  useGetUserQuery,
  useGetAllCodesQuery,
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
  const [codeInput, setCodeInput] = useState<string>('')

  const [, addNewUser] = useCreateUserMutation()
  const [, editUser] = useEditUserMutation()

  const [{ data: plans }] = useGetAllPlansQuery({
    variables: { options: { limit: 5, query: planInput } },
  })

  const [{ data: adminRoles }] = useGetAllAdminRolesQuery({
    variables: { options: { limit: 5, query: roleInput } },
  })

  const [{ data: codes }] = useGetAllCodesQuery({
    variables: { options: { limit: 5, query: codeInput } },
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

  const codeOptions = codes?.getAllCodes?.data.map((role) => ({
    value: role.id,
    label: role.code,
  }))

  useEffect(() => {
    if (userData?.getUser) {
      setPlanInput(userData.getUser.plan?.name || '')
      setRoleInput(userData.getUser.adminRole?.roleName || '')
      setCodeInput(userData.getUser.registeredByCode?.code || '')
    }
  }, [userData?.getUser])

  return variant === 'Add' || userData?.getUser ? (
    <Container className="mt--7" fluid>
      <Row className="d-flex justify-content-center">
        <Col xl={9}>
          <Formik
            enableReinitialize={true}
            initialValues={{
              email: variant === 'Add' ? '' : (userData?.getUser?.email as string),
              adminRoleId: variant === 'Add' ? '' : userData?.getUser?.adminRole?.id,
              planId: variant === 'Add' ? '' : userData?.getUser?.plan?.id,
              planType: variant === 'Add' ? 'Free' : userData?.getUser?.planType,
              planTrialDone:
                variant === 'Add'
                  ? 'false'
                  : userData?.getUser?.planTrialDone === true
                  ? 'true'
                  : 'false',
              planExpirationDate:
                variant === 'Add' ? undefined : userData?.getUser?.planExpirationDate,
              registeredByCodeId: variant === 'Add' ? '' : userData?.getUser?.registeredByCode?.id,
              usedReferralsToPurchasePlan:
                variant === 'Add'
                  ? 'false'
                  : userData?.getUser?.usedReferralsToPurchasePlan === true
                  ? 'true'
                  : 'false',
              name: variant === 'Add' ? '' : userData?.getUser?.name,
              billingType: variant === 'Add' ? 'Personal' : userData?.getUser?.billing?.type,
              address1: variant === 'Add' ? '' : userData?.getUser?.billing?.address1,
              address2: variant === 'Add' ? '' : userData?.getUser?.billing?.address2,
              city: variant === 'Add' ? '' : userData?.getUser?.billing?.city,
              state: variant === 'Add' ? '' : userData?.getUser?.billing?.state,
              country: variant === 'Add' ? '' : userData?.getUser?.billing?.country,
              phone: variant === 'Add' ? '' : userData?.getUser?.billing?.phone,
              zip: variant === 'Add' ? '' : userData?.getUser?.billing?.zip,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (variant === 'Add') {
                const response = await addNewUser({
                  input: {
                    adminRoleId: values.adminRoleId,
                    address1: values.address1,
                    address2: values.address2,
                    billingType: values.billingType,
                    city: values.city,
                    country: values.country,
                    email: values.email,
                    name: values.name,
                    phone: values.phone,
                    planExpirationDate: values.planExpirationDate,
                    planId: values.planId,
                    planTrialDone: values.planTrialDone === 'true',
                    planType: values.planType,
                    registeredByCodeId: values.registeredByCodeId,
                    state: values.state,
                    usedReferralsToPurchasePlan: values.usedReferralsToPurchasePlan === 'true',
                    zip: values.zip,
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
                    adminRoleId: values.adminRoleId,
                    address1: values.address1,
                    address2: values.address2,
                    billingType: values.billingType,
                    city: values.city,
                    country: values.country,
                    email: values.email,
                    name: values.name,
                    phone: values.phone,
                    planExpirationDate: values.planExpirationDate,
                    planId: values.planId,
                    planTrialDone: values.planTrialDone === 'true',
                    planType: values.planType,
                    registeredByCodeId: values.registeredByCodeId,
                    state: values.state,
                    usedReferralsToPurchasePlan: values.usedReferralsToPurchasePlan === 'true',
                    zip: values.zip,
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
            {({ isSubmitting, handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
              <Form role="form" method="post" onSubmit={handleSubmit}>
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
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
                  <CardBody>
                    <h6 className="heading-small text-muted mb-4">Basic Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="email">
                              Email <span>*</span>
                            </label>
                            <Input
                              type="email"
                              name="email"
                              className="bg-white form-control-alternative"
                              id="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email || ''}
                              placeholder="Enter email address"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="adminRoleId">
                              Admin Role
                            </label>
                            <SelectField
                              name="adminRoleId"
                              id="adminRoleId"
                              options={adminRoleOptions}
                              handleInputChange={(value) => setRoleInput(value)}
                              onChange={(value) => setFieldValue('adminRoleId', value?.value)}
                              value={values.adminRoleId as string}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Plan Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="planId">
                              Plan
                            </label>
                            <SelectField
                              name="planId"
                              id="planId"
                              options={planOptions}
                              handleInputChange={(value) => setPlanInput(value)}
                              onChange={(value) => setFieldValue('planId', value?.value)}
                              value={values.planId as string}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="planType">
                              Plan Type
                            </label>
                            <Input
                              type="select"
                              name="planType"
                              className="bg-white form-control-alternative"
                              id="planType"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.planType || ''}
                              placeholder="Plan Type"
                            >
                              <option value="Free">Free</option>
                              <option value="Monthly">Monthly</option>``
                              <option value="Annual">Annual</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="planTrialDone">
                              Plan Trial Done?
                            </label>
                            <Input
                              type="select"
                              name="planTrialDone"
                              className="bg-white form-control-alternative"
                              id="planTrialDone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.planTrialDone || ''}
                              placeholder="Plan Type"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="planExpirationDate">
                              Plan Expiration Date
                            </label>
                            <Input
                              type="date"
                              name="planExpirationDate"
                              className="bg-white form-control-alternative"
                              id="planExpirationDate"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.planExpirationDate || ''}
                              placeholder="Plan Type"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Code Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="codeId">
                              Referral Code
                            </label>
                            <SelectField
                              name="codeId"
                              id="codeId"
                              options={codeOptions}
                              handleInputChange={(value) => setCodeInput(value)}
                              onChange={(value) =>
                                setFieldValue('registeredByCodeId', value?.value)
                              }
                              value={values.registeredByCodeId as string}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="usedReferralsToPurchasePlan"
                            >
                              Already Used Referral Code?
                            </label>
                            <Input
                              type="select"
                              name="usedReferralsToPurchasePlan"
                              className="bg-white form-control-alternative"
                              id="usedReferralsToPurchasePlan"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.usedReferralsToPurchasePlan || ''}
                              placeholder="Used Referrals to Purchase Plan"
                            >
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Billing Information</h6>
                    <div className="pl-lg-4">
                      <Row>
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
                              placeholder="Enter name"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="billingType">
                              Billing Type
                            </label>
                            <Input
                              type="select"
                              name="billingType"
                              className="bg-white form-control-alternative"
                              id="billingType"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.billingType || ''}
                              placeholder="Billing Type"
                            >
                              <option value="Personal">Personal</option>
                              <option value="Business">Business</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="address1">
                              Address 1
                            </label>
                            <Input
                              type="text"
                              name="address1"
                              className="bg-white form-control-alternative"
                              id="address1"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.address1 || ''}
                              placeholder="Enter address 1"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label" htmlFor="address2">
                              Address 2
                            </label>
                            <Input
                              type="text"
                              name="address2"
                              className="bg-white form-control-alternative"
                              id="address2"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.address2 || ''}
                              placeholder="Enter address 2"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
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
                              placeholder="Enter city"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
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
                              placeholder="Enter state"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="country">
                              Country
                            </label>
                            <Input
                              type="text"
                              name="country"
                              className="bg-white form-control-alternative"
                              id="country"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.country || ''}
                              placeholder="Enter country"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="8">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="phone">
                              Phone
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              className="bg-white form-control-alternative"
                              id="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone || ''}
                              placeholder="Enter phone"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="zip">
                              ZIP
                            </label>
                            <Input
                              type="text"
                              name="zip"
                              className="bg-white form-control-alternative"
                              id="zip"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.zip || ''}
                              placeholder="Enter zip"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
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

export default connect(null, mapDispatchToProps)(AddOrEditUsersForm)

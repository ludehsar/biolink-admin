import React from 'react'
import { NextPage } from 'next'
import { Col, Card, Button, CardBody, Form } from 'reactstrap'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { withUrqlClient } from 'next-urql'

import AuthLayout from '../../layouts/Auth.layout'
import InputField from '../../components/InputField/InputField'
import {
  EmailInput,
  ErrorResponse,
  useSendForgotPasswordEmailMutation,
} from '../../generated/graphql'
import { toErrorMap } from '../../utils/toErrorMap'
import { useRouter } from 'next/router'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { ADD_INFO_REQUESTED } from '../../redux/actions/infoAction'

interface ForgotPasswordPageProps {
  addErrors: (errors: ErrorResponse[]) => void
  addInfo: (infoMessage: string) => void
}

const ForgotPasswordPage: NextPage<ForgotPasswordPageProps> = ({ addErrors, addInfo }) => {
  const [, sendForgotPasswordEmail] = useSendForgotPasswordEmailMutation()
  const router = useRouter()

  return (
    <AuthLayout>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <h3 className="text-center mb-4">Send forgot password code</h3>
            <Formik
              initialValues={{ email: '' } as EmailInput}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                const response = await sendForgotPasswordEmail({ options: values })

                if (response.data?.sendForgotPasswordEmail.errors) {
                  setErrors(toErrorMap(response.data.sendForgotPasswordEmail.errors))
                } else if (response.data?.sendForgotPasswordEmail.executed) {
                  addInfo('An email with a token has been sent to your email address')
                  router.push('/')
                } else {
                  addErrors([
                    {
                      errorCode: 10000,
                      message: 'Something went wrong!',
                    },
                  ])
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting, handleSubmit }) => (
                <Form role="form" method="post" onSubmit={handleSubmit}>
                  <InputField
                    name="email"
                    type="email"
                    label="Email Address"
                    className="mb-3"
                    placeholder="Enter your email address"
                  />
                  <div className="text-center">
                    <Button className="my-4" type="submit" color="primary">
                      {isSubmitting ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Signing in
                        </>
                      ) : (
                        <>Sign in</>
                      )}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Col>
    </AuthLayout>
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errors: ErrorResponse[]) => void
  addInfo: (infoMessage: string) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
  addInfo: (infoMessage: string) => dispatch({ type: ADD_INFO_REQUESTED, payload: infoMessage }),
})

export default withUrqlClient(createUrqlClient)(
  connect(null, mapDispatchToProps)(ForgotPasswordPage)
)

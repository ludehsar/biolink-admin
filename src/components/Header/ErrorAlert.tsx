import React from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import { Alert } from 'reactstrap'

import { ErrorResponse } from '../../generated/graphql'

interface ErrorAlertProps {
  errors: ErrorResponse[]
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ errors }) => (
  <>
    {errors.map((error, key) => (
      <Alert key={key} data-id={error.errorCode} color="danger">
        {'Error code ' + error.errorCode.toString() + ': ' + error.message}
      </Alert>
    ))}
  </>
)

const mapStateToProps = (state: RootStateOrAny): ErrorAlertProps => ({
  errors: state.errorReducer.errors,
})

export default connect(mapStateToProps)(ErrorAlert)

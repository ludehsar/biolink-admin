import React from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import { Alert } from 'reactstrap'
import { Dispatch } from 'redux'

import { REMOVE_ERROR_REQUESTED } from '../../redux/actions/errorAction'
import { REMOVE_INFO_REQUESTED } from '../../redux/actions/infoAction'
import { ErrorProps } from '../../redux/reducers/errorReducer'
import { InfoProps } from '../../redux/reducers/infoReducer'

interface InfoAlertProps {
  errors: ErrorProps[]
  infos: InfoProps[]
  removeError: (errorCode: number) => void
  removeInfo: (infoKey: number) => void
}

const InfoAlert: React.FC<InfoAlertProps> = ({ errors, infos, removeError, removeInfo }) => (
  <>
    {errors.map((error, key) => (
      <Alert key={key} color="danger" toggle={() => removeError(error.key)}>
        {error.message}
      </Alert>
    ))}
    {infos.map((info) => (
      <Alert key={info.key} color="info" toggle={() => removeInfo(info.key)}>
        {info.message}
      </Alert>
    ))}
  </>
)

const mapStateToProps = (
  state: RootStateOrAny
): {
  errors: ErrorProps[]
  infos: InfoProps[]
} => ({
  errors: state.errorReducer.errors,
  infos: state.infoReducer.infos,
})

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  removeError: (errorCode: number) => void
  removeInfo: (infoKey: number) => void
} => ({
  removeError: (errorCode: number) =>
    dispatch({ type: REMOVE_ERROR_REQUESTED, payload: errorCode }),
  removeInfo: (infoKey: number) => dispatch({ type: REMOVE_INFO_REQUESTED, payload: infoKey }),
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoAlert)

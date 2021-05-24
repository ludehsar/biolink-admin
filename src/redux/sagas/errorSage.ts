import { put, takeEvery } from 'redux-saga/effects'

import { ErrorResponse } from '../../generated/graphql'
import {
  ADD_ERRORS,
  ADD_ERRORS_REQUESTED,
  REMOVE_ERROR,
  REMOVE_ERROR_REQUESTED,
} from '../actions/errorAction'

type ErrorParams = {
  payload: ErrorResponse[] | number
  type: string
}

function* addErrors({ payload }: ErrorParams): Generator {
  yield put({ type: ADD_ERRORS, payload })
}

function* removeError({ payload }: ErrorParams): Generator {
  yield put({ type: REMOVE_ERROR, payload })
}

export default function* errorSaga(): Generator {
  yield takeEvery(ADD_ERRORS_REQUESTED, addErrors)
  yield takeEvery(REMOVE_ERROR_REQUESTED, removeError)
}

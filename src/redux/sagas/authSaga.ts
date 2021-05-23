import { put, call, takeLatest } from 'redux-saga/effects'
import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGIN_REQUESTED } from '../actions/authAction'

import { getCurrentAdminUser } from '../api/authApi'

function* getCurrentUser(): Generator {
  yield put({ type: AUTH_LOADING })

  const user = yield call(getCurrentAdminUser)

  yield put({ type: AUTH_LOGIN, payload: user })
}

export default function* authSaga(): Generator {
  yield takeLatest(AUTH_LOGIN_REQUESTED, getCurrentUser)
}

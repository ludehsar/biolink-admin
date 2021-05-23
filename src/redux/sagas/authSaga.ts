import { put, call, takeLatest } from 'redux-saga/effects'

import {
  AUTH_LOADING,
  AUTH_LOGIN,
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
} from '../actions/authAction'
import { loginCurrentAdminUser, logoutUser } from '../api/authApi'
import { User } from '../../generated/graphql'

type AuthParams = {
  payload: User
  type: string
}

function* loginCurrentUser({ payload }: AuthParams): Generator {
  yield put({ type: AUTH_LOADING })

  const user = yield call(loginCurrentAdminUser, payload)

  yield put({ type: AUTH_LOGIN, payload: user })
}

function* logoutCurrentUser(): Generator {
  yield put({ type: AUTH_LOADING })

  const user = yield call(logoutUser)

  yield put({ type: AUTH_LOGIN, payload: user })
}

export default function* authSaga(): Generator {
  yield takeLatest(AUTH_LOGIN_REQUESTED, loginCurrentUser)
  yield takeLatest(AUTH_LOGOUT_REQUESTED, logoutCurrentUser)
}

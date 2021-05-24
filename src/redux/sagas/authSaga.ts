import { put, takeEvery } from 'redux-saga/effects'

import {
  AUTH_LOADING,
  AUTH_LOADING_REQUESTED,
  AUTH_LOGIN,
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT,
  AUTH_LOGOUT_REQUESTED,
} from '../actions/authAction'
import { User } from '../../generated/graphql'

type AuthParams = {
  payload: User
  type: string
}

function* startAuthenticationProcess(): Generator {
  yield put({ type: AUTH_LOADING })
}

function* loginCurrentUser({ payload }: AuthParams): Generator {
  yield put({ type: AUTH_LOGIN, payload })
}

function* logoutCurrentUser(): Generator {
  yield put({ type: AUTH_LOGOUT })
}

export default function* authSaga(): Generator {
  yield takeEvery(AUTH_LOADING_REQUESTED, startAuthenticationProcess)
  yield takeEvery(AUTH_LOGIN_REQUESTED, loginCurrentUser)
  yield takeEvery(AUTH_LOGOUT_REQUESTED, logoutCurrentUser)
}

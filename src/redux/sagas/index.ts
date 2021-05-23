import { spawn } from 'redux-saga/effects'

import authSaga from './authSaga'

export default function* rootSaga(): Generator {
  yield spawn(authSaga)
}

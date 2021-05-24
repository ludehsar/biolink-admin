import { spawn } from 'redux-saga/effects'

import authSaga from './authSaga'
import errorSage from './errorSage'
import infoSaga from './infoSaga'

export default function* rootSaga(): Generator {
  yield spawn(authSaga)
  yield spawn(errorSage)
  yield spawn(infoSaga)
}

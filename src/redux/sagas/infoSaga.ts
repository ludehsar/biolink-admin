import { put, takeEvery } from 'redux-saga/effects'

import {
  ADD_INFO,
  ADD_INFO_REQUESTED,
  REMOVE_INFO,
  REMOVE_INFO_REQUESTED,
} from '../actions/infoAction'

type InfoParams = {
  payload: string | number
  type: string
}

function* addInfos({ payload }: InfoParams): Generator {
  yield put({ type: ADD_INFO, payload })
}

function* removeInfo({ payload }: InfoParams): Generator {
  yield put({ type: REMOVE_INFO, payload })
}

export default function* infoSaga(): Generator {
  yield takeEvery(ADD_INFO_REQUESTED, addInfos)
  yield takeEvery(REMOVE_INFO_REQUESTED, removeInfo)
}

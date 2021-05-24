import { combineReducers } from 'redux'

import authReducer from './authReducer'
import errorReducer from './errorReducer'
import infoReducer from './infoReducer'

export default combineReducers({
  authReducer,
  errorReducer,
  infoReducer,
})

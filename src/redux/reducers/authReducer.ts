import { User } from '../../generated/graphql'
import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT } from '../actions/authAction'

interface AuthAction {
  type: string
  payload: User | null
}

export interface AuthState {
  loading: boolean
  user: User | null
}

const initialState = {
  loading: false,
  user: null,
}

const authReducer = (state: AuthState = initialState, { type, payload }: AuthAction): AuthState => {
  switch (type) {
    // Set loading
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      }

    // Get user
    case AUTH_LOGIN:
      return {
        ...state,
        user: payload,
        loading: false,
      }

    // Remove user
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      }

    default:
      return state
  }
}

export default authReducer

import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT } from '../actions/authAction'

interface AuthAction {
  type: string
  payload: any
}

export interface AuthState {
  loading: boolean
  user: any
}

const initialState = {
  loading: false,
  user: null,
}

export default (state: AuthState = initialState, { type, payload }: AuthAction): AuthState => {
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

import { ADD_ERRORS, REMOVE_ERROR } from '../actions/errorAction'

export interface ErrorProps {
  key: number
  message: string
}

interface ErrorAction {
  type: string
  payload: string | number | null
}

export interface ErrorState {
  errors: ErrorProps[]
}

const initialState = {
  errors: [],
}

const errorReducer = (
  state: ErrorState = initialState,
  { type, payload }: ErrorAction
): ErrorState => {
  switch (type) {
    // Error loading
    case ADD_ERRORS:
      return {
        ...state,
        errors: [
          {
            key: new Date().getTime() * Math.random(),
            message: payload as string,
          },
          ...state.errors,
        ],
      }

    // Error loading
    case REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((error) => error.key !== (payload as number)),
      }

    // Return default state
    default:
      return state
  }
}

export default errorReducer

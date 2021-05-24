import { ErrorResponse } from '../../generated/graphql'
import { ADD_ERRORS, REMOVE_ERROR } from '../actions/errorAction'

interface ErrorAction {
  type: string
  payload: ErrorResponse[] | number | null
}

export interface ErrorState {
  errors: ErrorResponse[]
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
        errors: state.errors.concat(payload as ErrorResponse[]),
      }

    // Error loading
    case REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((error) => error.errorCode !== (payload as number)),
      }

    // Return default state
    default:
      return state
  }
}

export default errorReducer

import { ADD_INFO, REMOVE_INFO } from '../actions/infoAction'

export interface InfoProps {
  key: number
  message: string
}

interface InfoAction {
  type: string
  payload: string | number | null
}

export interface InfoState {
  infos: InfoProps[]
}

const initialState = {
  infos: [],
}

const infoReducer = (state: InfoState = initialState, { type, payload }: InfoAction): InfoState => {
  switch (type) {
    // Info loading
    case ADD_INFO:
      return {
        ...state,
        infos: [
          {
            key: new Date().getTime() * Math.random(),
            message: payload as string,
          },
          ...state.infos,
        ],
      }

    // Info loading
    case REMOVE_INFO:
      return {
        ...state,
        infos: state.infos.filter((info) => info.key !== (payload as number)),
      }

    // Return default state
    default:
      return state
  }
}

export default infoReducer

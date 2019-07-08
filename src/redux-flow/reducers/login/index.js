import { CHANGE_FIELD } from './actions'

const INITIAL_STATE = {
  login: '',
  senha: ''
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    }
    default: {
      return state
    }
  }
}

export default loginReducer

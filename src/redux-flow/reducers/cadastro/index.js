import { CHANGE_FIELD } from './actions'

const INITIAL_STATE = {
  nome: '',
  telefone: '',
  email: '',
  login: '',
  senha: ''
}

const cadastroReducer = (state = INITIAL_STATE, action) => {
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

export default cadastroReducer

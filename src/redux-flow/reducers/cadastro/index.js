import { CHANGE_FIELD, USER_REGISTERED, VALIDATE_ERRORS, CLEAR_FIELDS_FORM, CLOSE_SUCCESS_MESSAGE, RESET_TO_INITIAL_STATE, SIGNUP_ERROR, CLOSE_ERROR_MESSAGE } from './actions'

const INITIAL_STATE = {
  fields: {
    nome: '',
    telefone: '',
    email: '',
    login: '',
    senha: ''
  },
  validateErrors: {
    fields: {
      nome: false,
      email: false,
      login: false,
      senha: false
    }
  },
  signupSuccess: {
    show: false,
    message: ''
  },
  signupError: {
    show: false,
    errors: []
  }
}

const cadastroReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case USER_REGISTERED: {
      return {
        ...state,
        signupSuccess: {
          show: true,
          message: 'Usuário cadastrado com sucesso'
        },
        signupError: {
          show: false,
          errors: []
        }
      }
    }
    case VALIDATE_ERRORS: {
      return {
        ...state,
        validateErrors: { ...action.payload }
      }
    }
    case CLEAR_FIELDS_FORM: {
      return {
        ...state,
        fields: {
          ...INITIAL_STATE.fields
        }
      }
    }
    case RESET_TO_INITIAL_STATE: {
      return {
        ...INITIAL_STATE
      }
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        signupSuccess: {
          show: false,
          message: ''
        },
        signupError: {
          show: true,
          errors: action.payload
        }
      }
    }
    case CLOSE_SUCCESS_MESSAGE: {
      return {
        ...state,
        signupSuccess: {
          show: false,
          message: ''
        }
      }
    }
    case CLOSE_ERROR_MESSAGE: {
      return {
        ...state,
        signupError: {
          show: false,
          errors: []
        }
      }
    }
    default: {
      return state
    }
  }
}

export default cadastroReducer

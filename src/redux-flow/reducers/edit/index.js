import { SET_USER, CHANGE_FIELD, VALIDATE_ERRORS, USER_UPDATED, CLOSE_SUCCESS_MESSAGE, UPDATE_ERROR, CLOSE_ERROR_MESSAGE, TOGGLE_CHANGE_PASS, DISABLE_CHANGE_PASS } from './actions'

const INITIAL_STATE = {
  user: {
    _id: '',
    nome: '',
    telefone: '',
    email: '',
    login: '',
    senha: ''
  },
  changePassword: false,
  validateErrors: {
    fields: {
      nome: false,
      email: false,
      login: false,
      senha: false
    }
  },
  updateSuccess: {
    show: false,
    message: ''
  },
  updateError: {
    show: false,
    message: []
  }
}

const editReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    case CHANGE_FIELD: {
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case VALIDATE_ERRORS: {
      return {
        ...state,
        validateErrors: { ...action.payload }
      }
    }
    case USER_UPDATED: {
      return {
        ...state,
        updateSuccess: {
          show: true,
          message: 'Usuário atualizado com sucesso'
        },
        updateError: {
          show: false,
          message: ''
        }
      }
    }
    case UPDATE_ERROR: {
      return {
        ...state,
        updateSuccess: {
          show: false,
          message: ''
        },
        updateError: {
          show: true,
          message: action.payload
        }
      }
    }
    case CLOSE_SUCCESS_MESSAGE: {
      return {
        ...state,
        updateSuccess: {
          show: false,
          message: ''
        }
      }
    }
    case CLOSE_ERROR_MESSAGE: {
      return {
        ...state,
        updateError: {
          show: false,
          message: ''
        }
      }
    }
    case TOGGLE_CHANGE_PASS: {
      return {
        ...state,
        changePassword: !state.changePassword,
        user: {
          ...state.user,
          senha: ''
        }
      }
    }
    case DISABLE_CHANGE_PASS: {
      return {
        ...state,
        changePassword: false
      }
    }
    default: {
      return state
    }
  }
}

export default editReducer

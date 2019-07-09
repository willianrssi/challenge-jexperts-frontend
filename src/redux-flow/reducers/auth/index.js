import { TOKEN_VALIDADO, USER_FETCHED, ERROR_SUBMIT, CLEAR_ERROR_SUBMIT, CHANGE_FIELD } from './actions'
const userKey = '_jexperts_user'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false,
  errorLogin: '',
  fields: {
    login: '',
    senha: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN_VALIDADO:
      if (action.payload) {
        return {
          ...state,
          validToken: true
        }
      } else {
        localStorage.removeItem(userKey)
        return {
          ...state,
          validToken: false,
          user: null
        }
      }
    case USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload))
      return {
        ...state,
        user: action.payload,
        validToken: true
      }
    case ERROR_SUBMIT: {
      return {
        ...state,
        errorLogin: action.payload.errors
      }
    }
    case CLEAR_ERROR_SUBMIT: {
      return {
        ...state,
        errorLogin: ''
      }
    }
    case CHANGE_FIELD: {
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.field]: action.payload.value
        }
      }
    }
    default:
      return state
  }
}

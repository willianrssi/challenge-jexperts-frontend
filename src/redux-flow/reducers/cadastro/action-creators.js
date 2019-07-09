import { CHANGE_FIELD, USER_REGISTERED, SIGNUP_ERROR, VALIDATE_ERRORS, CLEAR_FIELDS_FORM, CLOSE_SUCCESS_MESSAGE, RESET_TO_INITIAL_STATE, CLOSE_ERROR_MESSAGE } from './actions'
import axios from 'axios'
import constants from '../../../utils/constants'

export const changeField = (field, value) => ({
  type: CHANGE_FIELD,
  payload: {
    field,
    value
  }
})

export const resetToInitialState = () => ({
  type: RESET_TO_INITIAL_STATE
})

export const clearFields = () => ({
  type: CLEAR_FIELDS_FORM
})

export const signup = (valores) => (dispatch) => {
  let validateErrors = {
    show: false,
    fields: {
      nome: false,
      email: false,
      login: false,
      senha: false
    }
  }

  // Valida campo nome
  if (valores.nome.replace(/ /g, '').length < 2) {
    validateErrors.show = true
    validateErrors.fields.nome = true
  }

  // Valida campo login
  if (valores.login.replace(/ /g, '').length < 2) {
    validateErrors.show = true
    validateErrors.fields.login = true
  }

  // Valida campo senha
  if (valores.senha.replace(/ /g, '').length < 2) {
    validateErrors.show = true
    validateErrors.fields.senha = true
  }

  // Valida campo email
  if (!valores.email.match(constants.emailRegex)) {
    validateErrors.show = true
    validateErrors.fields.email = true
  }

  if (!validateErrors.show) {
    dispatch({
      type: VALIDATE_ERRORS,
      payload: {
        fields: {
          nome: false,
          email: false,
          login: false,
          senha: false
        }
      }
    })
    dispatch(submitPost(valores, `${constants.OAPI_URL}/signup`))
  } else {
    dispatch({
      type: VALIDATE_ERRORS,
      payload: validateErrors
    })
  }
}

export const closeSuccessMgs = () => ({
  type: CLOSE_SUCCESS_MESSAGE
})

export const closeErrorMgs = () => ({
  type: CLOSE_ERROR_MESSAGE
})

const submitPost = (valores, url) => (dispatch) => {
  axios.post(url, valores)
    .then(resposta => {
      dispatch({
        type: USER_REGISTERED
      })
    })
    .then(() => {
      dispatch(clearFields())
    })
    .catch(e => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: e.response.data.errors
      }
      )
    })
}

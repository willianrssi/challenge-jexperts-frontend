import { SET_USER, CHANGE_FIELD, VALIDATE_ERRORS, USER_UPDATED, CLOSE_SUCCESS_MESSAGE, UPDATE_ERROR, CLOSE_ERROR_MESSAGE, TOGGLE_CHANGE_PASS, DISABLE_CHANGE_PASS } from './actions'
import axios from 'axios'
import constants from '../../../utils/constants'

export const setUserToEdit = (user) => ({
  type: SET_USER,
  payload: user
})

export const changeField = (field, value) => ({
  type: CHANGE_FIELD,
  payload: {
    field,
    value
  }
})

export const update = (id, valores, withPass) => (dispatch) => {
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

  if (withPass) {
    // Valida campo senha
    if (valores.senha.replace(/ /g, '').length < 2) {
      validateErrors.show = true
      validateErrors.fields.senha = true
    }
  }
  // Valida campo email
  if (!valores.email.match(constants.emailRegex)) {
    validateErrors.show = true
    validateErrors.fields.email = true
  }

  if (!validateErrors.show) {
    dispatch(clearValidateErrors())
    dispatch(submitPut(valores, `${constants.API_URL}/usuario/${id}`))
  } else {
    dispatch({
      type: VALIDATE_ERRORS,
      payload: validateErrors
    })
  }
}

export const resetMsgAndErrors = () => (dispatch) => {
  dispatch(closeSuccessMgs())
  dispatch(closeErrorMgs())
  dispatch(clearValidateErrors())
  dispatch({
    type: DISABLE_CHANGE_PASS
  })
}

export const toggleChangePassword = () => ({
  type: TOGGLE_CHANGE_PASS
})

export const closeSuccessMgs = () => ({
  type: CLOSE_SUCCESS_MESSAGE
})

export const closeErrorMgs = () => ({
  type: CLOSE_ERROR_MESSAGE
})

export const clearValidateErrors = () => ({
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

const submitPut = (valores, url) => (dispatch) => {
  axios.put(url, valores)
    .then((resposta) => {
      console.log(resposta)
      dispatch({
        type: USER_UPDATED
      })
    })
    .catch(e => {
      if (e.response.data.code === 11000) {
        dispatch({
          type: UPDATE_ERROR,
          payload: 'Usuário(login) já existente'
        }
        )
      }
    })
}

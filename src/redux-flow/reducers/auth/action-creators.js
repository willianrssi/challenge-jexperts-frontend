import axios from 'axios'
import constants from '../../../utils/constants'
import { TOKEN_VALIDADO, USER_FETCHED, ERROR_SUBMIT, CLEAR_ERROR_SUBMIT, CHANGE_FIELD } from './actions'

export const login = (valores) => (dispatch) => {
  axios.post(`${constants.OAPI_URL}/login`, valores)
    .then(resposta => {
      dispatch({
        type: USER_FETCHED,
        payload: resposta.data
      })
    })
    .then(() => {
      dispatch(clearErrorsForm('Login'))
      dispatch(changeField('login', ''))
      dispatch(changeField('senha', ''))
    })
    .catch(e => {
      dispatch({
        type: ERROR_SUBMIT,
        payload: {
          formError: `errorLogin`,
          errors: e.response.data.errors
        }
      })
    })
}

export const changeField = (field, value) => ({
  type: CHANGE_FIELD,
  payload: {
    field,
    value
  }
})

export const signup = (valores) => submit(valores, 'Signup', `${constants.OAPI_URL}/signup`)

const submit = (valores, form, url) => (dispatch) => {
  axios.post(url, valores)
    .then(resposta => {
      dispatch({
        type: USER_FETCHED,
        payload: resposta.data
      })
    })
    .then(() => {
      dispatch(clearErrorsForm(form))
    })
    .catch(e => {
      dispatch({
        type: ERROR_SUBMIT,
        payload: {
          formError: `error${form}`,
          errors: e.response.data.errors
        }
      })
    })
}

export const clearErrorsForm = (form) => (dispatch) => {
  console.log(form)
  dispatch({
    type: CLEAR_ERROR_SUBMIT,
    payload: `error${form}`
  })
}

export const logout = () => ({
  type: TOKEN_VALIDADO,
  payload: false
})

export const validaToken = (token) => (dispatch) => {
  if (token) {
    axios.post(`${constants.OAPI_URL}/validaToken`, { token })
      .then(resposta => {
        dispatch({
          type: TOKEN_VALIDADO,
          payload: resposta.data.valid
        })
      })
      .catch(() => {
        dispatch({
          type: TOKEN_VALIDADO,
          payload: false
        })
      })
  } else {
    dispatch({
      type: TOKEN_VALIDADO,
      payload: false
    })
  }
}

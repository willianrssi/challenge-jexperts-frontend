import axios from 'axios'
import constants from '../../../utils/constants'
import { TOKEN_VALIDADO, USER_FETCHED } from './actions'

export const login = (valores) => submit(valores, `${constants.OAPI_URL}/login`)

export const signup = (valores) => submit(valores, `${constants.OAPI_URL}/signup`)

const submit = (valores, url) => (dispatch) => {
  axios.post(url, valores)
    .then(resposta => [
      dispatch({
        type: USER_FETCHED,
        payload: resposta.data
      })
    ]).catch(e => {
      e.response.data.errors.forEach(
        error => console.log(error))
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

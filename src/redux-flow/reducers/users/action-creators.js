import axios from 'axios'
import constants from '../../../utils/constants'
import { USERS_FETCHED, ACTIONS_ERRORS, USER_TO_DELETE } from './actions'

export const fetchUsers = () => (dispatch) => {
  axios.get(`${constants.API_URL}/usuario`)
    .then(resposta => [
      dispatch({
        type: USERS_FETCHED,
        payload: resposta.data
      })
    ]).catch(e => {
      dispatch({
        type: ACTIONS_ERRORS,
        payload: e.response.data.errors
      })
    })
}

export const deleteUser = (user) => (dispatch) => {
  return new Promise((resolve, reject) =>
    axios.delete(`${constants.API_URL}/usuario/${user}`)
      .then(() => {
        dispatch(fetchUsers())
      })
      .then(() => {
        resolve()
      })
      .catch(e => {
        dispatch({
          type: ACTIONS_ERRORS,
          payload: e.response.data.errors
        })
      })
  )
}

export const selectUserToDelete = (userId) => (dispatch) => {
  dispatch({
    type: USER_TO_DELETE,
    payload: userId
  })
}

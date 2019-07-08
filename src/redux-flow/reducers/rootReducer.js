import { combineReducers } from 'redux'
import login from './login'
import cadastro from './cadastro'
import auth from './auth'
import users from './users'

export default combineReducers({
  auth,
  login,
  cadastro,
  users
})

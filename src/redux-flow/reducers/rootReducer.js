import { combineReducers } from 'redux'
import cadastro from './cadastro'
import auth from './auth'
import users from './users'
import edit from './edit'

export default combineReducers({
  auth,
  cadastro,
  users,
  edit
})

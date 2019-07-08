import { combineReducers } from 'redux'
import login from './login'
import cadastro from './cadastro'
import auth from './auth'
export default combineReducers({
  auth,
  login,
  cadastro
})

import React from 'react'
import { Link } from 'react-router-dom'
import Field from './Field'

const LoginForm = ({ login, senha, changeField, handleLogin }) => (
  <form onSubmit={(e) => handleLogin(e)} >
    <Field id='login-usuario' label='Login' type='text' placeholder='Login' value={login} changeField={changeField} changeFieldId='login' />
    <Field id='senha-usuario' label='Senha' type='password' placeholder='Senha' value={senha} changeField={changeField} changeFieldId='senha' />
    <div className='d-flex justify-content-end'>
      <Link to='/cadastro'>
        <input type='button' className='btn btn-link' value='Cadastre-se' />
      </Link>
      <button type='submit' className='ml-2 btn btn-primary'>Login</button>
    </div>
  </form>
)

export default LoginForm

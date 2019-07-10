import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({ login, senha, changeField, handleLogin }) => (
  <form onSubmit={(e) => handleLogin(e)} >
    <div className='form-group'>
      <label htmlFor='login-usuario'>
        Login
      </label>
      <input id='login-usuario' className='form-control' type='text' placeholder='Login' value={login} onChange={(e) => changeField('login', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='login-senha'>
        Senha
      </label>
      <input id='login-senha' className='form-control' type='password' placeholder='Senha' value={senha} onChange={(e) => changeField('senha', e.target.value)} />
    </div>
    <div className='d-flex justify-content-end'>
      <Link to='/cadastro'>
        <input type='button' className='btn btn-link' value='Cadastre-se' />
      </Link>
      <button type='submit' className='ml-2 btn btn-primary'>Login</button>
    </div>
  </form>
)

export default LoginForm

import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({ login, senha, changeField, handleLogin }) => (
  <form onSubmit={(e) => handleLogin(e)} >
    <div className='form-group'>
      <label htmlFor='login-usuario'>
        Login
      </label>
      <input tabIndex='1' id='login-usuario' className='form-control' type='text' placeholder='Login' value={login} onChange={(e) => changeField('login', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='login-senha'>
        Senha
      </label>
      <input tabIndex='2' id='login-senha' className='form-control' type='password' placeholder='Senha' value={senha} onChange={(e) => changeField('senha', e.target.value)} />
    </div>
    <div className='d-flex justify-content-end'>
      <Link tabIndex='-1' to='/cadastro'>
        <button tabIndex='-1' className='btn btn-link'>Cadastre-se</button>
      </Link>
      <button tabIndex='3' type='submit' className='ml-2 btn btn-primary'>Login</button>
    </div>
  </form>
)

export default LoginForm

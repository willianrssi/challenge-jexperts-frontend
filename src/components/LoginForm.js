import React from 'react'

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
    <button type='submit' className='btn btn-primary'>Login</button>
  </form>
)

export default LoginForm

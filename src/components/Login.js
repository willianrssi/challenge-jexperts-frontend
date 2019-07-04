import React from 'react'
import { connect } from 'react-redux'
// import styled from 'styled-components'

const Login = ({ login, senha }) => (
  <form>
    <div className='form-group'>
      <label htmlFor='login-usuario'>
        Login
      </label>
      <input id='login-usuario' className='form-control' type='text' placeholder='Login' value={login} />
    </div>
    <div className='form-group'>
      <label htmlFor='login-senha'>
        Senha
      </label>
      <input id='login-senha' className='form-control' type='password' placeholder='Senha' value={senha} />
    </div>
    <button type='submit' className='btn btn-primary'>Login</button>
  </form>
)

const mapStateToProps = (state) => ({
  ...state.login
})

export default connect(mapStateToProps)(Login)

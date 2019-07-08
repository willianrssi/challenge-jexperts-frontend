import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux-flow/reducers/auth/action-creators'

import logo from '../assets/logo-navbar.png'

const Header = ({ logout, usuario }) => (
  <header>
    <nav className='navbar navbar-dark bg-dark'>
      <a className='navbar-brand' target='_blank' rel='noopener noreferrer' href='https://www.jexperts.com.br/'>
        <img src={logo} width='120' height='30' className='d-inline-block align-top' alt='' />
      </a>
      <div>
        <span className='navbar-text'>
          {usuario.login}
        </span>
        <button className='btn btn-outline-info btn-sm ml-2' type='button' onClick={() => logout()} >Sair</button>
      </div>
    </nav>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

const mapStateToProps = (state) => ({
  usuario: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

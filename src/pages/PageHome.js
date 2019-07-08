import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux-flow/reducers/auth/action-creators'

class PageHome extends Component {
  render () {
    const { logout, usuario } = this.props
    return (
      <div>
        <h1>Home</h1>
        <h2>Usuario logado: {usuario.login} </h2>
        <button onClick={() => logout()} >Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

const mapStateToProps = (state) => ({
  usuario: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)

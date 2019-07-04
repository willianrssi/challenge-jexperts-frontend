import React from 'react'
import './pageLogin.css'
import Login from '../components/Login'
import logo from '../assets/logo-jexperts.jpg'

const PageLogin = () => (
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-6 col-sm-4 col-md-3 container-logo'>
        <img src={logo} alt='Logo da JExperts' />
      </div>
    </div>
    <div className='row justify-content-center'>
      <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
        <Login />
      </div>
    </div>
  </div>

)

export default PageLogin

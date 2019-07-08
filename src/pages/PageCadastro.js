import React from 'react'
import Cadastro from '../components/Cadastro'
import logo from '../assets/logo-jexperts.jpg'
import './pageCadastro.css'

const PageCadastro = () => (
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-4 col-sm-3 col-md-2  container-logo-cadastro'>
        <img src={logo} alt='Logo da JExperts' />
      </div>
    </div>
    <div className='row justify-content-center'>
      <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
        <Cadastro />
      </div>
    </div>
  </div>
)

export default PageCadastro

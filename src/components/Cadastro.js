import React from 'react'

const Cadastro = () => (
  <form>
    <div className='form-group'>
      <label htmlFor='cadastro-nome'>
        Nome*
      </label>
      <input id='cadastro-nome' className='form-control' type='text' placeholder='Nome' />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-telefone'>
        Telefone
      </label>
      <input id='cadastro-telefone' className='form-control' type='text' placeholder='Telefone' />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-email'>
        Email
      </label>
      <input id='cadastro-email' className='form-control' type='email' placeholder='Email' />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-login'>
        Login
      </label>
      <input id='cadastro-login' className='form-control' type='text' placeholder='Login' />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-senha'>
        Senha
      </label>
      <input id='cadastro-senha' className='form-control' type='password' placeholder='Senha' />
    </div>
    <button type='submit' className='btn btn-primary'>Cadastrar</button>
  </form>
)

export default Cadastro

// Nome (obrigatório)
// Telefone (opcional)
// Email (obrigatório e deve ser um email válido)
// Login (obrigatório)
// Senha (obrigatório)
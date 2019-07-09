import React from 'react'

const SignUpForm = ({ fields, changeField, validateErrors, submitForm }) => (
  <form onSubmit={(e) => submitForm(e)}>
    <div className='form-group'>
      <label htmlFor='cadastro-nome'>
        Nome*
      </label>
      <input id='cadastro-nome' className={`form-control ${validateErrors.nome ? 'is-invalid' : ''}`} type='text' placeholder='Nome' value={fields.nome} onChange={(e) => changeField('nome', e.target.value)} />
      {validateErrors.nome ? <small id='passwordHelp' className='text-danger'>
        Campo obrigatório
      </small> : <small />}
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-telefone'>
        Telefone
      </label>
      <input id='cadastro-telefone' className='form-control' type='text' placeholder='Telefone' value={fields.telefone} onChange={(e) => changeField('telefone', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-email'>
        Email*
      </label>
      <input id='cadastro-email' className={`form-control ${validateErrors.email ? 'is-invalid' : ''}`} type='email' placeholder='Email' value={fields.email} onChange={(e) => changeField('email', e.target.value)} />
      {validateErrors.email ? <small id='passwordHelp' className='text-danger'>
        Insira um email válido
      </small> : <small />}
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-login'>
        Login*
      </label>
      <input id='cadastro-login' className={`form-control ${validateErrors.login ? 'is-invalid' : ''}`} type='text' placeholder='Login' value={fields.login} onChange={(e) => changeField('login', e.target.value)} />
      {validateErrors.login ? <small id='passwordHelp' className='text-danger'>
        Campo obrigatório
      </small> : <small />}
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-senha'>
        Senha*
      </label>
      <input id='cadastro-senha' className={`form-control ${validateErrors.senha ? 'is-invalid' : ''}`} type='password' placeholder='Senha' value={fields.senha} onChange={(e) => changeField('senha', e.target.value)} />
      {validateErrors.senha ? <small id='passwordHelp' className='text-danger'>
        Campo obrigatório
      </small> : <small />}
      <small className='form-text text-muted'>(*) Campos Obrigatórios</small>
    </div>
    <button type='submit' className='btn btn-primary'>Cadastrar</button>
  </form>
)

export default SignUpForm

import React from 'react'
import { Link } from 'react-router-dom'

const UsersTable = ({ users, handleShowModal }) => (
  <table className='table table-striped border '>
    <thead>
      <tr>
        <th scope='col' >Nome</th>
        <th scope='col' >Telefone</th>
        <th scope='col' >Email</th>
        <th scope='col' >Login</th>
        <th scope='col' >Ações</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user._id} >
          <td >{user.nome}</td>
          <td >{user.telefone}</td>
          <td >{user.email}</td>
          <td >{user.login}</td>
          <td className='d-flex' >
            <Link to='/cadastro'>
              <button className='btn btn-success mr-2'>
                <i className='fa fa-edit' />
              </button>
            </Link>
            <button onClick={() => handleShowModal(user._id)} className='btn btn-danger'>
              <i className='fa fa-trash' />
            </button>
          </td>
        </tr>
      ))
      }
    </tbody>
    <tfoot>
      <tr>
        <td colSpan='5' >
          <div className='d-flex justify-content-end'>
            <Link to='/cadastro'>
              <button className='btn btn-primary'>
                Novo
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
)

export default UsersTable

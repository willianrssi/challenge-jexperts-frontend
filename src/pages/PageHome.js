import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, selectUserToDelete, deleteUser } from '../redux-flow/reducers/users/action-creators'

import Modal from '../components/Modal'
import UsersTable from '../components/UsersTable'
import Alert from '../components/Alert'

class PageHome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalDeleteUser: false,
      deletedUserMsg: false
    }
    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
    this.handleCloseAlert = this.handleCloseAlert.bind(this)
  }

  async handleShowModal (selectedUserId) {
    await this.setState({ modalDeleteUser: true })
    this.props.selectUserToDelete(selectedUserId)
  }

  async handleCloseModal () {
    await this.setState({ modalDeleteUser: false })
    this.props.selectUserToDelete('')
  }

  async handleCloseAlert () {
    await this.setState({ deletedUserMsg: false })
  }

  async handleDeleteUser () {
    await this.props.deleteUser(this.props.users.userToDelete)
    this.handleCloseModal()
    await this.setState({ deletedUserMsg: true })
  }

  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    const { users } = this.props
    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col mt-5 justify-content-center'>
              <Alert
                title='Usuário excluído'
                show={this.state.deletedUserMsg}
                handleDismiss={this.handleCloseAlert}
                variant='success'>
                O usuário foi excluído com sucesso
              </Alert>
            </div>
          </div>
          <h1 className='mb-5'>Lista de usuários cadastrados:</h1>
          <div className='row'>
            <div className='col justify-content-center'>
              <UsersTable
                users={users.list}
                handleShowModal={this.handleShowModal}
              />
            </div>
          </div>
        </div>
        <Modal
          title='Excluir Usuário'
          text='Tem certeza que deseja exluir o usuário?'
          show={this.state.modalDeleteUser}
          handleClose={this.handleCloseModal}
          handleConfirm={this.handleDeleteUser}
        />
      </Fragment>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  selectUserToDelete: (selectedUserId) => dispatch(selectUserToDelete(selectedUserId)),
  deleteUser: (userId) => dispatch(deleteUser(userId))
})

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)

import { USERS_FETCHED, ACTIONS_ERRORS, USER_TO_DELETE } from './actions'

const INITIAL_STATE = {
  list: [],
  userToDelete: '',
  userToEdit: '',
  errors: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return {
        ...state,
        list: action.payload
      }
    case ACTIONS_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case USER_TO_DELETE:
      return {
        ...state,
        userToDelete: action.payload
      }
    default:
      return state
  }
}

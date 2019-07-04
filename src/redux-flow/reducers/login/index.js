
const INITIAL_STATE = {
  login: '',
  senha: 'teste'
}

const loginReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case 'login: CHANGE_FIELD': {
      return {
        ...state,
        login: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default loginReducer

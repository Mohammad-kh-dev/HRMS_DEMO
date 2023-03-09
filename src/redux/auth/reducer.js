const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: '',
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          errorMessage: '',
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          errorMessage: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
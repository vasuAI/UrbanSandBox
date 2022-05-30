interface actionType {
  type: string;
  payload: any;
}
const initialState = {
    credentials:{
        email:'',
        pass:'',
    }
};
const authReducer = (state = initialState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_CREDS':
      return {...state, credentials: payload};
    default:
      return state;
  }
};
export default authReducer;

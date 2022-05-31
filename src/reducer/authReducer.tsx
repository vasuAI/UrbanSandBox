import ActionType from '../actions/ActionType';

interface actionType {
  type: string;
  payload: any;
}
const initialState = {
  email: '',
  password: '',
};
const authReducer = (state = initialState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case ActionType.LOGIN_EMAIL:
      return {...state, email: payload};
    case ActionType.LOGIN_PASSWORD:
      return {...state, password: payload};
    default:
      return state;
  }
};
export default authReducer;

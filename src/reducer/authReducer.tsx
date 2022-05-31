import ActionType from '../actions/ActionType';

/**
 * @description defining required props
 */
interface actionType {
  type: string;
  payload: any;
}

/**
 * @description defining initial state
 */
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

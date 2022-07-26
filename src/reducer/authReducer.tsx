import {InitialState} from '@react-navigation/native';
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
  userDetails: {
    _id: '',
    dob: '',
    name: '',
    plan: '',
    token: '',
    email: '',
    gender: '',
    address: '',
    signType: 0,
    mPin: false,
    timezone: '',
    location: {},
    userType: 0,
    imageUrl: '',
    createdAt: '',
    languages: null,
    childData: null,
    parentDetails: {},
    planActive: false,
    profileSteps: null,
    emailVerify: false,
    totalAddedBooks: 0,
    isSubscribed: false,
    subscriptionType: '',
    subscriptionEndDate: '',
    subscriptionPlatForm: '',
    allowNotification: false,
  },
  isConnected: true,
};

const authReducer = (state = initialState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case ActionType.SIGNUP_DETAILS:
      return {...state, ...payload};
    default:
      return state;
  }
};
// export const internetStatusReducer = (state = initialState, action: any) => {
//   const {payload} = action;
//   switch (action.type) {
//     case ActionType.UPDATE_INTERNET_FIELDS:
//       return {...state, ...payload};
//     default:
//       return state;
//   }
// };
export default authReducer;

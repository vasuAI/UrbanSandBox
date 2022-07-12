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
    mPin: false,
    token: '',
    email: '',
    gender: '',
    languages: null,
    childData: null,
    address: '',
    signType: 0,
    timezone: '',
    location: {},
    userType: 0,
    imageUrl: '',
    profileSteps: null,
    createdAt: '',
    planActive: false,
    emailVerify: false,
    isSubscribed: false,
    parentDetails: {},
    totalAddedBooks: 0,
    subscriptionType: '',
    subscriptionEndDate: '',
    subscriptionPlatForm: '',
    allowNotification: false,
  },
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
export default authReducer;

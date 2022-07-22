import ActionType from '../actions/ActionType';

const initialState = {
  name: '',
  DOB: '',
  location: '',
  profileImg: '',
  schoolName: '',
  langSpoken: [],
  interested: [],
  langInterested: [],
};
interface actionType {
  type: string;
  payload: any;
}
const childReducer = (state = initialState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case ActionType.CHILD_NAME:
      return {...state, ...payload};
    case ActionType.CHILD_DOB:
      return {...state, ...payload};
    case ActionType.CHILD_LOCATION:
      return {...state, ...payload};
    case ActionType.CHILD_SCHOOLNAME:
      return {...state, ...payload};
    case ActionType.GENDER:
      return {...state, ...payload};
    case ActionType.CHILD_PROFILE_IMAGE:
      return {...state, ...payload};
    case ActionType.LANGUAGE_INTERSTED:
      return {...state, ...payload};
    case ActionType.LANGUAGE_SPOKEN:
      return {...state, ...payload};
    default:
      return state;
  }
};
export default childReducer;

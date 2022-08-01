import ActionType from '../actions/ActionType';

const initialState = {
  name: '',
  DOB: '',
  location: '',
  profileImg: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  schoolName: '',
  langSpoken: [],
  interested: [],
  langInterested: [],
  childId: '',
  Mpin: '',
  success: '',
  gender: 1,
  childListData: [],
  status: 0,
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
    case ActionType.ADD_CHILD:
      return {...state, ...payload};
    case ActionType.ADD_MPIN:
      return {...state, ...payload};
    case ActionType.CHILD_LIST_DATA:
      return {...state, ...payload};
    case ActionType.SUCCESS:
      return {...state, ...payload};
    case ActionType.SET_UPDATE_DATA:
      return {...state, ...payload};
    case ActionType.EMPTY_CHILD_DATA:
      return {...state, ...payload};
    default:
      return state;
  }
};
export default childReducer;

import {ActionType} from './';
import {showToast} from '../utils/CommonFunction';
import {WebService, EndPoint, Common} from '../utils/';

const languageApiHit = (params: any, success: Function, fail: Function) => {
  return (dispatch: Function, getState: Function) => {
    WebService.getApiCall(
      EndPoint.GET_LANGUAGES_PARENT,
      (response: any) => {
        console.log('res', response);
        if (response) {
          const {message, statusCode, result} = response;
          showToast(message);
          if (statusCode == Common.STATUS_CODE.success) {
            success(result);
            return;
          }
          success(result);
          return;
        }
        success();
        return;
      },
      (error: any) => {
        fail(error);
      },
    );
  };
};
const interestApiHit = (params: any, success: Function, fail: Function) => {
  return (dispatch: Function, getState: Function) => {
    WebService.getApiCall(
      EndPoint.GET_INTEREST_PARENT,
      (response: any) => {
        console.log('res', response);
        if (response) {
          const {message, statusCode, result} = response;
          showToast(message);
          if (statusCode == Common.STATUS_CODE.success) {
            dispatch({});
            success(result);
            return;
          }
          success(result);
          return;
        }
        success();
        return;
      },
      (error: any) => {
        fail(error);
      },
    );
  };
};

const hitAddChildApi = (params: any, success: Function, failure: Function) => {
  return (dispatch: any) => {
    console.log('params', params);
    WebService.postApiCall(
      EndPoint.ADD_CHILD_PARENT,
      params,
      (response: any) => {
        console.log(
          '🚀 ~ file: ChildAction.tsx ~ line 68 ~ return ~ response',
          response,
        );
        if (response) {
          const {
            statusCode,
            message,
            result: {childId},
          } = response;
          showToast(message);
          if (statusCode == Common.STATUS_CODE.success) {
            if (childId) {
              dispatch({
                type: ActionType.LANGUAGE_INTERSTED,
                payload: {childId: childId},
              });
            }
            success(message);
          }
        }
      },
      (error: any) => {
        console.log(
          '🚀 ~ file: ChildAction.tsx ~ line 88 ~ return ~ error',
          error,
        );
        failure(error.response);
      },
    );
  };
};
const deleteChildApi = (
  params: string,
  success: Function,
  failure: Function,
) => {
  return (dispatch: any) => {
    console.log('params', params);
    WebService.deleteApiCall(
      EndPoint.DELETE_CHILD_PARENT,
      params,
      (response: any) => {
        if (response) {
          const {
            statusCode,
            data: {message},
          } = response;
          showToast(message);
          success(message);
          if (statusCode == Common.STATUS_CODE.success) {
          }
        }
      },
      (error: any) => {
        const {
          data: {message},
        } = error;
        console.log(
          '🚀 ~ file: ChildAction.tsx ~ line 88 ~ return ~ error',
          error,
        );
        showToast(message);
        failure(error.response);
      },
    );
  };
};
const setEditChild = (childObj: any) => {
  const {
    name,
    dob,
    address,
    imageUrl,
    school,
    languageSpoken,
    interests,
    languageInterested,
    _id,
    Mpin,
    gender,
  } = childObj;

  return {
    type: ActionType.SET_UPDATE_DATA,
    payload: {
      DOB: dob,
      Mpin: [],
      name: name,
      childId: _id,
      stepNumber: 0,
      gender: gender,
      location: address,
      schoolName: school,
      profileImg: imageUrl,
      interested: interests,
      langSpoken: languageSpoken,
      langInterested: languageInterested,
    },
  };
};

const emptyChildData = () => {
  return {
    type: ActionType.EMPTY_CHILD_DATA,
    payload: {
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
    },
  };
};
export default {
  languageApiHit,
  interestApiHit,
  hitAddChildApi,
  deleteChildApi,
  setEditChild,
  emptyChildData,
};

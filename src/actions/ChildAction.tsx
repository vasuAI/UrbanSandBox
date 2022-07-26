import {useDispatch} from 'react-redux';
import Common from '../utils/Common';
import {showToast} from '../utils/CommonFunction';
import EndPoint from '../utils/EndPoint';
import WebService from '../utils/WebService';
import ActionType from './ActionType';

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
        failure(error);
      },
    );
  };
};

export default {languageApiHit, interestApiHit, hitAddChildApi};

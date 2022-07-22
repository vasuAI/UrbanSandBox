import Common from '../utils/Common';
import {showToast} from '../utils/CommonFunction';
import EndPoint from '../utils/EndPoint';
import WebService from '../utils/WebService';
import ActionType from './ActionType';

const languageApiHit = (params: any, success: Function, fail: Function) => {
  return (dispatch: Function, getState: Function) => {
    WebService.getApiCall(
      EndPoint.GET_LANGUAGES_PARENT,
      params,
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
export default {languageApiHit};

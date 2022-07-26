import Common from './Common';
import {showToast} from './CommonFunction';
import String from './String';

const handleApiError = (payload: any) => {
  const {statusCode, message} = payload;
  switch (statusCode) {
    case 404:
      return showToast(String.errorCode404);
    case 400:
      return showToast(message);
    case 401:
      return showToast(String.errorCode401);
    case 422:
      return showToast(String.errorCode422);
    case 408:
      return showToast(String.errorCode408);
    case 410:
      return showToast(String.errorCode410);
    case 'ERR_NETWORK':
      return showToast(String.networkErrorCode);
  }
};
const postApiCall = (
  endPoint: string,
  params: any,
  successCallback: Function,
  errorCallback: Function,
) => {
  Common.axiosInstance
    .post(endPoint, params)
    .then((response: any) => {
      console.log(
        '🚀 ~ file: WebService.tsx ~ line 33 ~ .then ~ response',
        response,
      );
      const {data} = response;
      successCallback(data);
    })
    .catch((error: any) => {
      handleApiError(error);
      errorCallback(error);
    });
};

const getApiCall = (
  endPoint: string,
  successCallback: Function,
  errorCallback: Function,
) => {
  Common.axiosInstance
    .get(endPoint)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      handleApiError(error);
      errorCallback(error);
    });
};
export default {
  getApiCall,
  postApiCall,
};

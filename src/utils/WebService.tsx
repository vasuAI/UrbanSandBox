import axios from 'axios';
import Common from './Common';
import {showToast} from './CommonFunction';

const handleApiError = (payload: any) => {
  const {data, status} = payload;
  if (status === 403) {
    console.log('User blocked');
  } else if (status === 401) {
    console.log('Unauthorized access');
  } else {
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
      const {data} = response;
      successCallback(data);
    })
    .catch((error: any) => {
      handleApiError(error);
      errorCallback(error);
    });
};

const getApiCall = () => {
  axios
    .get('http')
    .then((res: any) => {
      const {data, status} = res;
      if (status === 200) {
        console.log('successCall');
      }
    })
    .catch(err => {
      console.log(err);
      handleApiError(err);
    });
};
export default {
  getApiCall,
  postApiCall,
};

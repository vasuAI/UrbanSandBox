import axios from 'axios';

const handleApiError = (payload: any) => {
  const {data, status} = payload;
  if (status === 403) {
    console.log('User blocked');
  } else if (status === 401) {
    console.log('Unauthorized access');
  } else {
  }
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
};

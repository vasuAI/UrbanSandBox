import axios from 'axios';

const BASE_URL = 'http://elearningapi.appskeeper.com/api/';

const $http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const setAuthorizationToken = (token: string) => {
  if (token) {
    $http.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete $http.defaults.headers.common.devicedetails;
  }
};

const STATUS_CODE = {
  success: 200,
  invalid: 422,
  timeout: 408,
  notFound: 404,
  badRequest: 400,
  userBlocked: 403,
  userNotFound: 410,
  successAction: 201,
  accountSuspend: 401,
};

export default {
  BASE_URL,
  STATUS_CODE,
  axiosInstance: $http,
  setAuthorizationToken,
};

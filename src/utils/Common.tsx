import axios from 'axios';

const BASE_URL = 'http://elearningapi.appskeeper.com/api/';

const $http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const STATUS_CODE = {
  success: 200,
  successAction: 201,
  notFound: 404,
  badRequest: 400,
  accountSuspend: 401,
  invalid: 422,
  timeout: 408,
  userNotFound: 410,
  userBlocked: 403,
};

export default {
  BASE_URL,
  STATUS_CODE,
  axiosInstance: $http,
};

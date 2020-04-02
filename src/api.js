import axios from 'axios';
import {
  ApiConfiguration,
  ResponseStatus
} from './constants/api';

export const createAPI = (onLoginFail) => {
  const api = axios.create(ApiConfiguration);

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === ResponseStatus.UNAUTHORIZED) {
      onLoginFail();
      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

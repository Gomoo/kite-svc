import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// import { LocalStorageUtil } from './localstorage';
import { API_BASE_URL } from "../constants/config";

export const APIClient = async (
  url: string,
  { data, method = "GET", headers: _headers = {}, ...customConfig }: AxiosRequestConfig = {},
) => {
  // const token = await LocalStorageUtil.loadToken();

  let headers = {} as {
    "content-type": string;
    Authorization: string;
    Pin?: any;
  };

  // headers.Authorization = `Bearer ${token}`;
  headers.Pin = _headers?.Pin;

  // @ts-ignore
  headers["Content-Type"] = _headers?.["Content-Type"] || "application/json";

  const config = {
    headers,
    method,
    data,
    url: `${API_BASE_URL}/${url}`,
    ...customConfig,
  } as AxiosRequestConfig;

  try {
    const result = await Axios(config);
    return result.data;
  } catch (error) {
    throw error;
  }
};

Axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response && (error.response.status === 401 || error.response.status === 410)) {
      // console.log('Log this nigga tf out');
    }
    return Promise.reject(error.response);
  },
);

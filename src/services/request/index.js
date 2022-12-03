import axios from 'axios';

import { BASE_URL, TIMEOUT } from '../config';

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 请求拦截器
    this.instance.interceptors.request.use((config) => {
      return config;
    });

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return Promise.reject(err);
      },
    );
  }
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ ...config, method: 'get' });
  }
  post(config) {
    return this.request({ ...config, method: 'post' });
  }
}

export default new HYRequest(BASE_URL, TIMEOUT);

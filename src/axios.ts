/**
 * File: axios.ts
 * -----
 * Created Date: Monday September 12th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Fri Nov 18 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseURL = 'http://proteinium.iroidtechnologies.in'; 

let instance = axios.create({
  baseURL: baseURL
});

instance.interceptors.request.use((request: AxiosRequestConfig) => request);

instance.interceptors.response.use((response: AxiosResponse) => response);

export const loginURL = '/api/v1/login';

export default instance;

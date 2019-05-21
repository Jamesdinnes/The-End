import axios, { AxiosRequestConfig } from 'axios'
import { CONFIG } from '../config'

axios.create({
  baseURL: CONFIG.endpoint
});

export const request = async (options: AxiosRequestConfig) => {
  try {
    return await axios.request(options);
  } catch (e) {
    return e
  }
}
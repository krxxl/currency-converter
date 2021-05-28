import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  method: 'GET',
  responseType: 'json',
  // withCredentials: true,
  headers: {
    'x-rapidapi-key': 'f9a5aa0335msh3f0782209638709p1a6090jsn359e0ab0c0f3',
    'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com'
  }
});

api.interceptors.request.use((request) => {
  return request;
});

api.interceptors.response.use(undefined, async (error) => {
  return Promise.reject(error);
});

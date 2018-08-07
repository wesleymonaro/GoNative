import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.268.0.4:3000',
});

export default api;

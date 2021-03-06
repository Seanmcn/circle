import axios from 'axios';

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: 'https://api.portally.devel',
});

export default api;

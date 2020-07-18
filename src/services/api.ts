import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nlw01-server.herokuapp.com/'
});

export default api;
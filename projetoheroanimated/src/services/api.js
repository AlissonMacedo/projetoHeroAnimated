import axios from 'axios';

const api = axios.create({
  baseURL: 'https://superheroapi.com/api/1467143070109568/',
});

export default api;

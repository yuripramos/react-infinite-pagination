import axios from 'axios';

const api = axios.create({ baseURL: 'http://sf-legacy-api.now.sh' });


export const getPosts = (page = 1) => api.get(`/items?page=${page}`);

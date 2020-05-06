import axios from 'axios';

const api = axios.create({ baseURL: 'http://sf-legacy-api.now.sh' });


export const getPosts = () => api.get('/items?page=1');

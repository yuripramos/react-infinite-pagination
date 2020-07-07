import axios from "axios";

const api = axios.create({
  baseURL: "https://app.peelinsights.com/api/"
});

export const getPosts = (page = 10) => api.get(`test_stats/?cursor=${page}`);

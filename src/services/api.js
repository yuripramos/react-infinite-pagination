import axios from "axios";
import { getThrottledAxiosInstance } from "../requests/throttledAxiosIstance";

const throttledAxiosInstance = getThrottledAxiosInstance();

export const getPosts = (page = 10) =>
  throttledAxiosInstance.get(`test_stats/?cursor=${page}`);

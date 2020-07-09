import { getThrottledAxiosInstance } from "../requests/throttledAxiosIstance";

const throttledAxiosInstance = getThrottledAxiosInstance();

export const getEntries = (page = 10) =>
  throttledAxiosInstance.get(`test_stats/?cursor=${page}`);

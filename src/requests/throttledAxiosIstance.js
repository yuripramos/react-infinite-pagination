import axios from "axios";

//20 requests per minute
const MILLISECONDS_BETWEEN_REQUESTS = 3000;

const injectSchedulerInterceptor = (axiosInstance, interval) => {
  let lastInvocationTime = undefined;

  const scheduler = config => {
    const now = Date.now();
    if (!!lastInvocationTime) {
      lastInvocationTime += interval;
      const waitPeriodForThisRequest = lastInvocationTime - now;
      if (waitPeriodForThisRequest > 0) {
        return new Promise(resolve => {
          setTimeout(() => resolve(config), waitPeriodForThisRequest);
        });
      }
    }

    lastInvocationTime = now;
    return config;
  };

  axiosInstance.interceptors.request.use(scheduler);
};

export const getThrottledAxiosInstance = (
  millisecondsCooldown = MILLISECONDS_BETWEEN_REQUESTS
) => {
  const axiosInstance = axios.create({
    baseURL: "https://app.peelinsights.com/api/"
  });

  injectSchedulerInterceptor(axiosInstance, millisecondsCooldown);
  return axiosInstance;
};

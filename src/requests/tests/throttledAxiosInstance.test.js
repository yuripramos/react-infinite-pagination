import { getThrottledAxiosInstance } from "../throttledAxiosIstance";

describe("throttledAxiosInstance", () => {
  it("creates an axios instance", () => {
    const throttledAxios = getThrottledAxiosInstance();
    expect(throttledAxios).toBeInstanceOf(Function);
  });
});

import React from "react";
import { render, cleanup } from "@testing-library/react";

import { RevenueProvider } from "./index";

describe("Revenue store", () => {
  afterEach(cleanup);

  const children = () => <div>{"children"}</div>;
  it("render Revenue Provider correctly", () => {
    expect(() => {
      render(<RevenueProvider children={children} />);
    }).not.toThrow();
  });
});

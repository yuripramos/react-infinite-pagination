import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";
import Entry from "./index";

describe("<Entry />", () => {
  afterEach(cleanup);
  const requiredProps = {
    data: {
      ds: "06-06-2020",
      y: 12441.0
    },
    page: 2
  };

  it("Should render correctly", () => {
    expect(() => {
      render(<Entry {...requiredProps} />);
    }).not.toThrow();
  });
});

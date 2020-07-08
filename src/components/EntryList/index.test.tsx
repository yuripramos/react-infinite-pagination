import React from "react";

import { render, cleanup } from "@testing-library/react";
import EntryList from "./index";

describe("<EntryList />", () => {
  afterEach(cleanup);

  const requiredProps = {
    data: {
      ds: "06-06-2020",
      y: 12441.0
    },
    page: 2
  };

  it("render component without crashing", () => {
    expect(() => {
      render(<EntryList {...requiredProps} />);
    }).not.toThrow();
  });
});

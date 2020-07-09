import React, { useContext } from "react";

import { render, cleanup } from "@testing-library/react";
import { RevenueProvider } from "../../store/Revenue/index";
import Main from "./index";

describe("<Main />", () => {
  afterEach(cleanup);

  it("Should render correctly", () => {
    expect(() => {
      render(<RevenueProvider children={<Main />} />);
    }).not.toThrow();
  });
});

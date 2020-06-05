import React from 'react';

import { render, cleanup } from "@testing-library/react";
import PostList from './index';

describe("<PostList />", () => {

  afterEach(cleanup);
  const requiredProps = {
    data:
    {
      id: "77ahasj373bd777778n",
      absoluteIndex: 2,
      name: "I have no name"
    },
    disabledItems: [12, 44, 89]
  }

  it("render component withour crashing", () => {
    expect(() => {
      render(
        <PostList {...requiredProps} />
      );
    }).not.toThrow();
  });
});

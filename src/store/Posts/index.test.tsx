import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { PostsProvider } from "./index";


describe("Posts store", () => {
  afterEach(cleanup);

  const children = () => <div>{'children'}</div>;
  it("render Posts Provider correctly", () => {
    expect(() => {
      render(<PostsProvider children={children} />);
    }).not.toThrow();
  });
});

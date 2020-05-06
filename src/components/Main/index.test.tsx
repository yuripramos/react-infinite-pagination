import React, { useContext } from 'react';

import { render, cleanup } from "@testing-library/react";
import { PostsProvider } from '../../store/Posts/index';
import Main from './index';


afterEach(cleanup);

describe("<Main />", () => {



  it("Should render correctly", () => {
    expect(() => {
      render(
        <PostsProvider children={<Main />} />
      );
    }).not.toThrow();
  });
});

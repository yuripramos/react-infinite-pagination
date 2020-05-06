import React, { useContext } from 'react';

import { render, cleanup } from "@testing-library/react";
import { PostsProvider } from '../../store/Posts/index';
import Main from './index';



describe("<Main />", () => {

  afterEach(cleanup);


  it("Should render correctly", () => {
    expect(() => {
      render(
        <PostsProvider children={<Main />} />
      );
    }).not.toThrow();
  });
});

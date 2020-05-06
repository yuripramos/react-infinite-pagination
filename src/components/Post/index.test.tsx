import React from 'react';

import { render, cleanup, fireEvent } from "@testing-library/react";
import Post from './index';



describe("<Post />", () => {

  afterEach(cleanup);
  const requiredProps = {
    data:
    {
      id: "asada212gfs",
      absoluteIndex: 2,
      name: "I have no name"
    },
    page: 2,
    handleClick: () => { },
    disabled: false,
    clickedItems: [12, 44, 89]
  }

  it("Should render correctly", () => {
    expect(() => {
      render(
        <Post {...requiredProps} />
      );
    }).not.toThrow();
  });

  it("should invoke function after onClick", () => {

    const propsWithMock = {
      ...requiredProps,
      handleClick: jest.fn()
    }
    const { getByText } = render(<Post  {...propsWithMock} />);

    fireEvent.click(getByText(/index/i));

    expect(propsWithMock.handleClick).toHaveBeenCalledTimes(1);
  });
});

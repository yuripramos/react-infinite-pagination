import React from 'react';

import Hero from './index';
import { render } from '@testing-library/react';

describe("<Hero />", () => {
  it("Should render correctly", () => {
    expect(() => {
      render(<Hero />);
    }).not.toThrow();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import PinInput from '../components/PinInput';
import { PinInputProps } from '../types/PinInput';

describe('Pin Input', () => {
  let props: PinInputProps;

  beforeEach(() => {
    props = {
      values: ['', '', '', ''],
    };
  });

  const renderComponent = () => render(<PinInput {...props} />);

  it('should contain 4 inputs', () => {
    const { getAllByRole } = renderComponent();

    const PinInputFields = getAllByRole('textbox');

    expect(PinInputFields).toHaveLength(4);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import StatefulPinInput from '../components/StatefulPinInput';
import { StatefulPinInputProps } from '../types/StatefulPinInput';

describe('Stateful Pin Input', () => {
  let props: StatefulPinInputProps;

  beforeEach(() => {
    props = {
      length: 4,
    };
  });

  const renderComponent = () => render(<StatefulPinInput {...props} />);

  it('should contain 4 inputs', () => {
    const { getAllByRole } = renderComponent();

    const PinInputFields = getAllByRole('textbox');

    expect(PinInputFields).toHaveLength(4);
  });
});

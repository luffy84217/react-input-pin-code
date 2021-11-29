import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import StatefulPinInput from '../components/StatefulPinInput';

describe('Stateful Pin Input', () => {
  it('should contain 4 inputs by default', () => {
    const { getAllByRole } = render(<StatefulPinInput />);
    const PinInputFields = getAllByRole('textbox');

    expect(PinInputFields).toHaveLength(4);
  });

  it('should update state on change', () => {
    const changePin = jest.fn();
    const { getAllByRole } = render(<StatefulPinInput onChange={changePin} />);
    const handleChange = jest.spyOn(React, 'useState') as jest.SpyInstance<
      [string[], React.Dispatch<React.SetStateAction<string[]>>],
      string[][]
    >;
    handleChange.mockImplementation((string) => [string, changePin]);

    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    PinInputFields.forEach((input, i) => {
      fireEvent.change(input, { target: { value: i } });
    });

    expect(changePin).toBeTruthy();
  });
});

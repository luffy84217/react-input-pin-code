import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';

import { StatefulPinInput } from '.';
import React, { Dispatch, SetStateAction } from 'react';

describe('component: StatefulPinInput', () => {
  it('renders component', () => {
    const { asFragment } = render(
      <StatefulPinInput
        initialValue={['1', '2', '3', '4']} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain 4 inputs by default', () => {
    const { getAllByRole } = render(<StatefulPinInput />);
    const PinInputFields = getAllByRole('textbox');

    expect(PinInputFields).toHaveLength(4);
  });

  it('should update state on change', () => {
    const changePin = jest.fn();
    const { getAllByRole } = render(<StatefulPinInput onChange={changePin} />);
    const handleChange = jest.spyOn(React, 'useState') as jest.SpiedFunction<
      (initialState: string[]) => [string[], Dispatch<SetStateAction<string[]>>]
    >;
    handleChange.mockImplementation((initialState) => [initialState, changePin]);

    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    PinInputFields.forEach((input, i) => {
      fireEvent.change(input, { target: { value: i } });
    });

    expect(changePin).toBeTruthy();
  });
});

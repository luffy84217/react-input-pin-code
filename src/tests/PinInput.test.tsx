import React from 'react';
import { render } from '@testing-library/react';
import PinInput from '../components/PinInput';

describe('Pin Input', () => {
  it('should contain 4 inputs', () => {
    const { getAllByRole } = render(<PinInput values={['', '', '', '']} />);

    const PinInputFields = getAllByRole('textbox');

    expect(PinInputFields).toHaveLength(4);
  });

  it('should call complete callback when filling all inputs', () => {
    let mockValues = ['1', '2', '3', ''];
    const mockCompleteHandler = jest.fn();
    const { rerender } = render(
      <PinInput values={['1', '2', '3', '']} onComplete={mockCompleteHandler} />
    );

    expect(mockCompleteHandler).not.toBeCalled();

    mockValues = ['1', '2', '3', '4'];

    rerender(<PinInput values={mockValues} onComplete={mockCompleteHandler} />);

    expect(mockCompleteHandler).toBeCalledTimes(1);
    expect(mockCompleteHandler).toBeCalledWith(mockValues);
  });

  it('should only call complete callback when filling all inputs and passing validation if it exists', () => {
    let mockValues = ['1', '2', '3', 'a'];
    const pattern = ['1', '2', '3', '4'];
    const mockCompleteHandler = jest.fn();
    const { rerender } = render(
      <PinInput
        values={mockValues}
        validate={pattern}
        onComplete={mockCompleteHandler}
      />
    );

    expect(mockCompleteHandler).not.toBeCalled();

    mockValues = ['1', '2', '3', '4'];

    rerender(
      <PinInput
        values={mockValues}
        validate={pattern}
        onComplete={mockCompleteHandler}
      />
    );

    expect(mockCompleteHandler).toBeCalledTimes(1);
    expect(mockCompleteHandler).toBeCalledWith(mockValues);
  });

  it('should render correct id if it exists', () => {
    const mockId = 'foo';
    const { getAllByRole } = render(
      <PinInput values={['', '', '', '']} id={mockId} />
    );

    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    PinInputFields.forEach((input, i) => {
      expect(input.id).toBe(`${mockId}-${i}`);
    });
  });
});

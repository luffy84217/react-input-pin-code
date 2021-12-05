import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { fireEvent, render } from '@testing-library/react';
import PinInput from '../components/PinInput';
import StatefulPinInput from '../components/StatefulPinInput';

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

  it('should auto focus first input if autoFocus is true', () => {
    const { getAllByRole } = render(
      <PinInput values={['', '', '', '']} autoFocus />
    );

    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    expect(PinInputFields[0]).toBe(document.activeElement);
  });

  it('should call focus and blur callback if they exist', () => {
    const mockKeydownHandler = jest.fn();
    const mockFocusHandler = jest.fn();
    const mockBlurHandler = jest.fn();
    const { getAllByRole } = render(
      <PinInput
        values={['', '', '', '']}
        onKeyDown={mockKeydownHandler}
        onFocus={mockFocusHandler}
        onBlur={mockBlurHandler}
      />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    expect(mockKeydownHandler).not.toBeCalled();
    expect(mockFocusHandler).not.toBeCalled();
    expect(mockBlurHandler).not.toBeCalled();

    PinInputFields[1].focus();
    fireEvent.keyDown(PinInputFields[1], {
      key: 'Backspace',
      code: 'Backspace',
    });
    PinInputFields[0].blur();

    expect(mockKeydownHandler).toBeCalled();
    expect(mockFocusHandler).toBeCalled();
    expect(mockBlurHandler).toBeCalled();
  });

  it('should auto focus previous input if pressing backspace when current input is empty', () => {
    const mockKeydownHandler = jest.fn();
    const { getAllByRole } = render(
      <PinInput values={['', '', '', '']} onKeyDown={mockKeydownHandler} />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    expect(PinInputFields[0]).not.toBe(document.activeElement);
    expect(mockKeydownHandler).not.toBeCalled();

    fireEvent.click(PinInputFields[1]);
    fireEvent.keyDown(PinInputFields[1], {
      key: 'Backspace',
      code: 'Backspace',
    });

    expect(PinInputFields[0]).toBe(document.activeElement);
    expect(mockKeydownHandler).toBeCalled();
  });

  it('should replacing each character with a symbol if mask is true', () => {
    const { getAllByPlaceholderText } = render(
      <PinInput values={['', '', '', '']} mask={true} type="text" />
    );
    const PinInputFields = getAllByPlaceholderText('o') as HTMLInputElement[];

    PinInputFields.forEach((input) => {
      expect(input.type).toBe('password');
    });
  });

  it('should render correct style when size is provided', () => {
    const { getAllByRole, rerender } = render(
      <PinInput values={['', '', '', '']} size="xs" />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];
    const xsTree = renderer
      .create(<PinInput values={['', '', '', '']} size="xs" />)
      .toJSON();
    const smTree = renderer
      .create(<PinInput values={['', '', '', '']} size="sm" />)
      .toJSON();
    const mdTree = renderer
      .create(<PinInput values={['', '', '', '']} size="md" />)
      .toJSON();
    const lgTree = renderer
      .create(<PinInput values={['', '', '', '']} size="lg" />)
      .toJSON();

    expect(xsTree).toMatchSnapshot();
    expect(smTree).toMatchSnapshot();
    expect(mdTree).toMatchSnapshot();
    expect(lgTree).toMatchSnapshot();

    PinInputFields.forEach((input) => {
      expect(input).toHaveStyle({ width: '1.5rem' });
      expect(input).toHaveStyle({ height: '1.5rem' });
    });
    rerender(<PinInput values={['', '', '', '']} size="sm" />);
    PinInputFields.forEach((input) => {
      expect(input).toHaveStyle({ width: '2rem' });
      expect(input).toHaveStyle({ height: '2rem' });
    });
    rerender(<PinInput values={['', '', '', '']} size="md" />);
    PinInputFields.forEach((input) => {
      expect(input).toHaveStyle({ width: '2.5rem' });
      expect(input).toHaveStyle({ height: '2.5rem' });
    });
    rerender(<PinInput values={['', '', '', '']} size="lg" />);
    PinInputFields.forEach((input) => {
      expect(input).toHaveStyle({ width: '3rem' });
      expect(input).toHaveStyle({ height: '3rem' });
    });
  });

  it('should render correct style when border color is provided', () => {
    const { getAllByRole, rerender } = render(
      <PinInput values={['1', '2', '3', '4']} validBorderColor="#198754" />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];
    const validTree = renderer
      .create(
        <PinInput values={['1', '2', '3', '4']} validBorderColor="#198754" />
      )
      .toJSON();

    expect(validTree).toMatchSnapshot();
    expect(PinInputFields[0]).toHaveStyle('border-color: rgb(25,135,84)');

    rerender(
      <PinInput
        values={['a', 'b', 'c', 'd']}
        validate="abc"
        errorBorderColor="#dc3545"
      />
    );
    const invalidTree = renderer
      .create(
        <PinInput
          values={['a', 'b', 'c', 'd']}
          validate="abc"
          errorBorderColor="#dc3545"
        />
      )
      .toJSON();

    expect(invalidTree).toMatchSnapshot();

    expect(PinInputFields[3]).toHaveStyle('border-color: rgb(220,53,69)');
  });

  it('should render correct when showState is false', () => {
    const { getAllByRole } = render(
      <PinInput values={['1', '2', '3', '4']} showState={false} />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];
    const tree = renderer
      .create(<PinInput values={['1', '2', '3', '4']} showState={false} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(PinInputFields[0]).toHaveStyle('border-color: #cccccc');
  });

  it('should auto fill when input is mulitple characters', () => {
    const { getAllByRole, rerender } = render(<StatefulPinInput />);
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.change(PinInputFields[0], { target: { value: '0123' } });
    PinInputFields.forEach((input, i) => {
      expect(input.value).toBe(i.toString());
    });

    rerender(<StatefulPinInput initialValue={['0', '', '', '']} />);
    fireEvent.change(PinInputFields[0], { target: { value: '0123' } });
    PinInputFields.forEach((input, i) => {
      expect(input.value).toBe(i.toString());
    });
  });

  it('should delete character if Backspace is pressed', () => {
    const { getAllByRole } = render(
      <StatefulPinInput initialValue={['0', '', '', '']} />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.change(PinInputFields[0], { target: { value: '' } });
    expect(PinInputFields[0].value).toBe('');
  });

  it('should override the input value with the last character typed', () => {
    const { getAllByRole } = render(
      <StatefulPinInput initialValue={['0', '', '', '']} />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.change(PinInputFields[0], { target: { value: '01' } });
    expect(PinInputFields[0].value).toBe('1');
    fireEvent.change(PinInputFields[0], { target: { value: '21' } });
    expect(PinInputFields[0].value).toBe('2');
  });

  it('should format input value', () => {
    const { getAllByRole } = render(
      <StatefulPinInput
        type="text"
        format={(c) => (parseInt(c) + 1).toString()}
      />
    );
    const PinInputFields = getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.change(PinInputFields[0], { target: { value: '1' } });
    expect(PinInputFields[0].value).toBe('2');
    fireEvent.change(PinInputFields[1], { target: { value: '23' } });
    expect(PinInputFields[1].value).toBe('3');
    expect(PinInputFields[2].value).toBe('4');
  });
});

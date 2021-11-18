import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../styles/PinInputField';
import { PinInputFieldProps } from '../types/PinInputField';

const propTypes = {
  index: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

const PinInputField: React.FC<PinInputFieldProps> = ({
  index,
  value,
  values,
  mask,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentValue = values[index];
    const eventValue = e.target.value;
    let newValue: string | string[];
    const newValues = [...values];

    if (currentValue) {
      // in the case of copy and paste
      if (eventValue.length > 2) {
        newValue = eventValue.split('');
        // digit was deleted
      } else if (eventValue === '') {
        newValue = '';
      } else {
        // override the input value with the last digit typed
        if (currentValue[0] === eventValue[0]) {
          newValue = eventValue[1];
        } else if (currentValue[0] === eventValue[1]) {
          newValue = eventValue[0];
        }
      }
    } else {
      // in the case of copy and paste
      if (eventValue.length > 1) {
        newValue = eventValue.split('');
      } else {
        newValue = eventValue;
      }
    }

    // auto-tab to the pin input
    let inputEl: Element = inputRef.current;
    for (let i = 0; i < newValue.length; i++) {
      inputEl = inputEl.nextElementSibling;
    }
    if (newValue && inputEl instanceof HTMLInputElement) {
      inputEl.focus();
    }

    if (onChange) {
      if (Array.isArray(newValue)) {
        newValue.forEach((val, i) => (newValues[index + i] = val));
      } else {
        newValues[index] = newValue;
      }
      onChange(newValue, index, newValues);
    }
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Backspace' && values[index] === '' && index > 0) {
      const prevInput = inputRef.current.previousElementSibling;

      if (prevInput instanceof HTMLInputElement) {
        prevInput.focus();
      }
    }
  };
  const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.placeholder = '';
  };
  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.placeholder = 'o';
  };

  return (
    <Input
      ref={inputRef}
      type={mask ? 'password' : 'text'}
      placeholder="o"
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    />
  );
};

PinInputField.displayName = 'PinInputField';
PinInputField.propTypes = propTypes;

export default PinInputField;

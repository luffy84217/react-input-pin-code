import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../styles/PinInputField';
import { PinInputFieldProps } from '../types/PinInputField';
import { validateToPattern } from '../utils';

const propTypes = {
  index: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

const PinInputField: React.FC<PinInputFieldProps> = ({
  index,
  value,
  values,
  completed,
  type,
  mask,
  size,
  validate,
  showState,
  'aria-describedby': ariaDescribedby,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  autoComplete,
  disabled,
  inputMode,
  name,
  placeholder,
  required,
  inputStyle,
  errorBorderColor,
  focusBorderColor,
  validBorderColor,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
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

    if (onChange) {
      const regex = type === 'number' ? /(^$)|(\d+)/ : /.*/;
      let shouldFireChange: boolean;

      if (Array.isArray(newValue)) {
        newValue.forEach((val, i) => (newValues[index + i] = val));
        shouldFireChange = newValue.every((val) => regex.test(val));
      } else {
        newValues[index] = newValue;
        shouldFireChange = regex.test(newValue);
      }
      if (shouldFireChange) {
        onChange(newValue, index, newValues);

        // auto-tab to the specified pin input
        let inputEl: Element = inputRef.current;
        for (let i = 0; i < newValue.length; i++) {
          inputEl = inputEl.nextElementSibling;
        }
        if (newValue && inputEl instanceof HTMLInputElement) {
          inputEl.focus();
        }
      }
    }
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Backspace' && values[index] === '' && index > 0) {
      const prevInput = inputRef.current.previousElementSibling;

      if (prevInput instanceof HTMLInputElement) {
        prevInput.focus();
      }
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.placeholder = '';
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.placeholder = placeholder;
    if (onBlur) {
      onBlur(e);
    }
  };

  const pattern = useMemo(() => validateToPattern(validate), [validate]);

  return (
    <Input
      ref={inputRef}
      type={mask ? 'password' : 'text'}
      aria-autoComplete={autoComplete}
      aira-describedby={ariaDescribedby}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-required={required}
      autoComplete={autoComplete}
      disabled={disabled}
      name={name}
      inputMode={inputMode || (type === 'number' ? 'numeric' : 'text')}
      required={required}
      placeholder={placeholder}
      pattern={pattern}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      completed={completed}
      showState={showState}
      sizing={size}
      style={inputStyle}
      errorBorderColor={errorBorderColor}
      focusBorderColor={focusBorderColor}
      validBorderColor={validBorderColor}
      data-index={index}
    />
  );
};

PinInputField.displayName = 'PinInputField';
PinInputField.propTypes = propTypes;

export default PinInputField;

import { useEffect, useMemo, useRef } from "react";
import { Component } from "./types";
import cx from "clsx";

import styles from './styles.module.scss';

import { normalizeNewValue } from "./utils";
import { sizeConfigMap } from "./configs";
import { INPUT_KEY_BACKSPACE, SIZE_MEDIUM } from "../../constants";
import { validateToPattern } from "../../utils/string";

export const PinInputField: Component = ({
  index,
  value,
  values,
  completed,
  type = 'number',
  mask,
  size = SIZE_MEDIUM,
  validate,
  format,
  showState = true,
  autoFocus = false,
  autoTab = true,
  'aria-describedby': ariaDescribedby,
  'aria-label': ariaLabel = 'Please enter pin code',
  'aria-labelledby': ariaLabelledby,
  autoComplete = 'off',
  disabled,
  inputMode,
  id,
  name,
  placeholder = 'o',
  required,
  inputClassName,
  inputStyle = {},
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentValue = values[index];
    const eventValue = e.target.value;
    const newValues = [...values];
    const rawValue: string[] = normalizeNewValue(
      currentValue,
      eventValue
    ).slice(0, newValues.length - index);
    const regex = type === 'number' ? /(^$)|(\d+)/ : /.*/;
    const shouldFireChange: boolean = rawValue.every((val) => regex.test(val));

    if (!onChange) {
      return;
    }

    // apply formatter to transform
    const newValue = format ? rawValue.map((val) => format(val)) : rawValue;

    if (newValue.length) {
      newValue.forEach((val, idx) => (newValues[index + idx] = val));
    } else {
      newValues[index] = '';
    }

    if (!shouldFireChange) {
      return;
    }

    onChange(newValue, index, newValues);

    // auto-tab to the specified pin input
    let inputEl: Element | null = inputRef.current;
    for (let i = 0; i < newValue.length; i++) {
      if (inputEl) {
        inputEl = inputEl.nextElementSibling;
      }
    }

    if (newValue && autoTab && inputEl instanceof HTMLInputElement) {
      inputEl.focus();
    }
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (inputRef.current
      && e.key === INPUT_KEY_BACKSPACE
      && autoTab
      && values[index] === ''
      && index > 0
    ) {
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

  // auto-focus on mount
  useEffect(() => {
    if (inputRef.current && autoFocus && index === 0) {
      inputRef.current.focus();
    }
  }, [autoFocus, index]);

  const {
    [size]: {
      className: sizeClassName,
    },
  } = sizeConfigMap;

  return (
    <input
      ref={inputRef}
      type={mask ? 'password' : 'text'}
      aria-describedby={ariaDescribedby}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-required={required}
      autoComplete={autoComplete}
      disabled={disabled}
      name={name}
      id={id && `${id}-${index}`}
      className={cx(
        styles.inputWrapper,
        styles[sizeClassName],
        completed && styles.hasCompleted,
        showState && styles.showState,
        inputClassName,
      )}
      inputMode={inputMode || (type === 'number' ? 'numeric' : 'text')}
      required={required}
      placeholder={placeholder}
      pattern={pattern}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      style={inputStyle}
      data-index={index}
    />
  );
};

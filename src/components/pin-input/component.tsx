import cx from "clsx";
import { useEffect, useMemo, useRef } from "react";
import { Component } from "./types";

import styles from './styles.module.scss';

import { PinInputField } from "../pin-input-field";
import { validateToPattern } from "../../utils/string";
import { useCssVariable } from "../../hooks";
import { colorParser } from "./utils";
import { SIZE_MEDIUM } from "../../constants";
import {
  DEFAULT_BORDER_COLOR,
  DEFAULT_ERROR_BACKGROUND_COLOR,
  DEFAULT_ERROR_BORDER_COLOR,
  DEFAULT_FOCUS_BACKGROUND_COLOR,
  DEFAULT_FOCUS_BORDER_COLOR,
  DEFAULT_VALID_BACKGROUND_COLOR,
  DEFAULT_VALID_BORDER_COLOR
} from "../../constants/styles";

export const PinInput: Component = ({
  values,
  type = 'number',
  mask = false,
  size = SIZE_MEDIUM,
  validate,
  format,
  showState = true,
  autoFocus = false,
  autoTab = true,
  containerClassName,
  containerStyle = {},
  inputClassName,
  inputStyle = {},
  borderColor = DEFAULT_BORDER_COLOR,
  errorBorderColor = DEFAULT_ERROR_BORDER_COLOR,
  focusBorderColor = DEFAULT_FOCUS_BORDER_COLOR,
  validBorderColor = DEFAULT_VALID_BORDER_COLOR,
  onChange,
  onComplete,
  'aria-describedby': ariaDescribedby,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  autoComplete,
  disabled,
  id,
  inputMode,
  name,
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  required,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const completed = useMemo(
    () => values.every((val) => val),
    [values]
  );

  if (completed && onComplete) {
    if (validate) {
      if (
        values.every((val) => {
          const pattern = validateToPattern(validate);
          
          if (pattern) {
            return new RegExp(pattern).test(val);
          }

          return false;
        })
      ) {
        onComplete(values);
      }
    } else {
      onComplete(values);
    }
  }

  const {
    setCssVariable: setInputCssVariable,
  } = useCssVariable({
    targetElRef: containerRef,
  });

  const parsedFocusBorderColor = useMemo(
    () => colorParser(focusBorderColor),
    [focusBorderColor]
  );
  const parsedErrorBorderColor = useMemo(
    () => colorParser(errorBorderColor),
    [errorBorderColor]
  );
  const parsedValidBorderColor = useMemo(
    () => colorParser(focusBorderColor),
    [validBorderColor]
  );

  useEffect(() => {
    if (containerRef.current) {
      setInputCssVariable(
        styles.inputBorderColorCssVar,
        colorParser(borderColor) ? borderColor : DEFAULT_BORDER_COLOR,
      );
      setInputCssVariable(
        styles.inputFocusBorderColorCssVar,
        parsedFocusBorderColor ? focusBorderColor : DEFAULT_FOCUS_BORDER_COLOR,
      );
      setInputCssVariable(
        styles.inputFocusBackgroundColorCssVar,
        parsedFocusBorderColor
          ? `rgba(${parsedFocusBorderColor.r},${parsedFocusBorderColor.g},${parsedFocusBorderColor.b},0.1)`
          : DEFAULT_FOCUS_BACKGROUND_COLOR,
      );
      setInputCssVariable(
        styles.inputErrorBorderColorCssVar,
        colorParser(errorBorderColor) ? errorBorderColor : DEFAULT_ERROR_BORDER_COLOR,
      );
      setInputCssVariable(
        styles.inputErrorBackgroundColorCssVar,
        parsedErrorBorderColor
          ? `rgba(${parsedErrorBorderColor.r},${parsedErrorBorderColor.g},${parsedErrorBorderColor.b},0.1)`
          : DEFAULT_ERROR_BACKGROUND_COLOR,
      );
      setInputCssVariable(
        styles.inputValidBorderColorCssVar,
        colorParser(validBorderColor) ? validBorderColor : DEFAULT_VALID_BORDER_COLOR,
      );
      setInputCssVariable(
        styles.inputValidBackgroundColorCssVar,
        parsedValidBorderColor
          ? `rgba(${parsedValidBorderColor.r},${parsedValidBorderColor.g},${parsedValidBorderColor.b},0.1)`
          : DEFAULT_VALID_BACKGROUND_COLOR,
      );
    }
  }, [containerRef.current]);

  return (
    <div
      ref={containerRef}
      className={cx(
        styles.pinCodeContainer,
        containerClassName
      )}
      style={containerStyle}
    >
      {values.map((value, i) => (
        <PinInputField
          key={id ? `${id}-${i}` : i}
          index={i}
          value={value}
          values={values}
          completed={completed}
          type={type}
          mask={mask}
          size={size}
          validate={validate}
          showState={showState}
          autoFocus={autoFocus}
          autoTab={autoTab}
          inputClassName={inputClassName}
          inputStyle={inputStyle}
          aria-describedby={ariaDescribedby}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          autoComplete={autoComplete}
          disabled={disabled}
          inputMode={inputMode}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          format={format}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
      ))}
    </div>
  );
};
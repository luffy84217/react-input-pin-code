import React from 'react';

export type PinInputProps = {
  values: string[];
  type?: 'number' | 'text';
  mask?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  validate?: string | string[] | RegExp;
  format?: (char: string) => string;
  showState?: boolean;
  autoFocus?: boolean;
  autoTab?: boolean;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  borderColor?: string;
  errorBorderColor?: string;
  focusBorderColor?: string;
  validBorderColor?: string;
  onChange?: (
    value: string | string[],
    index: number,
    values: string[]
  ) => void;
  onComplete?: (values: string[]) => void;
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'aria-describedby'
  | 'aria-label'
  | 'aria-labelledby'
  | 'autoComplete'
  | 'disabled'
  | 'id'
  | 'inputMode'
  | 'name'
  | 'onBlur'
  | 'onFocus'
  | 'onKeyDown'
  | 'placeholder'
  | 'required'
>;

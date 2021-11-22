import React from 'react';

export type PinInputProps = {
  values: string[];
  type?: 'number' | 'text';
  mask?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  validate?: string | string[] | RegExp;
  showState?: boolean;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  onChange?: (
    value: string | string[],
    index: number,
    values: string[]
  ) => void;
  onComplete?: (values: string[]) => void;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'inputMode'>;

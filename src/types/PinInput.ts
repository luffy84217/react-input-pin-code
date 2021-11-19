import React from 'react';

export type PinInputProps = {
  values: string[];
  type?: 'number' | 'text';
  mask?: boolean;
  onChange?: (
    value: string | string[],
    index: number,
    values: string[]
  ) => void;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'inputMode'>;

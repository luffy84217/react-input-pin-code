import type { FC } from 'react';
import type { Props as PinInputProps } from '../pin-input';

export type Props = Omit<PinInputProps, 'values'> & {
  length?: number;
  initialValue?: string | string[];
};


export type Component = FC<Props>;

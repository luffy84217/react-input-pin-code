import type { FC } from 'react';
import type { Props as PinInputProps } from '../pin-input'
import type { ModifierClassName } from '../../types';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export type SizeConfigMap = Record<
  Size,
  {
    className: ModifierClassName;
  }
>;

export type Props = PinInputProps & {
  index: number;
  value: string;
  completed: boolean;
};

export type Component = FC<Props>;

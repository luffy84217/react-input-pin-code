import { PinInputProps } from './PinInput';

export type PinInputFieldProps = {
  index: number;
  value: string;
  completed: boolean;
} & PinInputProps;

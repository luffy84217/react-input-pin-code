import { PinInputProps } from './PinInput';

export type StatefulPinInputProps = Omit<PinInputProps, 'values'> & {
  length?: number;
  initialValue?: string | string[];
};

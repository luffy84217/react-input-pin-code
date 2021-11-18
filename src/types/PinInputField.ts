export interface PinInputFieldProps {
  index: number;
  value: string;
  values: string[];
  mask?: boolean;
  onChange?: (
    value: string | string[],
    index: number,
    values: string[]
  ) => void;
}

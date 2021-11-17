export interface PinInputFieldProps {
  index: number;
  value: string;
  values: string[];
  onChange?: (
    value: string | string[],
    index: number,
    values: string[]
  ) => void;
}

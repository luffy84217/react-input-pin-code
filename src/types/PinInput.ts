export interface PinInputProps {
  values: string[];
  mask?: boolean;
  onChange?: (
    value: string | string[],
    index: number,
    values: string[]
  ) => void;
}

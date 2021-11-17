export interface PinInputProps {
  values: string[];
  onChange?: (
    value: string | string[],
    index: number,
    values: string[]
  ) => void;
}

import type { ComponentProps, FC } from 'react';

export type Props = {
  values: string[];
  type?: 'number' | 'text' | undefined;
  mask?: boolean | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg' | undefined;
  validate?: string | string[] | RegExp | undefined;
  format?: ((char: string) => string) | undefined;
  showState?: boolean | undefined;
  autoFocus?: boolean | undefined;
  autoTab?: boolean | undefined;
  containerClassName?: ComponentProps<'div'>['className'] | undefined;
  containerStyle?: React.CSSProperties | undefined;
  inputClassName?: ComponentProps<'div'>['className'] | undefined;
  inputStyle?: React.CSSProperties | undefined;
  borderColor?: string | undefined;
  errorBorderColor?: string | undefined;
  focusBorderColor?: string | undefined;
  validBorderColor?: string | undefined;
  onChange?: ((
    value: string | string[],
    index: number,
    values: string[]
  ) => void) | undefined;
  onComplete?: ((values: string[]) => void) | undefined;
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'aria-describedby'
  | 'aria-label'
  | 'aria-labelledby'
  | 'autoComplete'
  | 'disabled'
  | 'id'
  | 'inputMode'
  | 'name'
  | 'onBlur'
  | 'onFocus'
  | 'onKeyDown'
  | 'placeholder'
  | 'required'
>;

export type Component = FC<Props>;

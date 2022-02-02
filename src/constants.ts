import type { PinInputProps } from './types/PinInput';

export const pinInputDefaultProps: Partial<PinInputProps> = {
  type: 'number',
  mask: false,
  showState: true,
  size: 'md',
  autoFocus: false,
  autoTab: true,
  borderColor: 'rgb(204,204,204)',
  errorBorderColor: 'rgb(220,53,69)',
  focusBorderColor: 'rgb(13,110,253)',
  validBorderColor: 'rgb(25,135,84)',
  containerStyle: {},
  inputStyle: {},
  autoComplete: 'off',
  placeholder: 'o',
  'aria-label': 'Please enter pin code',
};

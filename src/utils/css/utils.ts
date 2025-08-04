import type { CssVariable } from '../../types';
import type { SetElementCssVariable } from './types';

export const isCssVariable = (value: unknown): value is CssVariable => (
  typeof value === 'string' && value.startsWith('--')
);

export const setElementCssVariable: SetElementCssVariable = ({
  element,
  name,
  value,
}) => {
  if (!isCssVariable(name)) {
    return;
  }

  element.style.setProperty(name, value);
};

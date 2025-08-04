import { describe, expect, it } from '@jest/globals';

import { isCssVariable, setElementCssVariable } from './utils';

describe('function: isCssVariable', () => {
  it('validates css variable', () => {
    expect(isCssVariable('--css-variable')).toBe(true);
    expect(isCssVariable('non-css-variable')).toBe(false);
  });
});

describe('function: setElementCssVariable', () => {
  it('ignores invalid css variable name', () => {
    const div = document.createElement('div');

    setElementCssVariable({
      element: div,
      name: 'non-css-variable',
      value: 'mock',
    });

    expect(div.style.getPropertyValue('non-css-variable')).toBe('');
  });

  it('set css variable to the element style', () => {
    const div = document.createElement('div');

    setElementCssVariable({
      element: div,
      name: '--css-variable',
      value: 'mock',
    });

    expect(div.style.getPropertyValue('--css-variable')).toBe('mock');
  });
});

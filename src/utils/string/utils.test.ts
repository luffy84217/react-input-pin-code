import { describe, expect, it } from '@jest/globals';

import { validateToPattern } from './utils';

describe('function: validateToPattern', () => {
  it('should return correct pattern', () => {
    expect(validateToPattern('abc')).toBe('a|b|c');
    expect(validateToPattern(['a', 'b', 'c'])).toBe('a|b|c');
    expect(validateToPattern(/a|b|c/)).toBe('a|b|c');
  });

  it('should return undefined', () => {
    expect(validateToPattern(undefined)).toBeUndefined();
  });
});

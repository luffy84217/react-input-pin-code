import { validateToPattern, hexToRgb } from '../utils';

describe('validateToPattern', () => {
  it('should return correct pattern', () => {
    expect(validateToPattern('abc')).toBe('a|b|c');
    expect(validateToPattern(['a', 'b', 'c'])).toBe('a|b|c');
    expect(validateToPattern(/a|b|c/)).toBe('a|b|c');
  });

  it('should return undefined', () => {
    expect(validateToPattern(undefined)).toBeUndefined();
  });
});

describe('hexToRgb', () => {
  it('should return correct rgb number', () => {
    expect(hexToRgb('05fc41')).toEqual({ r: 5, g: 252, b: 65 });
    expect(hexToRgb('#05fc41')).toEqual({ r: 5, g: 252, b: 65 });
    expect(hexToRgb('#05FC41')).toEqual({ r: 5, g: 252, b: 65 });
    expect(hexToRgb('#FFF')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#09C')).toEqual({ r: 0, g: 153, b: 204 });
  });

  it('should return null', () => {
    expect(hexToRgb('#05GC41')).toBeNull();
    expect(hexToRgb('#05FC411')).toBeNull();
    expect(hexToRgb(undefined)).toBeNull();
  });
});

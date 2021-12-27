import { validateToPattern, colorParser } from '../utils';

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

describe('colorParser', () => {
  it('should return correct rgb number if arg is rgb pattern', () => {
    expect(colorParser('rgb(5,252,65)')).toEqual({ r: 5, g: 252, b: 65 });
    expect(colorParser('rgb(5, 252, 65)')).toEqual({ r: 5, g: 252, b: 65 });
  });

  it('should return correct rgb number if arg is hex pattern', () => {
    expect(colorParser('05fc41')).toEqual({ r: 5, g: 252, b: 65 });
    expect(colorParser('#05fc41')).toEqual({ r: 5, g: 252, b: 65 });
    expect(colorParser('#05FC41')).toEqual({ r: 5, g: 252, b: 65 });
    expect(colorParser('#FFF')).toEqual({ r: 255, g: 255, b: 255 });
    expect(colorParser('#09C')).toEqual({ r: 0, g: 153, b: 204 });
  });

  it('should return null', () => {
    expect(colorParser('rgb(5,252,65')).toBeNull();
    expect(colorParser('rgb(5,252,)')).toBeNull();
    expect(colorParser('rgb(5,2522,65)')).toBeNull();
    expect(colorParser('#05GC41')).toBeNull();
    expect(colorParser('#05FC411')).toBeNull();
    expect(colorParser(undefined)).toBeNull();
  });
});

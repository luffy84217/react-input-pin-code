export const validateToPattern = (
  validate: string | string[] | RegExp
): string => {
  if (Array.isArray(validate)) {
    const regex = new RegExp(validate.join('|')).toString();
    return regex.slice(1, regex.length - 1);
  } else if (typeof validate === 'string') {
    const regex = new RegExp(validate.split('').join('|')).toString();
    return regex.slice(1, regex.length - 1);
  } else if (validate instanceof RegExp) {
    const regex = validate.toString();
    return regex.slice(1, regex.length - 1);
  } else {
    return '';
  }
};
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  if (hex === undefined) return null;
  const shorthand = /^#?[a-fA-Z\d]{3}$/i.test(hex);
  const result = shorthand
    ? /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex)
    : /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(shorthand ? result[1] + result[1] : result[1], 16),
        g: parseInt(shorthand ? result[2] + result[2] : result[2], 16),
        b: parseInt(shorthand ? result[3] + result[3] : result[3], 16),
      }
    : null;
};

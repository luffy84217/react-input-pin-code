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
    return undefined;
  }
};
export const colorParser = (
  color: string
): { r: number; g: number; b: number } => {
  if (color === undefined) return null;

  const match = color.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);

  if (match) {
    return {
      r: Number(match[1]),
      g: Number(match[2]),
      b: Number(match[3]),
    };
  } else {
    const shorthand = /^#?[a-fA-Z\d]{3}$/i.test(color);
    const result = shorthand
      ? /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(color)
      : /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

    return result
      ? {
          r: parseInt(shorthand ? result[1] + result[1] : result[1], 16),
          g: parseInt(shorthand ? result[2] + result[2] : result[2], 16),
          b: parseInt(shorthand ? result[3] + result[3] : result[3], 16),
        }
      : null;
  }
};

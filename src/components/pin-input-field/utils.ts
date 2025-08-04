export const normalizeNewValue = (currentValue: string, eventValue: string) => {
  if (!currentValue) {
    return eventValue.split('');
  }

  if (eventValue.length > 2) {
    return eventValue.split('');
  }

  if (eventValue === '') {
    return [];
  }

  if (currentValue[0] === eventValue[0]) {
    return [eventValue[1]];
  }

  return [eventValue[0]];
};

export const validateToPattern = (
  validate: string | string[] | RegExp | undefined
): string | undefined => {
  if (Array.isArray(validate)) {
    const regex = new RegExp(validate.join('|')).toString();
    return regex.slice(1, regex.length - 1);
  } else if (typeof validate === 'string') {
    const regex = new RegExp(validate.split('').join('|')).toString();
    return regex.slice(1, regex.length - 1);
  } else if (validate instanceof RegExp) {
    const regex = validate.toString();
    return regex.slice(1, regex.length - 1);
  }

  return undefined;
};

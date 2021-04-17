import { validateRegExp } from './validateRegExp';

export const haveOneNumber = (value: string): boolean => {
  const regExp = /(?:[0-9])/;

  return validateRegExp(value, regExp);
};

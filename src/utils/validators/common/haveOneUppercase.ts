import { validateRegExp } from './validateRegExp';

export const haveOneUppercase = (value: string): boolean => {
  const regExp = /(?:[A-Z])/;

  return validateRegExp(value, regExp);
};

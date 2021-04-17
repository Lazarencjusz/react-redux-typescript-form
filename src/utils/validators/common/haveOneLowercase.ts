import { validateRegExp } from './validateRegExp';

export const haveOneLowercase = (value: string): boolean => {
  const regExp = /(?:[a-z])/;

  return validateRegExp(value, regExp);
};

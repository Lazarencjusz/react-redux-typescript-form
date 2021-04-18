import { validateRegExp } from './validateRegExp';

export const hasOneLowercase = (value: string | null): boolean => {
  const regExp = /(?:[a-z])/;

  return validateRegExp(value ?? '', regExp);
};

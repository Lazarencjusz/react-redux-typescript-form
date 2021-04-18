import { validateRegExp } from './validateRegExp';

export const hasOneNumber = (value: string | null): boolean => {
  const regExp = /(?:[0-9])/;

  return validateRegExp(value ?? '', regExp);
};

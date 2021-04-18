import { validateRegExp } from './validateRegExp';

export const hasOneUppercase = (value: string | null): boolean => {
  const regExp = /(?:[A-Z])/;

  return validateRegExp(value ?? '', regExp);
};

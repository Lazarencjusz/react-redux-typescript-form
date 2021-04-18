import { validateRegExp } from './validateRegExp';

/**
 * This function check if provided string value contains at least one uppercase character
 *
 * @param value string | null
 * @returns boolean
 */
export const hasOneUppercase = (value: string | null): boolean => {
  const regExp = /(?:[A-Z])/;

  return validateRegExp(value ?? '', regExp);
};

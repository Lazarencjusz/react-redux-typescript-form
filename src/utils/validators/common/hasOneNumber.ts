import { validateRegExp } from './validateRegExp';

/**
 * This function check if provided string value contains at least one number
 *
 * @param value string | null
 * @returns boolean
 */
export const hasOneNumber = (value: string | null): boolean => {
  const regExp = /(?:[0-9])/;

  return validateRegExp(value ?? '', regExp);
};

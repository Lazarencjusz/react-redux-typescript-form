import { validateRegExp } from './validateRegExp';

/**
 * This function check if provided string value contains at least one lowercase character
 *
 * @param value string | null
 * @returns boolean
 */
export const hasOneLowercase = (value: string | null): boolean => {
  const regExp = /(?:[a-z])/;

  return validateRegExp(value ?? '', regExp);
};

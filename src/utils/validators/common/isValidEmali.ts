import { validateRegExp } from './validateRegExp';

/**
 * This function checks if provided string value is correct email address
 *
 * @param value string | null
 * @returns boolean
 */
export const isValidEmali = (value: string | null): boolean => {
  const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return validateRegExp(value ?? '', regExp);
};

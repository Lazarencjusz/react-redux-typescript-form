/**
 * This function checks if provided string value matches
 * provided regular expresion
 *
 * @param value string
 * @param regExp RegExp
 * @returns boolean
 */
export const validateRegExp = (value: string, regExp: RegExp): boolean => regExp.test(value);

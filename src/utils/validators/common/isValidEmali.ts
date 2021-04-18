import { validateRegExp } from './validateRegExp';

export const isValidEmali = (value: string | null): boolean => {
  const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return validateRegExp(value ?? '', regExp);
};

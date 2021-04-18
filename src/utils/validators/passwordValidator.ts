import { replace } from 'lodash';
import { ErrorMessage } from '../../model/enum/ErrorMessage';
import { AppFormData } from '../../model/form/AppFormData';
import { hasOneLowercase } from './common/hasOneLowercase';
import { hasOneNumber } from './common/hasOneNumber';
import { hasOneUppercase } from './common/hasOneUppercase';
import { isDefined } from './common/isDefined';
import { hasLength } from './common/hasLength';

const MIN_LENGTH = 9;

/**
 * This function validate "password" field from
 * provided form data and returns error message
 * depending on validation condition
 *
 * @param formData AppFormData
 * @returns string | null
 */
export const passwordValidator = (formData: AppFormData): string | null => {
  const value: string = formData.password;

  if (!isDefined(value)) {
    return ErrorMessage.required;
  }
  if (!hasLength(value, MIN_LENGTH)) {
    return replace(ErrorMessage.passwordLength, '%s%', String(MIN_LENGTH));
  }
  if (!hasOneUppercase(value)) {
    return ErrorMessage.passwordUppercase;
  }
  if (!hasOneLowercase(value)) {
    return ErrorMessage.passwordLowercase;
  }
  if (!hasOneNumber(value)) {
    return ErrorMessage.passwordNumber;
  }

  return null;
};

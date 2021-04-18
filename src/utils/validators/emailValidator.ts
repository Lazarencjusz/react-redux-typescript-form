import { ErrorMessage } from '../../model/enum/ErrorMessage';
import { AppFormData } from '../../model/form/AppFormData';
import { isDefined } from './common/isDefined';
import { isValidEmali } from './common/isValidEmali';

/**
 * This function validate "email" field from
 * provided form data and returns error message
 * depending on validation condition
 *
 * @param formData AppFormData
 * @returns string | null
 */
export const emailValidator = (formData: AppFormData): string | null => {
  const value: string = formData.email;

  if (!isDefined(value)) {
    return ErrorMessage.required;
  }
  if (!isValidEmali(value)) {
    return ErrorMessage.email;
  }
  return null;
};

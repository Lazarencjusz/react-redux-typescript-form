import { ErrorMessage } from '../../model/enum/ErrorMessage';
import { AppFormData } from '../../model/form/AppFormData';
import { isDefined } from './common/isDefined';
import { isValidEmali } from './common/isValidEmali';

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

import { replace } from 'lodash';
import { ErrorMessage } from '../../model/enum/ErrorMessage';
import { AppFormData } from '../../model/form/AppFormData';
import { haveOneLowercase } from './common/haveOneLowercase';
import { haveOneNumber } from './common/haveOneNumber';
import { haveOneUppercase } from './common/haveOneUppercase';
import { isDefined } from './common/isDefined';
import { haveLength } from './common/validatePasswordLength';

const MIN_LENGTH = 9;

export const passwordValidator = (formData: AppFormData): string | null => {
  const value: string = formData.password;

  if (!isDefined(value)) {
    return ErrorMessage.required;
  }
  if (!haveLength(value, MIN_LENGTH)) {
    return replace(ErrorMessage.passwordLength, '%s%', String(MIN_LENGTH));
  }
  if (!haveOneUppercase(value)) {
    return ErrorMessage.passwordUppercase;
  }
  if (!haveOneLowercase(value)) {
    return ErrorMessage.passwordLowercase;
  }
  if (!haveOneNumber(value)) {
    return ErrorMessage.passwordNumber;
  }

  return null;
};

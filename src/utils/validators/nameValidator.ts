import { ErrorMessage } from '../../model/enum/ErrorMessage';
import { AppFormData } from '../../model/form/AppFormData';
import { isDefined } from './common/isDefined';

export const nameValidator = (formData: AppFormData): string | null =>
  !isDefined(formData.name) ? ErrorMessage.required : null;

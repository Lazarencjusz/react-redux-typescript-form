import { ErrorMessage } from '../../model/enum/ErrorMessage';
import { AppFormData } from '../../model/form/AppFormData';
import { isDefined } from './common/isDefined';

/**
 * This function validate "name" field from
 * provided form data and returns error message
 * depending on validation condition
 *
 * @param formData AppFormData
 * @returns string | null
 */
export const nameValidator = (formData: AppFormData): string | null =>
  !isDefined(formData.name) ? ErrorMessage.required : null;

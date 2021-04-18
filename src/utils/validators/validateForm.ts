import { merge, reduce } from 'lodash';
import { AppFormData } from '../../model/form/AppFormData';
import { FormField } from '../../model/form/FormField';
import { ValidationResult } from '../../model/form/ValidationResult';
import { validators } from './validators';

/**
 * This function validate all fields in provided form data
 * and returns validation result which contains
 * form field name with coresponding error message
 *
 * @param data AppFormData
 * @returns ValidationResult
 */
export const validateForm = (data: AppFormData): ValidationResult =>
  reduce(
    data,
    (validationResult: ValidationResult, _, field: string) => {
      const validator = validators.get(field as FormField);
      if (validator) {
        const result: string | null = validator(data);
        return merge({}, validationResult, result ? { [field]: result } : {});
      }
      return validationResult;
    },
    {},
  );

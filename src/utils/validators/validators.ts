import { AppFormData } from '../../model/form/AppFormData';
import { FormField } from '../../model/form/FormField';
import { emailValidator } from './emailValidator';
import { nameValidator } from './nameValidator';
import { passwordValidator } from './passwordValidator';

export const validators: Map<FormField, (formData: AppFormData) => string | null> = new Map([
  [FormField.name, nameValidator],
  [FormField.email, emailValidator],
  [FormField.password, passwordValidator],
]);

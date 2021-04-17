import { FormField } from './FormField';

export interface AppFormData {
  [FormField.name]: string;
  [FormField.role]: string;
  [FormField.email]: string;
  [FormField.password]: string;
  [FormField.updates]: boolean;
  [FormField.communication]: boolean;
}

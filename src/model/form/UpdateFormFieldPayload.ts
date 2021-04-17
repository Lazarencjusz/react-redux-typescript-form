import { FormField } from './FormField';

export interface UpdateFormFieldPayload {
  field: FormField;
  value: string | boolean;
}

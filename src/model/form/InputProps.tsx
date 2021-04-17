import { FormField } from './FormField';
import { InputType } from './InputType';

export interface InputProps {
  type?: InputType;
  label: string;
  field: FormField;
  required?: boolean;
}

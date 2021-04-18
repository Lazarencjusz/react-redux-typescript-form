import { map } from 'lodash';
import { FormField } from '../../model/form/FormField';
import { InputType } from '../../model/form/InputType';
import { InputProps } from '../../model/form/InputProps';

export const userFormConfig: InputProps[] = [
  {
    field: FormField.name,
    label: FormField.name,
    required: true,
  },
  {
    field: FormField.role,
    label: FormField.role,
  },
  {
    field: FormField.email,
    label: FormField.email,
    required: true,
    type: InputType.email,
  },
  {
    field: FormField.password,
    label: FormField.password,
    required: true,
    type: InputType.password,
  },
];

export const userFormFields: FormField[] = map(userFormConfig, 'field');

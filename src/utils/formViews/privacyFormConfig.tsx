import { map } from 'lodash';
import { FormField } from '../../model/form/FormField';
import { InputType } from '../../model/form/InputType';
import { InputProps } from '../../model/form/InputProps';

export const privacyFormConfig: InputProps[] = [
  {
    field: FormField.updates,
    label: 'Receive updates about Tray.io product by email',
    type: InputType.checkbox,
  },
  {
    field: FormField.communication,
    label: 'Receive communication by email for other products created by the Tray.io team',
    type: InputType.checkbox,
  },
];

export const userViewFields: FormField[] = map(privacyFormConfig, 'field');

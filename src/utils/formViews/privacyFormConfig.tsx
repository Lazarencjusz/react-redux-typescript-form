import { map } from 'lodash';
import { FormField } from '../../model/form/FormField';
import { InputProps } from '../../model/form/InputProps';
import { InputType } from '../../model/form/InputType';
import { initialState as formInitialState } from '../../store/form/form.reducer';

export const privacyFormConfig: InputProps[] = [
  {
    field: FormField.updates,
    label: 'Receive updates about Tray.io product by email',
    type: InputType.checkbox,
    defaultValue: formInitialState.data.updates,
  },
  {
    field: FormField.communication,
    label: 'Receive communication by email for other products created by the Tray.io team',
    type: InputType.checkbox,
  },
];

export const userViewFields: FormField[] = map(privacyFormConfig, 'field');

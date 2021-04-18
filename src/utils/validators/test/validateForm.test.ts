import { ErrorMessage } from '../../../model/enum/ErrorMessage';
import { AppFormData } from '../../../model/form/AppFormData';
import { FormField } from '../../../model/form/FormField';
import { validateForm } from '../validateForm';

describe('validateForm', () => {
  test('should return validation result with errors when form is not valid', () => {
    //given
    const formData: AppFormData = {
      name: '',
      communication: false,
      email: '',
      password: '',
      role: '',
      updates: false,
    };
    // when
    const result = validateForm(formData);

    // then
    expect(result).toMatchObject({
      [FormField.email]: ErrorMessage.required,
      [FormField.name]: ErrorMessage.required,
      [FormField.password]: ErrorMessage.required,
    });
  });
  test('should return validation result without errors when form is valid', () => {
    //given
    const formData: AppFormData = {
      name: 'aaa',
      communication: false,
      email: 'aaa@aaa.pl',
      password: 'aaaaaaaaaA3',
      role: '',
      updates: false,
    };
    // when
    const result = validateForm(formData);

    // then
    expect(result).toMatchObject({});
  });
});

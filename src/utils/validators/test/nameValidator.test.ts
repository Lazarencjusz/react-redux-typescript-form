import { ErrorMessage } from '../../../model/enum/ErrorMessage';
import { AppFormData } from '../../../model/form/AppFormData';
import { nameValidator } from '../nameValidator';

const cases: [string, Partial<AppFormData>, string | null][] = [
  ['returns no message when is valid', { name: 'name' }, null],
  ['returns is required message', { name: '' }, ErrorMessage.required],
];

describe('nameValida', () => {
  test.each(cases)('%p', (_, value: Partial<AppFormData>, expectedResult: string | null) => {
    //given
    const formData: AppFormData = {
      name: '',
      communication: false,
      email: '',
      password: '',
      role: '',
      updates: false,
      ...value,
    };
    // when
    const result = nameValidator(formData);

    // then
    expect(result).toEqual(expectedResult);
  });
});

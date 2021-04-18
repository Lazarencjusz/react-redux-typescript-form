import { ErrorMessage } from '../../../model/enum/ErrorMessage';
import { AppFormData } from '../../../model/form/AppFormData';
import { emailValidator } from '../emailValidator';

const cases: [string, Partial<AppFormData>, string | null][] = [
  ['returns no message when is valid', { email: 'name@lastname.pl' }, null],
  ['returns is required message', { email: '' }, ErrorMessage.required],
  ['returns is required message', { email: 'asdas' }, ErrorMessage.email],
];

describe('emailValidator', () => {
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
    const result = emailValidator(formData);

    // then
    expect(result).toEqual(expectedResult);
  });
});

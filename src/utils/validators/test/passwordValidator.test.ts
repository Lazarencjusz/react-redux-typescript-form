import { replace } from 'lodash';
import { ErrorMessage } from '../../../model/enum/ErrorMessage';
import { AppFormData } from '../../../model/form/AppFormData';
import { passwordValidator } from '../passwordValidator';

const cases: [string, Partial<AppFormData>, string | null][] = [
  ['returns no message when is valid', { password: 'aaaAAAaaa9' }, null],
  ['returns is required message', { password: '' }, ErrorMessage.required],
  ['returns is required message', { password: 'aaa' }, replace(ErrorMessage.passwordLength, '%s%', '9')],
  ['returns is required message', { password: 'aaaaaaaaa' }, ErrorMessage.passwordUppercase],
  ['returns is required message', { password: 'aaaaaaaaaA' }, ErrorMessage.passwordNumber],
  ['returns is required message', { password: 'AAAAAAAAA' }, ErrorMessage.passwordLowercase],
];

describe('passwordValidator', () => {
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
    const result = passwordValidator(formData);

    // then
    expect(result).toEqual(expectedResult);
  });
});

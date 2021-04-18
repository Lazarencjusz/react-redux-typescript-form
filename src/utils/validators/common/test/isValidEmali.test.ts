import { isValidEmali } from '../isValidEmali';

const cases: [string, string | null, boolean][] = [
  ['returns true when valid email', 'abc@abc.pl', true],
  ['returns false when not valid email', '', false],
  ['returns false when not valid email', 'asdsa', false],
  ['returns false when not valid email', 'asdsa@', false],
  ['returns false when not valid email', 'asdsa@ssd', false],
  ['returns false when not valid email', 'asdsa@ssd.', false],
  ['returns false when not valid email', 'asdsa@ssd.a', false],
];

describe('isValidEmali', () => {
  test.each(cases)('%p', (_, value: string | null, expectedResult: boolean) => {
    //given

    // when
    const result = isValidEmali(value);

    // then
    expect(result).toEqual(expectedResult);
  });
});

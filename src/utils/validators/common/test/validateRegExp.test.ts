import { validateRegExp } from '../validateRegExp';

const cases: [string, RegExp, string, boolean][] = [
  ['returns true when walid regexp', /(?:[0-9])/, '5', true],
  ['returns false when not walid regexp', /(?:[0-9])/, 'a', false],
];

describe('validateRegExp', () => {
  test.each(cases)('%p', (_, regExp: RegExp, value: string, expectedResult: boolean) => {
    //given

    // when
    const result = validateRegExp(value, regExp);

    // then
    expect(result).toEqual(expectedResult);
  });
});

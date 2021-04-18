import { isDefined } from '../isDefined';

const cases: [string, string | null, boolean][] = [
  ['returns true when defined', 'abc', true],
  ['returns true when defined', '.', true],
  ['returns false when not defined', '', false],
  ['returns false when not defined', null, false],
];

describe('isDefined', () => {
  test.each(cases)('%p', (_, value: string | null, expectedResult: boolean) => {
    //given

    // when
    const result = isDefined(value);

    // then
    expect(result).toEqual(expectedResult);
  });
});

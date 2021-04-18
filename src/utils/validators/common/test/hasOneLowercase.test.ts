import { hasOneLowercase } from '../hasOneLowercase';

const cases: [string, string | null, boolean][] = [
  ['returns false when no lowercase', 'KDKDK**65', false],
  ['returns false when no lowercase', 'A', false],
  ['returns false when no lowercase', 'A9', false],
  ['returns false when no lowercase', '7', false],
  ['returns false when no lowercase', '7*', false],
  ['returns false when no lowercase', null, false],
  ['returns true when  lowercase', 'KdDKDK**65', true],
  ['returns true when  lowercase', 'a', true],
  ['returns true when  lowercase', 'Za', true],
  ['returns true when  lowercase', 'aZ', true],
  ['returns true when  lowercase', 'a9', true],
  ['returns true when  lowercase', '9a', true],
  ['returns true when  lowercase', '*a', true],
  ['returns true when  lowercase', 'a*', true],
];

describe('hasOneLowercase', () => {
  test.each(cases)('%p', (_, value: string | null, expectedResult: boolean) => {
    //given

    // when
    const result = hasOneLowercase(value);

    // then
    expect(result).toEqual(expectedResult);
  });
});

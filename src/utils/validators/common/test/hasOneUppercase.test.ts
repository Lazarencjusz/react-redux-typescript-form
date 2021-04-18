import { hasOneUppercase } from '../hasOneUppercase';

const cases: [string, string | null, boolean][] = [
  ['returns true when uppercase', 'KdDKDK**65', true],
  ['returns true when uppercase', 'A', true],
  ['returns true when uppercase', 'Za', true],
  ['returns true when uppercase', 'aZ', true],
  ['returns true when uppercase', 'A9', true],
  ['returns true when uppercase', '9A', true],
  ['returns true when uppercase', '*A', true],
  ['returns true when uppercase', 'A*', true],
  ['returns false when no uppercase', 'asdsad**65', false],
  ['returns false when no uppercase', 'a', false],
  ['returns false when no uppercase', 'a9', false],
  ['returns false when no uppercase', '9a', false],
  ['returns false when no uppercase', '*a', false],
  ['returns false when no uppercase', 'a*', false],
];

describe('hasOneUppercase', () => {
  test.each(cases)('%p', (_, value: string | null, expectedResult: boolean) => {
    //given

    // when
    const result = hasOneUppercase(value);

    // then
    expect(result).toEqual(expectedResult);
  });
});

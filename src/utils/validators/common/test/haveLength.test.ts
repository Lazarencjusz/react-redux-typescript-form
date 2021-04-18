import { hasLength } from '../hasLength';

const MIN_LENGTH = 3;

const cases: [string, string | null, boolean][] = [
  ['returns true when has minimum length', 'aaaaa', true],
  ['returns true when has minimum length', 'aaa', true],
  ['returns true when has minimum length', 'aaaa', true],
  ['returns true when has not minimum length', 'a', false],
  ['returns true when has not minimum length', 'aa', false],
  ['returns true when has not minimum length', null, false],
];

describe('haveLength', () => {
  test.each(cases)('%p', (_, value: string | null, expectedResult: boolean) => {
    //given

    // when
    const result = hasLength(value, MIN_LENGTH);

    // then
    expect(result).toEqual(expectedResult);
  });
});

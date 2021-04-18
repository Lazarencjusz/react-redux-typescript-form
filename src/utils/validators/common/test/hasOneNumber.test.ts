import { hasOneNumber } from '../hasOneNumber';

const cases: [string, string | null, boolean][] = [
  ['returns false when no number', 'a*A', false],
  ['returns false when no number', 'a*AasSFGd', false],
  ['returns false when no number', 'a', false],
  ['returns false when no number', 'aasdasd', false],
  ['returns false when no number', 'AJGHGHJG', false],
  ['returns true when number', '7', true],
  ['returns true when number', 'asd7', true],
  ['returns true when number', 'JH7', true],
  ['returns true when number', 'JKJHGjkkk7', true],
  ['returns true when number', 'JKJHGjkkk*(7', true],
];

describe('hasOneNumber', () => {
  test.each(cases)('%p', (_, value: string | null, expectedResult: boolean) => {
    //given

    // when
    const result = hasOneNumber(value);

    // then
    expect(result).toEqual(expectedResult);
  });
});

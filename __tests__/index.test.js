import sum from '../src/index.js';

test('sum', () => {
  expect(sum([1, 2, 3])).toEqual(6);
});
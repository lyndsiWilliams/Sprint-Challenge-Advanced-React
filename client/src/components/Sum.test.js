import { sum } from './Sum';

test("sum returns the sum of two numbers", () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 3)).toBe(5);
  expect(sum(3, 3)).toBe(6);
});
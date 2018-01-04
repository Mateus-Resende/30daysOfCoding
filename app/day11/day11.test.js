const Day11 = require('./day11');

test('tests the sample array with max hourglass value', () => {
  const input = [
    '1 1 1 0 0 0',
    '0 1 0 0 0 0',
    '1 1 1 0 0 0',
    '0 0 2 4 4 0',
    '0 0 0 2 0 0',
    '0 0 1 2 4 0',
  ];
  expect(Day11.run(input)).toBe(19);
});

test('test array 2 with max hourglass value', () => {
  const input = [
    '3 2 10 0 0 0',
    '0 11 0 0 0 0',
    '1 2 0 0 0 0',
    '0 0 2 4 4 0',
    '0 0 0 2 0 0',
    '0 0 1 2 4 0',
  ];
  expect(Day11.run(input)).toBe(29);
});

test('test array 3 with max hourglass value', () => {
  const input = [
    '-1 -1 0 -9 -2 -2',
    '-2 -1 -6 -8 -2 -5',
    '-1 -1 -1 -2 -3 -4',
    '-1 -9 -2 -4 -4 -5',
    '-7 -3 -3 -2 -9 -9',
    '-1 -3 -1 -2 -4 -5',
  ];
  expect(Day11.run(input)).toBe(-6);
});

test('test array 4 with max hourglass value', () => {
  const input = [
    '-1 1 -1 0 0 0',
    '0 -1 0 0 0 0',
    '-1 -1 -1 0 0 0',
    '0 -9 2 -4 -4 0',
    '-7 0 0 -2 0 0',
    '0 0 -1 -2 -4 0',
  ];
  expect(Day11.run(input)).toBe(0);
});

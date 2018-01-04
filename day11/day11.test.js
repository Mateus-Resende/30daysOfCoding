const Day11 = require('./day11');

test('tests the sample array with max hourglass value', () => {
  let input = "1 1 1 0 0 0\n\
  0 1 0 0 0 0\n\
  1 1 1 0 0 0\n\
  0 0 2 4 4 0\n\
  0 0 0 2 0 0\n\
  0 0 1 2 4 0";
  expect(Day11.run(input)).toBe(19);
});
// Find max Hourglass sum
/*
given the array:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

possible hourglasses:

1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0

highest value hourglass:
2 4 4
  2
1 2 4


max sum:
19
*/

class Day11 {
  run(input) {
    this.input = input;

    const arr = [];
    for (let arrI = 0; arrI < 6; arrI += 1) {
      arr[arrI] = input[arrI].split(' ');
      arr[arrI] = arr[arrI].map(Number);
    }

    let max;
    arr.forEach((arrI, i) => {
      arrI.forEach((value, j) => {
        const hourglass = Day11.getHourglass(arr, i, j);
        const sum = Day11.sumHourglass(hourglass);
        if (Day11.shouldUpdateMax(sum, max)) max = sum;
      });
    });
    return max;
  }

  static shouldUpdateMax(sum, max) {
    return typeof sum !== 'undefined' && (typeof max === 'undefined' || sum > max);
  }

  static sumHourglass(hourglassArray) {
    if (hourglassArray.length === 0) return undefined;
    return hourglassArray.reduce((a, b) => a + b, 0);
  }

  static getHourglass(arr, i, j) {
    if (i + 2 < 6 && j + 2 < 6) {
      return [
        arr[i][j], arr[i][j + 1], arr[i][j + 2],
        arr[i + 1][j + 1],
        arr[i + 2][j + 0], arr[i + 2][j + 1], arr[i + 2][j + 2],
      ];
    }
    return [];
  }
}

module.exports = new Day11();

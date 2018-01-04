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
  
  run(input)  {
    input = input.split("\n");

    let arr = [];
    for(let arr_i = 0; arr_i < 6; arr_i++){
      arr[arr_i] = input[arr_i].split(' ');
      arr[arr_i] = arr[arr_i].map(Number);
    }
    let max = 0;
  
    return max;
  }
  
  sumHourglass(arr, start) {
    let i = 0, j = 0;
    const hourglass = [[i, j], [i, j + 1], [i, j + 2], [i + 1, j + 1], [i + 2, j + 0], [i + 2, j + 1], [i + 2, j + 2]];
  
    let max = 0
    arr.forEach((arr_i, i) => {
      arr_i.forEach((initial, j) => {
        
      })
    });
  }
}

module.exports = new Day11();


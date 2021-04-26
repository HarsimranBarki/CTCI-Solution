/**  Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0. */

function zeroMatrix(matrix) {
  let row;
  let column;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        [row, column] = [i, j];
      }
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (row == i || column == j) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log(matrix);
}

const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];
zeroMatrix(matrix);

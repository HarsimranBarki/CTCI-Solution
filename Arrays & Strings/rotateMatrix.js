function rotateMatrix(matrix) {
  let rotated = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let nums = [];

    for (let j = matrix.length - 1; j >= 0; j--) {
      nums.push(matrix[j][i]);
    }

    rotated.push([...nums]);
  }

  return console.log(rotated);
}

let matrix = [
  [1, 2, 3, 4, "a"],
  [5, 6, 7, 8, "b"],
  [9, 10, 11, 12, "c"],
  [1, 2, 3, 4, "d"],
  [1, 2, 3, 4, "e"],
];
rotateMatrix(matrix);

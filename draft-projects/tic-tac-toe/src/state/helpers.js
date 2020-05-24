export const getCol = (matrix, col) => {
  let column = [];

  for (let line=0; line<matrix.length; line++) {
    column.push(matrix[line][col])
  }

  return column;
}

export const getDiagonal = (matrix, side) => {
  let diagonal = [];
  
  if (side === 'left') {
    for (let line=0; line<matrix.length; line++) {
      diagonal.push(matrix[line][line]);
    }
  }

  if (side === 'right') {
    let col = 2;
    for (let line=0; line<matrix.length; line++) {
      diagonal.push(matrix[line][col]);
      col--;
    }
  }

  return diagonal;
};
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const n = matrix.length;
    for (let i=0;i<n;i++) {
      for (let j=i;j<n;j++) {
        [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
      }
    }
    for (let i=0;i<n;i++) {
      for (let j=Math.floor(n/2);j<n;j++) {
        [matrix[i][j],matrix[i][n-j-1]]=[matrix[i][n-j-1],matrix[i][j]];
      }
    }
  };
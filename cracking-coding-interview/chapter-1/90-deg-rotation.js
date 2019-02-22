const sqrMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

function rotation90deg(matrix) {
    let n = matrix.length - 1;
    var rotatedMatrix = [];

    //creates an empty matrix of the same size of the original to be rotated
    for (let i = 0; i <= n; i++) {
        rotatedMatrix[i] = [];
    }

    //traverse the original matrix rotated 90 degrees into the new matrix
    for (let row = 0; row <= n; row++) {
        for (let column = 0; column <= n; column++) {
            rotatedMatrix[n - column][0 + row] = matrix[row][column];
        }
    }

    return rotatedMatrix;
}

console.log(rotation90deg(sqrMatrix));
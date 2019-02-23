const sqrMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

function replaceByZeroes(matrix) {
    let rows = matrix.length - 1;
    let cols = matrix[0].length - 1;

    let zeroPositions = [];

    for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
            if (matrix[row][col] === 0) {
                zeroPositions.push([row, col]);
            }
        }
    }

    for (let pos of zeroPositions) {
        for (let row = 0; row <= rows; row++) {
            matrix[row][pos[1]] = 0;
        }

        for (let col = 0; col <= cols; col++) {
            matrix[pos[0]][col] = 0;
        }
    }
}

replaceByZeroes(replaceByZeroes(sqrMatrix));

console.log(sqrMatrix);
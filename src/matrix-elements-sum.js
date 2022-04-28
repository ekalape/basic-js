const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let matrix2 = matrix.reverse();
    let result = 0;
    let zeroIndex = [];
    for (let a = 0; a < matrix2.length; a++) {
        let arr = matrix2[a];

        for (let i = 0; i < arr.length; i++) {
            if (zeroIndex.includes(i)) {
                result += arr[i];
            }

            if (arr[i] === 0) {
                zeroIndex.push(i);
            }
        }
    }
    if (zeroIndex.length === 0)
        result = matrix
        .reduce((acc, x) => acc.concat(x), [])
        .reduce((acc, x) => acc + x);
    return result;
}

module.exports = {
    getMatrixElementsSum,
};
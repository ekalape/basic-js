const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let result = [];
    let counter = 0;
    for (let y = 0; y < matrix.length; y++) {
        let arr = [];
        for (x = 0; x < matrix[y].length; x++) {
            if (x + 1 < matrix[y].length && y + 1 < matrix.length) {
                if (matrix[y + 1][x + 1] === true) counter++;
            }
            if (x + 1 < matrix[y].length) {
                if (matrix[y][x + 1] === true) counter++;
            }
            if (y + 1 < matrix.length) {
                if (matrix[y + 1][x] === true) counter++;
            }

            if (x - 1 >= 0 && y - 1 >= 0) {
                if (matrix[y - 1][x - 1] === true) counter++;
            }

            if (x - 1 >= 0) {
                if (matrix[y][x - 1] === true) counter++;
                if (y + 1 < matrix.length) {
                    if (matrix[y + 1][x - 1] === true) counter++;
                }
            }
            if (y - 1 >= 0) {
                if (matrix[y - 1][x] === true) counter++;
                if (x + 1 < matrix[y].length) {
                    if (matrix[y - 1][x + 1] === true) counter++;
                }
            }

            arr[x] = counter;
            counter = 0;
        }
        result[y] = arr;
    }

    return result;
}

module.exports = {
    minesweeper,
};
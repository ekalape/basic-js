const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let clean = arr.filter((x) => x !== -1);
    clean.sort((a, b) => a - b);
    let index = 0;
    let result = [];
    arr.forEach((x) => {
        if (x === -1) {
            result.push(-1);
        } else {
            result.push(clean[index]);
            index++;
        }
    });
    return result;
}

module.exports = {
    sortByHeight,
};
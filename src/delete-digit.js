const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let str = n + "";
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        let temp = Number(str.substring(0, i) + str.substring(i + 1));
        if (temp > num) num = temp;
    }
    return num;
}

module.exports = {
    deleteDigit,
};
const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let letters = "";
    let s = str[0];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === s) {
            counter++;
        } else {
            if (counter === 1) {
                letters += s;
            } else {
                letters += counter + s;
            }
            s = str[i];
            counter = 1;
        }
        if (i === str.length - 1) {
            if (counter === 1) {
                letters += s;
            } else {
                letters += counter + s;
            }
        }
    }

    return letters;
}

module.exports = {
    encodeLine,
};
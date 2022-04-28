const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let arr = [];
    let pat = /.+\(([0-9]+)\)$/;
    names.forEach((x) => {
        if (arr.includes(x)) {
            if (arr.includes(x + "(1)") || arr.includes(x + "(2)")) {
                let counter = (x + "(1)").match(pat);
                if (counter != null) {
                    let num = Number(counter[1]);
                    arr.push(`${x}(${num + 1})`);
                }
            } else {
                arr.push(`${x}(1)`);
            }
        } else {
            arr.push(x);
        }
    });
    return arr;
}

module.exports = {
    renameFiles,
};
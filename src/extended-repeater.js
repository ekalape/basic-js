const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let add = [];
    add.length = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let addstr = options.addition;
    if (options.addition === undefined) addstr = "";
    add.fill(addstr + "");
    add = add.join(options.additionSeparator ? options.additionSeparator : "|");

    let result = [];
    result.length = options.repeatTimes ? options.repeatTimes : 1;
    result.fill(str + add);
    result = result.join(options.separator ? options.separator : "+");

    return result;
}

module.exports = {
    repeater,
};
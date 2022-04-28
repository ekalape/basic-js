const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let result = {};

    domains.forEach((x) => {
        if (x.length == 0) {
            return [];
        }
        let arr = x.split(".").reverse();
        /*    console.log(arr); */

        result["." + arr[0]] === undefined || result["." + arr[0]] === null ?
            (result["." + arr[0]] = 1) :
            (result["." + arr[0]] += 1);
        if (arr.length === 1) {
            return;
        }
        result["." + arr[0] + "." + arr[1]] === undefined ||
            result["." + arr[0] + "." + arr[1]] === null ?
            (result["." + arr[0] + "." + arr[1]] = 1) :
            (result["." + arr[0] + "." + arr[1]] += 1);
        if (arr.length === 2) {
            return;
        }
        result["." + arr[0] + "." + arr[1] + "." + arr[2]] === undefined ||
            result["." + arr[0] + "." + arr[1] + "." + arr[2]] === null ?
            (result["." + arr[0] + "." + arr[1] + "." + arr[2]] = 1) :
            (result["." + arr[0] + "." + arr[1] + "." + arr[2]] += 1);
    });

    return result;
}

module.exports = {
    getDNSStats,
};
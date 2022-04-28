const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let pat = /(.+)\@([a-z0-9\-]+\.[a-z]{1,3})$/;
    return email.match(pat)[2];
}

module.exports = {
    getEmailDomain,
};
const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    isDirect = true;
    alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    constructor(isDirect) {
        if (isDirect === false) this.isDirect = isDirect;
    }

    encrypt(message, keyWord) {
        if (!message || !keyWord) throw new Error("Incorrect arguments!");
        message = message.toUpperCase();
        keyWord = keyWord.toUpperCase();
        let k = 0;
        let result = "";
        console.log(`message = ${message}, keyWord = ${keyWord}`);
        for (let i = 0; i < message.length; i++) {
            if (!this.alph.includes(message[i])) {
                result += message[i];
                continue;
            } else {
                /*  console.log(`i = ${i}, message[i] = ${message[i]}, message.charCodeAt(i) = ${message.charCodeAt(i)}`);                
                                console.log(`k = ${k}, keyWord[k] = ${keyWord[k]}, keyWord.charCodeAt(k) = ${keyWord.charCodeAt(k)}` ); */
                let str = String.fromCharCode(
                    ((message.charCodeAt(i) + keyWord.charCodeAt(k)) % 26) + 65
                );
                result += str;
                k++;
                if (k === keyWord.length) k = 0;
            }
        }
        return this.isDirect ? result : result.split("").reverse().join("");
    }
    decrypt(message, keyWord) {
        if (!message || !keyWord) throw new Error("Incorrect arguments!");
        keyWord = keyWord.toUpperCase();
        message = message.toUpperCase();
        let result = "";
        let k = 0;
        for (let i = 0; i < message.length; i++) {
            if (!this.alph.includes(message[i])) {
                result += message[i];
                continue;
            } else {
                let str = String.fromCharCode(
                    ((message.charCodeAt(i) - keyWord.charCodeAt(k) + 26) % 26) + 65
                );
                result += str;
                k++;
                if (k === keyWord.length) k = 0;
            }
        }

        return this.isDirect ? result : result.split("").reverse().join("");
    }
}

module.exports = {
    VigenereCipheringMachine,
};
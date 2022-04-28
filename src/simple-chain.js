const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (
            typeof position !== "number" ||
            position >= this.chain.length ||
            Math.round(position) !== position ||
            position <= 0
        ) {
            this.chain = [];
            throw Error(`You can't remove incorrect link!`);
        } else {
            this.chain = this.chain.filter((x, index) => {
                if (index !== position - 1) return x;
            });
            return this;
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = this.chain.join("~~");
        this.chain = [];
        return result;
    },
};

module.exports = {
    chainMaker,
};
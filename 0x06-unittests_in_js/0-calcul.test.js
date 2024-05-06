const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('round of a', () => {
        assert.equal(calculateNumber(2.0, 0), 2);
        assert.equal(calculateNumber(2.1, 0), 2);
        assert.equal(calculateNumber(2.9, 0), 3);
    });

    it('round of b', () => {
        assert.equal(calculateNumber(0, 2.0), 2);
        assert.equal(calculateNumber(0, 2.1), 2);
        assert.equal(calculateNumber(0, 2.9), 3);
    });

    it('round of a and b', () => {
        assert.equal(calculateNumber(2.1, 2.1), 4);
        assert.equal(calculateNumber(2.5, 2.5), 6);
        assert.equal(calculateNumber(2.4, 2.5), 5);
        assert.equal(calculateNumber(2.9, 2.9), 6);
    });
})

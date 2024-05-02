// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the correct sum when type is SUM', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the correct difference when type is SUBTRACT', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE', function() {
        it('should return the correct division result when type is DIVIDE and b is not 0', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when type is DIVIDE and b is 0', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});

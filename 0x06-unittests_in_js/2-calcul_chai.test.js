// 2-calcul_chai.test.js
import { expect } from 'chai';
import calculateNumber from './2-calcul_chai';

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the correct sum when type is SUM', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the correct difference when type is SUBTRACT', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE', function() {
        it('should return the correct division result when type is DIVIDE and b is not 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when type is DIVIDE and b is 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});

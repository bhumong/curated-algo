const { Decimal } = require('../src/decimal')
const assert = require('assert');

describe('decimal.js', function () {
    it('decimal fraction point', function () {
        const decimal = new Decimal('12.1')

        assert.equal(decimal.rational, '12')
        assert.equal(decimal.decimal, '1')
    })

    it('decimal normalize', function () {
        const decimal = new Decimal('12.1')
        const decimalOther = new Decimal('23.003')
        decimal.normalize(decimalOther)

        assert.equal(decimal.decimal, '100')
        assert.equal(decimalOther.decimal, '003')
    })

    
    it('decimal normalize', function () {
        const decimal = new Decimal('12.1')
        const decimalOther = new Decimal('23.9')
        const result = decimal.add(decimalOther)
        console.log({decimal, decimalOther, result})
    })
})
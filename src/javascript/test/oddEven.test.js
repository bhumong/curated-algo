const assert = require('assert');

const { isEven, isOdd } = require('../oddEven')

describe('oddEvent.js', function () {
    it('2 should be even', function () {
        assert.equal(isEven(2), true)
        assert.equal(isOdd(2), false)

    })
    it('3 should be odd', function () {
        assert.equal(isEven(3), false)
        assert.equal(isOdd(3), true)
    })
})
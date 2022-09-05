const assert = require('assert');

const { generateCharacter } = require('../generate')
describe('generate.js', function () {
    it('generateCharacter should be 9', function () {
        const list = ['a', 'b', 'c']
        const result = generateCharacter(list, 2)
        assert.equal(result.length, 9)
    })
})
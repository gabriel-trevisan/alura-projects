const readFile = require('../index')

describe('readFile::', () => {
    it('must be a function', () => {
        expect(typeof readFile).toBe('function');
    })
})
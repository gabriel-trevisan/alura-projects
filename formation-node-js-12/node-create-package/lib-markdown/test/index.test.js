const readFile = require('../index')

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('readFile::', () => {
    it('must be a function', () => {
        expect(typeof readFile).toBe('function');
    })
    it('must return array with results::', async () => {
        const result = await readFile('/home/gabriel/projects/alura-projects/formation-node-js-12/node-create-package/lib-markdown/test/files/text.md')
        expect(result).toEqual(arrayResult);
    })
    it('must return message "Links not found"::', async () => {
        const result = await readFile('/home/gabriel/projects/alura-projects/formation-node-js-12/node-create-package/lib-markdown/test/files/text_without_links.md')
        expect(result).toBe('Links not found')
    })
})
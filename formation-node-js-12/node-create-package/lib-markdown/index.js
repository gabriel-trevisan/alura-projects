const chalk = require('chalk')
const fs = require('fs')

function handleError(error) {
    throw new Error(chalk.red(error, 'Path invalid!'));
}

async function readFile(path) {
    try {
        const encoding = 'utf-8'
        const text = await fs.promises.readFile(path, encoding)
        console.log(chalk.green(text))
    } catch(error){
        handleError(erro)
    }
}

readFile('./files/text.md');
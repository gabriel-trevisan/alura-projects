const chalk = require('chalk')
const fs = require('fs')

function handleError(error) {
    throw new Error(chalk.red(error, 'Path invalid!'));
}

function readFile(path) {
    const encoding = 'utf-8'
    fs.promises
        .readFile(path, encoding)
            .then(text => console.log(chalk.green(text)))
            .catch(erro => handleError(erro))
}

readFile('./files/text.md');
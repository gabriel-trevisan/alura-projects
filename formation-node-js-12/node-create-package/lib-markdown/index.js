const chalk = require('chalk')
const fs = require('fs')

function handleError(error) {
    throw new Error(error);
}

function readFile(path) {
    const encoding = 'utf-8'
    fs.readFile(path, encoding, (erro, data) => {
        if(erro){
            handleError(erro);
        }
        console.log(chalk.green(data));
    })
}

readFile('./files/text.md');
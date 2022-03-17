const chalk = require('chalk')
const fs = require('fs')

function handleError(error) {
    throw new Error(chalk.red(error, 'Path invalid!'));
}

async function readFile(path) {
    try {
        const encoding = 'utf-8'
        const text = await fs.promises.readFile(path, encoding)
        console.log(chalk.green(getLinks(text)))
    } catch(error){
        handleError(erro)
    }
}

function getLinks(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const links = text.match(regex);
    return links;
}

readFile('./files/text.md');
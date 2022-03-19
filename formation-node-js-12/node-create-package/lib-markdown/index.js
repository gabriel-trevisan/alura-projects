const chalk = require('chalk')
const fs = require('fs')

function handleError(error) {
    throw new Error(chalk.red(error, 'Path invalid!'));
}

async function readFile(path) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(path, encoding);
        return getLinks(text);
    } catch(error){
        handleError(erro);
    }
}

function getLinks(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayLinks = [];
    let temp;

    while((temp = regex.exec(text)) !== null){
        arrayLinks.push({[temp[1]]: temp[2]})
    }
    return arrayLinks.length === 0 ? 'Links not found' : arrayLinks;
}

module.exports = readFile;
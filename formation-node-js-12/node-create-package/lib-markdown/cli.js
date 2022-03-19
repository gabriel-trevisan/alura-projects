const chalk = require('chalk')
const readFile = require('./index')

const path = process.argv;

async function processText(path){
    const result = await readFile(path[2]);
    console.log(chalk.yellow('Links:'), result);
}

processText(path);
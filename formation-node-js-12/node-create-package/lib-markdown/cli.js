const chalk = require('chalk')
const readFile = require('./index')

const path = process.argv;

async function processText(path){
    const result = await readFile(path[2]);
    if(path[3] === "validate") {
        console.log(chalk.yellow('Validated links:'), result);
    } else {
        console.log(chalk.yellow('Links:'), result);
    }
}

processText(path);
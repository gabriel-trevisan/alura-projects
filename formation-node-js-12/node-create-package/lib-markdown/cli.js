const chalk = require('chalk')
const readFile = require('./index')
const validateURLs = require('./http-validation')

const path = process.argv;

async function processText(path){
    const result = await readFile(path[2]);
    if(path[3] === "validate") {
        console.log(chalk.yellow('Validated links:'), await validateURLs(result));
    } else {
        console.log(chalk.yellow('Links:'), result);
    }
}

processText(path);
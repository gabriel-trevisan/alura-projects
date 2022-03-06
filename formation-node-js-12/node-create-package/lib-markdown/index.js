const chalk = require('chalk')
const fs = require('fs')

function readFile(path) {
    const encoding = 'utf-8'
    fs.readFile(path, encoding, (_, data) => {
        console.log(chalk.green(data));
    })
}

readFile('./files/text.md');
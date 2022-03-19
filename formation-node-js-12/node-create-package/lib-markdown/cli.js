const readFile = require('./index');

const path = process.argv;

console.log(readFile(path[2]));
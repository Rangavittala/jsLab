// const validator = require('validator');
const data = require("./notes");
const chalk = require("chalk");
const yargs = require('yargs');

const msg = data();
console.log(msg);
// console.log(validator.isEmail('ranga@ranga.com'));
// console.log(validator.isURL('http://google.com'));
console.log(chalk.bold.italic.inverse.green("Success!"));

const log = console.log;

// console.log(process.argv[2]);
// console.log(process.argv[3]);

// log(chalk.blue('Hello') + 'World' + chalk.red('!'));
// log(chalk.blue.inverse.bgRed.bold('Hello world!'));
// console.log(process.argv);

// customize yargs version
yargs.version('1.1.0');
console.log(yargs.argv);




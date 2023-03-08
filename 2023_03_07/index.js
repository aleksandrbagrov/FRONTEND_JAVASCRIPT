import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(process.stdout.columns);
console.log(process.stdout.rows);

const columns = process.stdout.columns;
const rows = process.stdout.rows;
const colorRows = Math.floor(rows / 3);
const simbol = '*';
const simbol1 = ' ';
const row = simbol.repeat(columns * colorRows);
const row1 = simbol1.repeat(columns * colorRows);
console.log(chalk.rgb(255, 255, 0)(row));
console.log(chalk.green(row));
console.log(chalk.red(row));

console.log(chalk.yellow.bgRgb(255, 255, 0)(row1));
console.log(chalk.green.bgGreen(row1));
console.log(chalk.red.bgRed(row1));

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rowPrinting = () => {
    const rowArr = [];
    for (let i = 0; i < columns; i += 1) {
      if (i % 2 === 0) rowArr.push(rand(0, 65535));
      rowArr.push(8192);
    }
    return console.log(chalk.bgBlack.green(String.fromCharCode(...rowArr)));
};

setInterval(() => rowPrinting(), 500);


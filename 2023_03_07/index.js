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

const rowGeneration = () => {
  const rowArr = [];
  for (let i = 0; i < columns; i += 1) {
    rowArr.push([rand(0, 1), rand(5, 10), rand(41, 122)]);
  }
  return rowArr;
}

const modifyStringArr = () => {
  const modifyFirstRowArr = firstRowArr.map(([view, length,], i) => {
    const newView = length === 0 ? rand(0, 10) : view;
    const newLength = length === 0 ? rand(3, 9) : length - 1;
    const newSimbol = newView ? 8192 : rand(41, 122); // : 8192;
    firstRowArr[i] = [newView, newLength, newSimbol];
    return [newView, newLength, newSimbol];
  });
  // console.log('Modified arr');
  // console.log(modifyFirstRowArr);
  // const modifyFirstRowArrString = modifyFirstRowArr.map(([,, simbol]) => simbol);
  const modifyFirstRowArrString = modifyFirstRowArr.map(([, length, simbol]) => {
    return simbol === 8192 ? ' ' : `${length}`
  })
    .join('');
  // console.log(modifyFirstRowArrString);
  // console.log(chalk.bgGreen.yellow.dim(String.fromCharCode(...modifyFirstRowArrString)));
  console.log(chalk.bgGreen.yellow.dim(modifyFirstRowArrString));
};

const firstRowArr = rowGeneration();
// console.log(firstRowArr);
// const firstRowArrString = firstRowArr.map(([,, simbol]) => simbol);
// console.log(firstRowArrString);
console.log('This is a first row');
modifyStringArr();
// console.log(chalk.bgGreen.yellow(String.fromCharCode(...firstRowArrString)));


setInterval(() => modifyStringArr(), 300);


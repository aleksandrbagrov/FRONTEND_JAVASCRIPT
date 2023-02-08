// Task #1

document.write('<h1>Task #1</h1>');
document.write('<h2>-----------------</h2>');
document.write('<br><br>');
const stringLength = 400;
const maxRowLength = 50;
const fillingSimbol = '*';
const rowQuantity = Math.floor(stringLength / maxRowLength);
const commonRow = fillingSimbol.repeat(Math.min(stringLength, maxRowLength));
const lastRow = fillingSimbol.repeat(stringLength % maxRowLength);
let i = 0;
while (i < rowQuantity) {
    document.write(`<h1>${commonRow}</h1>`);
    i++;
}
document.write(`<h1>${lastRow}</h1>`);
document.write(`<br><br>`);


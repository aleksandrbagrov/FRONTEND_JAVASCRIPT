// import rand from "./rand.js";

const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h1>Task #2</h1>');
document.write('<h2>-----------------</h2>');
const stringLength1 = 300;
const maxRowLength1 = 10;
const edge = 150;
const rowsQuantity = Math.floor(stringLength1 / maxRowLength1);
const lastRowLength = stringLength1 % maxRowLength1;
let rezString = '<table class="fs-5 my-5"><tbody>';
let k = 0;
let j = 0;
let counter = 0;
let style = 'style="width: 50px;"';
while (k <= rowsQuantity) {
    rezString += '<tr style="height: 30px;">'
    while (j < maxRowLength1) {
        const randInt = rand(0, 300);
        if (randInt > 275) style = style.slice(0, style.lastIndexOf('"')) + ' color: red;"';
        if (randInt > edge) counter++;
        rezString += `<td ${style}>${randInt}</td>`;
        style = 'style="width: 50px;"';
        j++;
    }
    j = 0;
    rezString += '</tr>';
    k++;
}
if (lastRowLength !== 0) {
    rezString += '<tr style="height: 30px;">'
    while (j < lastRowLength) {
        const randInt = rand(0, 300);
        if (randInt > 275) style = style.slice(0, style.lastIndexOf('"')) + ' color: red;"';
        if (randInt > 150) counter++;
        rezString += `<td ${style}>${randInt}</td>`;
        style = 'style="width: 50px;"';
        j++;
    }
    rezString += '</tr>';
}
rezString += '</tbody></table><br>';
document.write(rezString);
document.write(`<p class="bg-info mb-5">In a list of ${stringLength1} rundom numbers, the number of numbers greater than ${edge} ammount ${counter} or ${counter / stringLength1 * 100}%.</p>`);

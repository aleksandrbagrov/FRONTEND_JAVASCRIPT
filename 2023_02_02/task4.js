//Task #4

document.write('<h1>Task #4</h1>');
document.write('<h2 class="mb-5">-----------------</h2>');
const squareSideLength = 100;
const fillingSimbol1 = '*';
const row = fillingSimbol1.repeat(squareSideLength);
let n = 0;
document.write(`<div class="col-9 bg-success-subtle justify-content-center d-flex py-5">`);
document.write(`<div style="width: 670px; margin: 0; text-align: justify;">`)
while (n < squareSideLength) {
    document.write(`<p style="margin: 0; line-height: 7px;">${row}</p>`);
    n++;
}
document.write(`</div>`);
document.write(`<div>`);
document.write(`<br><br>`);

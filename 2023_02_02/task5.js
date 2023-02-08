//Task #5

const del = (x) => { return x * x; };

const squareSideLength = 100;
const fillingSimbol1 = '*';
const row = fillingSimbol1.repeat(squareSideLength);
let n = 0;
while (n < squareSideLength) {
    document.write(`<p style="margin: 0; line-height: 7px; width: 100%;">${row}</p>`);
    setTimeout(del, 1000, 2);
    n++;
};
// clearTimeout(timerId);

// let timerId = setTimeout(function tick() {
//     document.write(`<p style="margin: 0; line-height: 7px;">${row}</p>`);
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);
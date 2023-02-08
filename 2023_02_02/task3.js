//Task #3

document.write('<h1>Task #3</h1>');
document.write('<h2 class="mb-5">-----------------</h2>');
const listLength = 3000;
const divider = 77;
let m = 1;
let rezString1 = '';
while (m <= listLength) {
    const necessaryNumber = m % divider;
    if (necessaryNumber === 0) rezString1 += `${m},`;
    m++;
}
rezString1 = rezString1 !== '' ? rezString1.slice(0, rezString1.length - 1) : rezString1;
document.write(`<p class="bg-info mb-5">${rezString1}</p>`);


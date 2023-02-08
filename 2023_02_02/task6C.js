const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const heads = "H";
const tails = "S";
let coinToss = 0;
let i = 0;
let rezStringHeading = '';
let rezStringResult = '';
let rezString = '<table class="table table-success table-striped-columns table-bordered">';
rezString += '<tr">';
let counter = 0;
const commonTdTag = `<td scope="row">`;
const highlitedTdTag = `<td class="text-danger" scope="row">`;
do {
    coinToss = rand(0, 1);
    if (coinToss === 1) counter = 0;
    rezStringHeading += `<th scope="col">${i + 1} try</th>`;
    rezStringResult += `${coinToss === 1 ? commonTdTag : highlitedTdTag}${coinToss === 1 ? tails : heads}</td>`;
    i++;
    if (coinToss === 0) counter++;
} while (counter !== 3);
rezString += `${rezStringHeading}</tr > <tr>${rezStringResult}</tr>`;
rezString += `</table > `;
document.write(rezString);

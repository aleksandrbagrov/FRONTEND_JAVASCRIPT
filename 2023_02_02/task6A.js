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
do {
    coinToss = rand(0, 1);
        rezStringHeading += `<th scope="col">${i + 1} try</th>`;
        rezStringResult += `<td  scope="row">${coinToss === 1 ? tails : heads}</td>`;
        i++;
} while(coinToss !== 0);
rezString += `${rezStringHeading}</tr><tr>${rezStringResult}</tr>`;
rezString += `</table>`;
document.write(rezString);


const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const player1 = "Kazys";
const player2 = "Petras";
let score1 = 0;
let score2 = 0;
let i = 0;
let rezStringHeading = '<th>Players Name</th>';

let rezStringResult1 = `<td scope="row">${player1}</td>`;
let rezStringResult2 = `<td scope="row">${player2}</td>`;
let currentPlayResult1 = 0;
let currentPlayResult2 = 0;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let rezString = '<table class="table table-success table-striped-columns table-bordered">';
rezString += '<tr>';
// const commonTdTag = `<td scope="row">`;
// const highlitedTdTag = `<td class="text-danger" scope="row">`;
do {
    currentPlayResult1 = rand(10, 20);
    currentPlayResult2 = rand(5, 25);
    totalScorePlayer1 += currentPlayResult1;
    totalScorePlayer2 += currentPlayResult2;
    rezStringHeading += `<th>${i + 1} game</th><th>Total score of ${i + 1} games</th>`;
    rezStringResult1 += `<td>${currentPlayResult1}</td><td>${totalScorePlayer1}</td>`;
    rezStringResult2 += `<td>${currentPlayResult2}</td><td>${totalScorePlayer2}</td>`;
    rezString += `${rezStringHeading}</tr ><tr>${rezStringResult1}</tr><tr>${rezStringResult2}</tr>`;
    rezString += `</table>`;
    document.write(rezString);
    i++;
} while (totalScorePlayer1 < 222 || totalScorePlayer2 < 222);



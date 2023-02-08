const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const player1 = "Kazys";
const player2 = "Petras";
let i = 0;
let rezStringHeadingStart = `<th>Player Name</th>`;
let rezStringHeadingCurrent = `<th>G${i + 1}</th>`;
let rezSringHeadingRest = `<th>Last Game Vinner</th><th>All Games Vinner</th>`;
let currentHeading = rezStringHeadingStart;
let curresntRezString1 = `<td scope = "row"> ${player1}</td> `;
let curresntRezString2 = `<td scope = "row"> ${player2}</td> `;
let currentTableString = '<table class="table table-success table-striped-columns table-bordered"><tr>';
let rezStringHeading = '';
let rezStringResult1 = '';
let rezStringResult2 = '';
let rezString = '';
let currentPlayResult1 = 0;
let currentPlayResult2 = 0;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let vinnerOfCurrentGame1 = '';
let vinnerOfCurrentGame2 = '';
let vinnerOfAllGame1 = '';
let vinnerOfAllGame2 = '';
do {
    rezStringHeading = currentHeading;
    rezStringResult1 = curresntRezString1;
    rezStringResult2 = curresntRezString2;
    currentPlayResult1 = rand(10, 20);
    currentPlayResult2 = rand(5, 25);
    totalScorePlayer1 += currentPlayResult1;
    totalScorePlayer2 += currentPlayResult2;
    currentHeading = `${rezStringHeading}<td>G${i + 1}</td>`;
    curresntRezString1 = `${rezStringResult1}<td>${currentPlayResult1}</td>`;
    curresntRezString2 = `${rezStringResult2}<td>${currentPlayResult2}</td>`;
    if (currentPlayResult1 > currentPlayResult2) {
        vinnerOfCurrentGame1 = `${player1} won the last game!`;
        vinnerOfCurrentGame2 = '';
    } else if (currentPlayResult1 < currentPlayResult2) {
        vinnerOfCurrentGame1 = '';
        vinnerOfCurrentGame2 = `${player2} won the last game!`;
    } else {
        vinnerOfCurrentGame1 = `The game ended in a draw`
        vinnerOfCurrentGame2 = `The game ended in a draw`
    }

    if (totalScorePlayer1 > totalScorePlayer2) {
        if (totalScorePlayer1 < 222) {
            vinnerOfAllGame1 = `${player1} is leading in tornament!`;
            vinnerOfAllGame2 = '';
        } else {
            vinnerOfAllGame1 = `${player1} won the tournament!!!`;
            vinnerOfAllGame2 = '';
        }
    } else if (totalScorePlayer1 < totalScorePlayer2) {
        if (totalScorePlayer2 < 222) {
        vinnerOfAllGame1 = '';
        vinnerOfAllGame2 = `${player2} is leading in tornament!`;
        } else {
            vinnerOfAllGame1 = '';
            vinnerOfAllGame2 = `${player2} won the tournament!!!`;
        }
    } else {
        vinnerOfAllGame1 = 'Draw!';
        vinnerOfAllGame2 = `Draw!`;
    }

    rezStringHeading = `${currentHeading}<th>Total score after ${i + 1} game(s)</th >${rezSringHeadingRest}`;
    rezStringResult1 = `${curresntRezString1}<td>${totalScorePlayer1}</td><td>${vinnerOfCurrentGame1}</td><td ${(totalScorePlayer1 >= 222) && (totalScorePlayer1 >= totalScorePlayer2) ? `style="background: blue; color: red;"`: ''}>${vinnerOfAllGame1}</td>`;
    rezStringResult2 = `${curresntRezString2}<td>${totalScorePlayer2}</td><td>${vinnerOfCurrentGame2}</td><td ${(totalScorePlayer2 >= 222) && (totalScorePlayer2 >= totalScorePlayer1) ? `style="background: blue; color: red;"`: ''}>${vinnerOfAllGame2}</td>`;
    rezString = `${currentTableString}${rezStringHeading}</tr ><tr>${rezStringResult1}</tr><tr>${rezStringResult2}</tr></table>`;
    document.write(rezString);
    i++;
} while (totalScorePlayer1 < 222 && totalScorePlayer2 < 222);



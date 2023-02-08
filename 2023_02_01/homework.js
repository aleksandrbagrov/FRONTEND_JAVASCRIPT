
const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Task1
console.log('Task #1');
console.log('----------');
const rand1 = rand(0, 4);
const rand2 = rand(0, 4);
const min = Math.min(rand1, rand2);
const max = Math.max(rand1, rand2);
console.log(`Pirmas skaičius gavosi: ${rand1}`);
console.log(`Antras skaičius gavosi: ${rand2}`);
if (min !== 0) {
    console.log(`Atsakymas: ${(max / min).toFixed(2)}`);
} else {
    console.log(`Mažesnis skaičius ligus 0, o dalinti i 0 negalima`);
}
console.log('');

// Task2
console.log('Task #2');
console.log('----------');
const rand3 = rand(0, 25);
const rand4 = rand(0, 25);
const rand5 = rand(0, 25);
const min1 = Math.min(rand3, rand4, rand5);
const max1 = Math.max(rand3, rand4, rand5);
console.log(`Pirmas skaičius gavosi: ${rand3}`);
console.log(`Antras skaičius gavosi: ${rand4}`);
console.log(`Trečias skaičius gavosi: ${rand5}`);
if (rand3 !== min1 && rand3 !== max1) {
    console.log(`Vidurine reišmę yra: ${rand3}`);
}
if (rand4 !== min1 && rand4 !== max1) {
    console.log(`Vidurine reišmę yra: ${rand4}`);
}
if (rand5 !== min1 && rand5 !== max1) {
    console.log(`Vidurine reišmę yra: ${rand5}`);
}
console.log('');

// Task3
console.log('Task #3');
console.log('----------');
const nameOfActor = 'Juozas';
const surnameOfActor = 'Budraitis'
const initials = `${nameOfActor[0]+surnameOfActor[0]}`;
console.log(`My favorite actor's name is ${nameOfActor} ${surnameOfActor}`);
console.log(`His initial are ${initials}`);
console.log('');

// Task4
console.log('Task #4');
console.log('----------');
const lithuanianAlphabet = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzž';
let rezString = '';
for (i = 0; i <= 2; i += 1) {
    const random = rand(0, 31);
    rezString += lithuanianAlphabet[random];
}
console.log(`Atsitiktinai sugenerota 3 raidžiu letuviškos abeceles seka: ${rezString}`);

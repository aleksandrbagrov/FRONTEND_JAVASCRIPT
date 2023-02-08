// Task1
console.log('Task #1');
console.log('----------');
const actor1 = 'Jouzas Budraitis';
const actor2 = 'Donatas Banionis';
if (actor1.length < actor2.length) {
    console.log(actor1)
} else if (actor1.length > actor2.length) {
    console.log(actor2);
} else {
    console.log(`Full names of ${actor1} & ${actor2} have the same length.`);
}
console.log('');

// Task2
console.log('Task #2');
console.log('----------');
const myName = 'Kostas';
const mySurname = 'Maldeikis';
const bornYear = 1969;
const currentYear = 2023;
console.log(`Aš esu ${myName} ${mySurname}. Man yra ${currentYear - bornYear} metai(ų).`);
console.log('');

// Task3
console.log('Task #3');
console.log('----------');
const nameOfActor = 'Juozas';
const surnameOfActor = 'Budraitis'
const nl = nameOfActor.length;
const sl = surnameOfActor.length;
console.log(nameOfActor[nl - 3] + nameOfActor[nl - 2] + nameOfActor[nl - 1] + surnameOfActor[sl - 3] + surnameOfActor[sl - 2] + surnameOfActor[sl - 1]);
console.log(nameOfActor.slice(nl - 3) + surnameOfActor.slice(sl - 3));
console.log('');

// Task4
console.log('Task #4');
console.log('----------');
const string = 'Once upon a time in hollywood.';
const regexp = /O/ig;
console.log(string.replaceAll(regexp, '*'));
console.log('');


// Task5
console.log('Task #5');
console.log('----------');

const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const rand1 = rand(0, 2);
const rand2 = rand(0, 2);
const rand3 = rand(0, 2);
const rand4 = rand(0, 2);

let count0 = 0;
let count1 = 0;
let count2 = 0;

if (rand1 === 0) {
    count0++;
} else if (rand1 === 1) {
    count1++;
} else {
    count2++;
}

if (rand2 === 0) {
    count0++;
} else if (rand2 === 1) {
    count1++;
} else {
    count2++;
}

if (rand3 === 0) {
    count0++;
} else if (rand3 === 1) {
    count1++;
} else {
    count2++;
}

if (rand4 === 0) {
    count0++;
} else if (rand4 === 1) {
    count1++;
} else {
    count2++;
}
console.log('Atsitiktine seka:', rand1, rand2, rand3, rand4);
console.log(`Sugenerotoj sekoj iš keturiu skaičiu yra ${count0} - "0"  ${count1} - "1" ir ${count2} - "2"`);
console.log('');

const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('Hellow, World!');

//Task #1
const randomArray = [...Array(30)].map(_ => rand(5, 25));
console.log('\nTask #1\n\nRandom Array', randomArray);

//Task #2a
console.log('\nTask #2a\n\nNumber of Elements Above 10 is   ', randomArray.filter(entry => entry > 10).length);

//Task #2b
const maxEntry = Math.max(...randomArray);
console.log('\nTask #2b\n\nBiggest Element is  ', maxEntry, '  and his index is  ', randomArray.indexOf(maxEntry));

//Task #2c
console.log('\nTask #2c\n\nAll even index entries sum is ', randomArray.filter((_ , index) => index % 2 === 0).reduce((acc, entry) => acc + entry, 0));

//Task #2d
console.log('\nTask #2d\n\nNew entry is entry - index ', randomArray.map((entry, index) => entry - index));

//Task #2e
console.log('\nTask #2e\n\nAmended with 10 elements Random Array ', [...Array(10)].reduce((acc, _) => {acc.push(rand(5, 25)); return acc}, randomArray));

//Task #2f
const [evenArr, oddArr] = randomArray.reduce((acc, entry, index) => {
    index % 2 === 0 ? acc[0].push(entry) : acc[1].push(entry);
    return acc;
}, [[], []])
console.log('\nTask #2f\n\nEven Index Elements Array ', evenArr);
console.log('\nOdd Index Elements Array ', oddArr);

//Task #2g
console.log('\nTask #2g\n\nModify Even Entries > 15  ', randomArray.map((entry, index) => index % 2 === 0 && entry > 15 ? randomArray[index] = 0  : entry));

//Task #2h
console.log('\nTask #2h\n\nIndex of First Element > 10  ', randomArray.findIndex(entry =>  entry > 10));

//Task #3
const generationRandLettersArr = () => {
    const lettersArr = ['A', 'B', 'C', 'D'];
    const rez = [...Array(200)].reduce(({ randomLettersArray = [], countA = 0, countB = 0, countC = 0, countD = 0 }) => {
        const randomLetter = lettersArr[rand(0, 3)];
        randomLettersArray.push(randomLetter);
        switch (randomLetter) {
            case 'A':
                countA++;
                break;
            case 'B':
                countB++;
                break;
            case 'C':
                countC++;
                break;
            case 'D':
                countD++;
                break;
        }
        return { randomLettersArray, countA, countB, countC, countD}
    }, {});
    return rez;
};

const rez = generationRandLettersArr();

console.log('\nTask #3\n\nRandom 200 Letters [A, B, C, D] Array  ', rez.randomLettersArray);
console.log(`contain ${rez.countA} letters A`);
console.log(`contain ${rez.countB} letters B`);
console.log(`contain ${rez.countC} letters C`);
console.log(`contain ${rez.countD} letters D`);

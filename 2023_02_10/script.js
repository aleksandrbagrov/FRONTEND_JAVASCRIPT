const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Task#1
document.write(`<h2>Task#1</2>`);
const arrayRandom = [];
for (i = 0; i < 30; i += 1) {
    arrayRandom.push(rand(5, 25));
}
document.write(`<h3>Random numbers array: [${arrayRandom}]</h3><br><br>`);

// Task#2a
document.write(`<h2>Task#2a</2>`);
const valuesMoreThan10Count = arrayRandom.filter((value) => value > 10).length;
document.write(`<h3>There are ${valuesMoreThan10Count} nambers in the 30 elements random values array which are larger than 10.</h3><br><br>`);

// Task#2b
document.write(`<h2>Task#2b</2>`);
const maxArrayValue = Math.max(...arrayRandom);
const indexesOfMaxElement = arrayRandom.reduce((acc, value, index) => {
    if (value === maxArrayValue) {
        acc.push(index);
        return acc;
    }
    return acc;
}, []);
document.write(`<h3>The biggest value in the 30 elements random number array is ${maxArrayValue}.</h3>`);
document.write(`<h3>The index(es) of the bigest elements are ${indexesOfMaxElement}.</h3><br><br>`);

// Task#2c
document.write(`<h2>Task#2c</2>`);
let evenIndexElementsSum = 0;
for (i = 0; i < 30; i += 2) {
    evenIndexElementsSum += arrayRandom[i];
}
document.write(`<h3>The sum of all elements with even index is ${evenIndexElementsSum}.</h3><br><br>`);

// Task#2d
document.write(`<h2>Task#2d</2>`);
const modifyArr = arrayRandom.reduce((acc, value, index) => {
    const newacc = [...acc, value - index];
    return newacc;
}, []);
document.write(`<h3>The new modified array with elements [value - index]  is [${modifyArr}].</h3><br><br>`);

// Task#2e
document.write(`<h2>Task#2e</2>`);
for (i = 0; i < 10; i += 1) {
    arrayRandom.push(rand(5, 25));
}
document.write(`<h3>10-element padded array: [${arrayRandom}]</h3>`);
document.write(`<h3>Array length: ${arrayRandom.length}</h3><br><br>`);

// Task#2f
document.write(`<h2>Task#2f</2>`);
const arrayEvenIndexElements = [];
const arrayOddIndexElements = [];
for (i = 0; i < 40; i += 1) {
    if (i % 2 === 0) arrayEvenIndexElements.push(arrayRandom[i]);
    else arrayOddIndexElements.push(arrayRandom[i]);
}
document.write(`<h3>Initial array: [${arrayRandom}]</h3>`);
document.write(`<h3>Even index elements array: [${arrayEvenIndexElements}]</h3>`);
document.write(`<h3>Odd index elements array: [${arrayOddIndexElements}]</h3><br><br>`);

// Task#2g
document.write(`<h2>Task#2g</2>`);
document.write(`<h3>Initial array: [${arrayRandom}]</h3>`);
for (i = 0; i < arrayRandom.length; i += 2) {
    if (arrayRandom[i] > 15) arrayRandom[i] = 0;
}
document.write(`<h3>Modified array: [${arrayRandom}]</h3><br><br>`);

// Task#2h
document.write(`<h2>Task#2h</2>`);
let j = 0;
while (arrayRandom[j] < 10) {
    j++;
}
document.write(`<h3>Initial array: [${arrayRandom}]</h3>`);
document.write(`<h3>Indexd of first element larger than 10 is: ${j}</h3><br><br>`);

// Task#2i
document.write(`<h2>Task#2i</2>`);
const modifiedArray = [];
for (let i = 1; i < arrayRandom.length; i += 2) {
    modifiedArray.push(arrayRandom[i]);
}
document.write(`<h3>Initial array: [${arrayRandom}]</h3>`);
document.write(`<h3>Array without even elements: [${modifiedArray}]</h3><br><br>`);

// Task#3
document.write(`<h2>Task#3</2>`);

const generationRandLettersArr = () => {
    const lettersArr = ['A', 'B', 'C', 'D'];
    const resArr = [];
    const lettersCountArr = [0, 0, 0, 0];
    for (let i = 0; i < 200; i += 1) {
        const letter = lettersArr[rand(0, 3)];
        resArr.push(letter);
        switch (letter) {
            case 'A':
                lettersCountArr[0]++;
                break;
            case 'B':
                lettersCountArr[1]++;
                break;
            case 'C':
                lettersCountArr[2]++;
                break;
            case 'D':
                lettersCountArr[3]++;
                break;
        }
    }
    const rez = [resArr, lettersCountArr, lettersArr]
    return rez;
};
rez = generationRandLettersArr();
document.write(`<h3>Array of random letters from list: [${rez[0]}]</h3>`);
document.write(`<h3>Frequency of occurrence of letters in a string: [${rez[1]}] - totall ${rez[1].reduce((acc, value) => acc += value, 0)}</h3>`);
for (let i = 0; i < rez[2].length; i += 1) { document.write(`<h3>Frequency of occurrence of letters ${rez[2][i]} is: ${rez[1][i]}</h3>`) };

// Task#4
document.write(`<br><br><h2>Task#4</2>`);
document.write(`<h3>${rez[0].sort()}</h3><br><br>`);

// Task#5
document.write(`<h2>Task#5</2>`);
const threeRandArr = [];
const summArr = [];
for (let i = 0; i < 3; i += 1) {
    threeRandArr[i] = generationRandLettersArr()[0];
}
for (let i = 0; i < threeRandArr[0].length; i += 1) {
    summArr.push(threeRandArr[0][i] + threeRandArr[1][i] + threeRandArr[2][i]);
}
for (let i = 0; i < 3; i += 1) document.write(`<h3>Array no. ${i + 1} : [${threeRandArr[i]}]</h3>`);
document.write(`<br><h3>Array of sum of elements of three above arrays : [${summArr}]</h3>`);

const uniqValuesArr = [];
let counter = 0;
for (let i = 0; i < summArr.length; i += 1) {
    const slicedArr1 = summArr.slice(0, i);
    const slicedArr2 = summArr.slice(i + 1);
    // if (!uniqValuesArr.includes(summArr[i])) uniqValuesArr.push(summArr[i]);
    if (!slicedArr1.includes(summArr[i]) || !slicedArr2.includes(summArr[i])) uniqValuesArr.push(summArr[i]);
}
document.write(`<br><h3>Number of uniq values is : ${uniqValuesArr.length}</h3>`);
document.write(`<h3>Array of uniq values : [${uniqValuesArr}]</h3>`);

const uniqValuesArrayOfArrays = [];
const uniqValuesObject = {};
lettersCountArr = [0, 0, 0, 0];
for (let i = 0; i < uniqValuesArr.length; i += 1) {
    const splitedValueArr = uniqValuesArr[i].split('');
    for (let j = 0; j < splitedValueArr.length; j += 1) {
        letter = splitedValueArr[j];
        switch (letter) {
            case 'A':
                lettersCountArr[0]++;
                break;
            case 'B':
                lettersCountArr[1]++;
                break;
            case 'C':
                lettersCountArr[2]++;
                break;
            case 'D':
                lettersCountArr[3]++;
                break;
        }
    }
    document.write(`<h3>Letters count array : [${lettersCountArr}]</h3>`);
    uniqValuesObject[`${uniqValuesArr[i]}`] = [...lettersCountArr];
    uniqValuesArrayOfArrays[i] = [...lettersCountArr];
    lettersCountArr = [0, 0, 0, 0];
}
document.write(`<h3>Object of uniq values : ${JSON.stringify(uniqValuesObject)}</h3>`);
document.write(`<h3>Array of arrays of uniq values : ${JSON.stringify(uniqValuesArrayOfArrays)}</h3>`);
console.log(`Object of uniq values : ${JSON.stringify(uniqValuesObject)}`);

const entries = Object.entries(uniqValuesObject);

// for (const values of entries) {
//     const [key, value] = values;
//     for (const i in entries) {
//         if (entries[i][1] !== value) {
//             slicedArr1 = entries.slice(0, i - 1);
//             slicedArr2 = entries.slice(i + 1);
//         }
//     }

// }

const arr = ['DAD','BBA','BCA','CCD','DDA','CAA','CCC','BBD','ABC','CCB','CBD','DAC','ADD','CDC','ADC','BAA','DDB','CAB','ACB'];
document.write(`<br><h3>Three simbols array : ${arr}</h3>`);
const uniqValuesArr1 = [];
counter = 0;
for (let i = 0; i < arr.length; i += 1) {
    const slicedArr1 = arr.slice(0, i);
    const slicedArr2 = arr.slice(i + 1);
    if (!slicedArr1.includes(arr[i]) && !slicedArr2.includes(arr[i])) uniqValuesArr1.push(arr[i]);
    document.write(`<h3>Step ${i} - array left : ${slicedArr1}}</h3>`);
    document.write(`<h3>Step ${i} - array right : ${slicedArr2}}</h3>`);
}
document.write(`<br><h3>Number of uniq values is : ${uniqValuesArr1.length}</h3>`);
document.write(`<h3>Array of uniq values : [${uniqValuesArr1}]</h3>`);
const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomArr = [];

for (let i = 0; i < 10; i += 1) {
    randomArr.push(rand(1, 11));
};

console.log(randomArr);

console.log([...Array(10)].map(_ => Math.floor(Math.random() * 11 + 1)));
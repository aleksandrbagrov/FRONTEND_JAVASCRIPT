const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

let i = 0;
let l = 85;
let strikeCount = 0;
let totalStrikes = 0;
const trys = [`first`, `second`, `third`, `fourth`, `fifth`];
while (i < 5) {
    do {
        const strike = rand(5, 20);
        l -= strike;
        strikeCount++;
    } while (l > 0);
    document.write(`<h3 style:" margin-bottom: 20px;">It took ${strikeCount} hits to hammer the ${trys[i]} nail with light blows</h3>`);
    totalStrikes += strikeCount;
    l = 85;
    strikeCount = 0;
    i++;
}
document.write(`<br><hr><br><h2 style:" margin-bottom: 20px;">It took an average of ${Math.round(totalStrikes / i)} hits to hammer each nail</h2>`);
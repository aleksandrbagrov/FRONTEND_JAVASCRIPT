
i = 0;
l = 85;
strikeCount = 0;
totalStrikes = 0;
const attempts = [`first`, `second`, `third`, `fourth`, `fifth`];
while (i < 5) {
    do {
        const strike = rand(20, 30);
        const target = rand(0, 1);
        l -= strike * target;
        strikeCount++;
    } while (l > 0);
    document.write(`<h3 style:" margin-bottom: 20px;">It took ${strikeCount} hits to hammer the ${attempts[i]} nail with light blows</h3>`);
    totalStrikes += strikeCount;
    l = 85;
    strikeCount = 0;
    i++;
}
document.write(`<br><hr><br><h2 style:" margin-bottom: 20px;">It took an average of ${Math.round(totalStrikes / i)} hits to hammer each nail</h2>`);
const calctip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const Bills = [ 125, 555, 44];
const tips = [calctip(Bills[0]), calctip(Bills[1]), calctip(Bills[2])];

const totals = [Bills[0] + tips[0],Bills[1] + tips[1],Bills[2] + tips[2]];
// some of the bills and the tips^^

console.log(Bills, tips, totals);

const payingforkicks = function (footwear) {
    return footwear >= 200 && footwear <= 400 ? footwear * 0.75 : footwear * 0.25;
}

const payOut = [ 175,220,250];
const tax = [payingforkicks(footwear[0]), payingforkicks(footwear[1]), payingforkicks(footwear[3])];

const youOwe = [footwear[0] + tax[0], footwear[1] + tax[1], footwear[2] + tax[2]];

console.log(payOut, tax, youOwe);
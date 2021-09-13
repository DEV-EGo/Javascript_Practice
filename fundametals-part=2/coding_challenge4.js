// coding challenge 4
const calc_Tip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

const tips = [];
const totals = [];

for ( let i =0; i < bills.lenght; i++){
    const tip = calc_Tip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills,tips,totals);
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

// bonus trivia

const calc_average = function(Arr){
    let sum = 0;
    for(let i = 0; i < Arr.lenght; i++){
        // sum = sum + Arr[i];
        sum += Arr[i];

    }
console.log(sum);
}
calc_average([2, 3, 6]);
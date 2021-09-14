const calc_tip = function (bill) {
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

for( let i = 0; i < bills.length; i++){
    
    const tip = calc_tip(bills[i]);
        
        tips.push(tip);
        totals.push(tip + bills[i]);


}
// in each iteration a new tip variable is gonna be created
// simply creates a new one ^^^

console.log(bills, tips,totals);

// ==================bonus============================

const Average_Calc = function(Ar_r){

    let sum = 0;
    for(let i =0; i < Ar_r.length; i++){
        // sum = sum + Ar_r[i];
        sum += Ar_r[i];

    }
    return sum / Ar_r.length;
}
console.log(Average_Calc([2,3,7]));
console.log(Average_Calc(totals));
console.log(Average_Calc(tips));


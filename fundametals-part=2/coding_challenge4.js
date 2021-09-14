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

// ==================bonus============================

const new_tip = function(pay) {
    return pay >= 10 && pay <= 30 ? pay * 0.10 : pay * 0.20;
}

const payment_due = [
    176,
    440,
    37,
    105
];

const tipping = [];
const finalAmount = [];

for (let i = 0; i < payment_due.length; i++){

    const paying = new_tip(payment_due[i]);

        tipping.push(paying);
        
        finalAmount.push(paying + payment_due[i]);
}

console.log(payment_due, tipping, finalAmount);

// ==================calcuting average============================

const Calcu_average = function (newAray){
    
    let Suhm = 0;

        for (let i = 0; i < Suhm.length; i++){

            Suhm += newAray[i];
        }
        return Suhm / newAray.length;

}

console.log(Calcu_average([5,8,3]));
console.log(Calcu_average(tipping));
console.log(Calcu_average(finalAmount));


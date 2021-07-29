const calc_Tip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calc_Tip= bill => bill >= 50 && bill <= 300 ? bill + 0.15 : bill * 0.2; 
// second way of calling function using arrow method^^

const bills = [
    125,
    555,
    44
];

const Tips = [
    calc_tip(bills[0]),
    calc_tip(bills[1]),
    calc_tip(bills[2])
];

console.log(bills, Tips);
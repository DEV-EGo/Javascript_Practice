// function expression
const CalcAge2 = function(birthYear){
    return 2037 - birthYear;
}

// Arrow Function
const CalcAge3 = birthYear => 2037 - birthYear;
const AGE3 = CalcAge3(1991);
    console.log(AGE3);
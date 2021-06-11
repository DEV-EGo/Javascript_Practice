
// const age = 15;
// const isOldEnough = age >= 18;


// if (age >= 18){
//     console.log(`sarah can start driving`)
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`sarah is to young. wait another ${yearsLeft} years :)`);
// }


// const stock = 200;
// const outofStock = stock >= 201;

// if(stock >= 210){
//     console.log(`we still have sizes left`)
// }else{
//     const stillInStock = 201 - stock;
//     console.log(`we are out of stock ${stillInStock}`);
// }

// const yearOfBirth = 1993;
// let Century;

// if (yearOfBirth <= 2000) {
//     Century = 20;
// }else{
//     Century = 21;
// }

// console.log(Century);

// =================================================================

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn);

// if else statement
// if(BMIMark > BMIJohn){
//     console.log(`marks BMI (${BMIMark}) is higher that johns (${BMIJohn})`);
// }else{
//     console.log(`johns BMI is higher than marks`);
// }

// ======================= TYPE CONVERSION AND COERSION==========================================

// const inputYear = `1991`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number(`jonas`));
// console.log(typeof NaN);

// console.log(String(23),23);

// type coercion

// console.log(`i am ` + 23 + ` years old`);
// console.log(`i am ` + String(23) + ` years old`);
// console.log(`23` / `2`);
// console.log(`23` > `18`);

// let n = `1` + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values :0, ``,undefined, nullm NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`jonas`));
console.log(Boolean({}));

const money = 100;
if(money) {
    console.log("Dont spend it all ");
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if(height) {
    console.log(`YAY! height is defined`)
}else {
    console.log(`Height is UNDEFINED`);
}
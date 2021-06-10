
const age = 15;
const isOldEnough = age >= 18;

// const age = 15;

if (age >= 18){
    console.log(`sarah can start driving`)
}else {
    const yearsLeft = 18 - age;
    console.log(`sarah is to young. wait another ${yearsLeft} years :)`);
}


const stock = 200;
const outofStock = stock >= 201;

if(stock >= 210){
    console.log(`we still have sizes left`)
}else{
    const stillInStock = 201 - stock;
    console.log(`we are out of stock ${stillInStock}`);
}

const yearOfBirth = 1993;
let Century;

if (yearOfBirth <= 2000) {
    Century = 20;
}else{
    Century = 21;
}

console.log(Century);

const pet = `dog`;
let bark;

if(pet){
    bark;
}else{
    false
}
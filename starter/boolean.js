/*
basic logial operators
not specific to just JS

"AND" operator 
"TRUE" when all the variables are TRUE
"OR" determines if its "TRUE" only if one operator is TRUE
"NOT" operator acts on only one boolean value

example:

    age = 16
    Age is >= 20 (false)
    Age is <= 30 (true)
    
    !A is True
    A and B false 
    A OR B True
    !A AND B True
    A OR !B false


*/

const hasDriversLicense = true; // Variable A
const hasGoodVision = true; // Variable B


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// determine wether sarah should drive or NOT

// if(hasDriversLicense && hasGoodVision) {
//     console.log(`sarah is able to drive`);
// }else{
//     console.log(`some one else should drive`);
// }

const isTired = false; // variable C

console.log(hasDriversLicense && hasGoodVision &&
isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`sarah is able to drive`);
}else{
    console.log(`some one else should drive`);
}
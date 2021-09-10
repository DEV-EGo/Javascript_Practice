console.log("<==============ROLL DICE=====================>");

// WHILE LOOP only runs only if the condition is TRUE
// WHILE LOOP does not depend on a counter variable

let rep = 1;
while (rep <= 10){
    rep++;
}

// R O L L DICE challenge


let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`loop is about to end...`);
}


console.log("<==============ROLL DICE=====================>");

console.log("<==============more practice=====================>");
let thisTest = 1;
while (thisTest <= 5){
    thisTest++;
}

let RaceTest = Math.trunc(Math.random() * 2) + 1;

while(RaceTest != 5){

    console.log(`Race #: ${RaceTest} won!`);

    RaceTest = Math.trunc(Math.random() * 2) + 1;
    if(RaceTest === 1) console.log(`Race is almost over`);
}
console.log("<==============more practice=====================>");




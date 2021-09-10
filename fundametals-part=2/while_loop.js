console.log("===================================");
// WHILE LOOP only runs only if the condition is TRUE and
let rep = 1;
while (rep <= 10){
    rep++;
}

// R O L L DICE 


let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
console.log("===================================");

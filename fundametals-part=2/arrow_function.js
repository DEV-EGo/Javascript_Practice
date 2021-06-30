
// Arrow Function
const CalcAge3 = birthYear => 2037 - birthYear;

const AGE3 = CalcAge3(1991);
    console.log(AGE3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const Age = 2037 - birthYear;
    const retirement = 65 - Age;
        // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `jonas`));
console.log(yearsUntilRetirement(1980, `bob`));

// =================================================================
const howOldAreYou = (yearYourBorn, yourNameiS) => {
    const howOld = 1993 -yearYourBorn;
    const youOld = 28 - howOld;
        return `${yourNameiS} you retire in ${youOld} years`;
}
console.log(howOldAreYou(2020,"test"));
console.log(howOldAreYou(2050,"test2"));
// =================================================================

const vehicle = (nameOfCar, BrandOfCar)=>{
    const YearModel = 1970 + nameOfCar;
    const BrandName = 1970 + YearModel;
        return `${BrandOfCar} - ${BrandName}`;
}
console.log(vehicle (2021,"car test"));
console.log(vehicle (2030,"car test"));
// =================================================================

const bitches = (rebound, oldflame)=>{
    const foreignHoe = 1994 + rebound;
    const mexican = 1991 + oldflame;
        return `${oldflame} + ${rebound}`
}
console.log(bitches(1994,"leo"));
console.log(bitches(1991,"capricorn"));
// =================================================================

function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
        return juice;
}

console.log(fruitProcessor(2,3));
// =================================================================

function breakBread (Bread) {
    return Bread + 2;
}

function Bakery(SweetBread,SandwhichBread){
        const concha = breakBread(SweetBread);
        const Bolillo = breakBread(SandwhichBread);
    
        const Odalys = `pan de concha cuesta ${concha} & bolillo cuesta ${Bolillo}`;
            return Odalys;
}

console.log(Bakery(2,3));
// =================================================================

function trafficLight (lightOn){
    return LetsGo * 10;
}

function speedlimit (GreenLight,RedLight){
        const LeGoo = trafficLight(GreenLight);
        const JustStop = trafficLight(RedLight);

        const Popo = `youre going ${LeGoo} on a green light & on a red ${JustStop}`;
            return Popo;
}
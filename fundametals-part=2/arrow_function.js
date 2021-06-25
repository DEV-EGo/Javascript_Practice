
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
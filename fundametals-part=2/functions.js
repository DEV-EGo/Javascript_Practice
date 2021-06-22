// function is a piece of code that we can reuse over and over again.
// function can hold one of more complete lines of code
// functions allow us to write more maintainable code
// D.R.Y (Dont Repeat Yourself) code

function logger(){
    // all code within this block is called a function buddy 
    // will be executed when we run the function
    console.log("my name is edwin");
}

// calling / running /invoking the function
logger();


// parameters are variables that are specific
// to the certain function & get defined once it is called

function fruitProcessor(apples, oranges){
        const juice = `juice with ${apples} apples and 
            ${oranges} oranges.`;
                return juice;
}
const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
    console.log(appleOrangeJuice);

const Number = (`23`);

// ===================PRACTICE==============================================

function edwin(age,race){
    const male = `Hi i am ${age} 
        and im from ${race}`;
        return male;
}
const EdwinIs = edwin(28,'mexico');
    console.log(EdwinIs);

const ImMexican = edwin(28,"USA");
    console.log(ImMexican);
// ===================PRACTICE==============================================

function NIKE (player,shoe){
    const brand = `${player} 
        wears ${shoe}`;
        return brand;
}
const Athlete = NIKE("Michael Jordan","SpaceJams");
    console.log(Athlete);
const LBJ = NIKE ("lebron James" , "South Beaches");
    console.log(LBJ);
const Kevin_Durant = NIKE("Kevin Durant", "KD5's");
    console.log(Kevin_Durant);
const Kobe = NIKE("Kobe Bryant", "Kobes");
    console.log(Kobe);
const Carmelo_Anthony = NIKE("Melo", "team jordans");
    console.log(Carmelo_Anthony);
const Ray_allen = NIKE("RAY RAY", "team jordans");
    console.log(Ray_allen);
const Zion = NIKE("Zion", "Z tops");
    console.log(Zion);
// ===================PRACTICE==============================================

function AlternativeShoes(BBall, kicks){
        const newBrand = `${BBall} is 
            signed to ${kicks}`
            return newBrand;
}

const Alen_iverson = AlternativeShoes("Alen Iverson", "Reebok");
    console.log(Alen_iverson);

const La_melo = AlternativeShoes("La melo Ball", "Puma");
    console.log(La_melo);
const Ewing = AlternativeShoes("Patrick Ewing", "Reebok");
    console.log(Ewing);
const Steph_curry = AlternativeShoes("Steph Curry", "UnderArmor");
    console.log(Steph_curry);
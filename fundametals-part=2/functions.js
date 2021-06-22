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
    const male = `Hi i am ${age} and im from ${race}`;
        return male;
}
const EdwinIs = edwin(28,'mexico');
    console.log(EdwinIs);

const ImMexican = edwin(28,"USA");
    console.log(ImMexican);
// ===================PRACTICE==============================================

function NIKE (shoe,player){
    const brand = `Michael Jordan ${player} was given the iconic ${shoe}NIKE air shoe`;
        return brand;
}
const Athlete = NIKE();
    console.log(Athlete);
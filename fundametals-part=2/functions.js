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


 // ===================PRACTICE==============================================

 function RaceCar(Coupe, Brand){
     const whip = `i want to buy 
        a ${Brand} - ${Coupe}`;
        return whip;
 }

 const ferrari = RaceCar("Ferarri", "F450");
    console.log(ferrari);

const Nissan = RaceCar("GTR", "Skyline")
    console.log(Nissan);

const McLaren = RaceCar("P1", "Formula");
    console.log(McLaren);

const Porsche = RaceCar("911","Porshce");
    console.log(Porsche);

const Supra = RaceCar("MK4", "1994");
    console.log(Supra);

const Mercedenz = RaceCar("GTR", "Benz");
    console.log(Mercedenz);

 // ===================PRACTICE==============================================

 function Space(Company, RichFolk){
    const Rich = `${Company} funded by ${RichFolk} will travel to space before 2040`;
        return Rich;
 }

 const Elon = Space("SpaceX", "Elon Musk");
    console.log(Elon);

const Jeff = Space("Amazon", "Jeff Bezzos");
    console.log(Jeff);

const Richard = Space("Virgin Mobile", "Richard Branson");
    console.log(Richard);

const Jack = Space("Ali Baba", "Jack Ma");
    console.log(Jack);

const Bill = Space("Microsoft", "Bill Gates");
    console.log(Bill);

const Mark = Space("Facebook", "Mark Zuckerberg");
    console.log(Mark);

const Warren = Space("Wallstreet Investor", "Warren Buffet");
    console.log(Warren);

 // ===================PRACTICE==============================================

 function LaptopBrand (NameOfBrand, StoreToBuyFrom){
        const Laptop = `you can buy a ${NameOfBrand} inside a ${StoreToBuyFrom}`;
            return Laptop;
 }

 const Mac = LaptopBrand ("Apple Laptop", "Apple Store");
        console.log(Mac);

const AlienWare = LaptopBrand ("Alien Ware", "Best Buy");
        console.log(AlienWare);

const WindowsLaptop = LaptopBrand ("Windows XP", "Best Buy");
        console.log(WindowsLaptop);

const kaliLinux = LaptopBrand ("Linux", "not able to buy inside a store this is an extended OS");
        console.log(kaliLinux);

 // ===================PRACTICE==============================================

 function Animal (Breed,Gender){
        const Dog = `i have a ${Breed} its a ${Gender}`;
            return Dog;
 }

 const Cane_Corso = Animal("Eurpean Mastiff", "Boy");
        console.log(Cane_Corso);

const Shitzu = Animal("Shitzu", "Girl");
        console.log(Shitzu);

const Sharpei = Animal("Sharpei", "Boy");
        console.log(Sharpei);

const Yorkie = Animal("Yorkie","Boy");
        console.log( Yorkie);

 // ===================PRACTICE==============================================

 function calcAge1(birthYeah){
        return 2021 - birthYeah;;
 }

 const age1 = calcAge1(1993);
        console.log(age1);
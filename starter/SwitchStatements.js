const day = `tuesday`;

switch (day) 
{
    case `monday`: //day === monday if its true the code below will be executed
        console.log(`Plan my course structure`);
        console.log(`Go to coding meet up`);
        break;
    case `tuesday`:
        console.log(`preprare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend `);
        break;
    default:
        console.log(`Not a valid date`);
}

// if else examples

if (day === 'tuesday'){
    console.log(`Plan my course structure`);
    console.log(`Go to coding meet up`);
}else if (day === 'tuesday'){
    console.log(`preprare theory videos`);
}else if (day === 'wednesday' || day === 'thursday'){
    console.log(`Write code examples`);
}else if (day === 'friday'){
    console.log(`record videos`);
}else if (day === 'saturday' || day === 'sunday'){
    console.log(`enjoy the weekend`)
}else {
    console.log(`not a valid date`);
}
// ================== MORE PRACTICE =============================================
const car = `lamborghini`;

switch (car){
    case `Bugatti`:
        console.log(" fastest development car in the world")
        break;
    case `ferrari`:
        console.log(" every rapper has a stallion in red");
        break;
    case `lamborghini`:
        console.log(" lamborghini mercy!")
        break;
    case `SUPRA`:
        console.log("OMG ITS A SUPRAAAAA")
        break;
    default:
        console.log("ride the bus pizza boy")
}

if(car === 'Coupe'){
    console.log("lets ride");
    console.log("start your engine")
}else if(car === 'Bugatti'){
    console.log("twin turbo v12 monster")
}else if(car === 'ferrari'){
    console.log("red ferrari is a dream car")
}else if(car === 'lamborghini'){
    console.log("every one wants a lambo")
}else if(car === 'SUPRA'){
    console.log("YOTA GANG GO VROOOOOM")
}else{
    console.log("go home pizza boy")
}
// ================== MORE PRACTICE =============================================
const service = "Paint";

switch(service){
    case `Vinyl Wrap`:
        console.log("3m certified installers");
        break;
    case `Liquid Wrap`:
        console.log("DYC - Halo FX installers");
        break;
    case `Paint`:
        console.log("Automotive paint")
        break;
    default:
        console.log("you need your car done?")
}

if(service === `Project`){
    console.log("new project who this");
}else if(service === 'Vinyl Wrap'){
    console.log("3M - Avery film install");
}else if(service === 'Liquid Wrap'){
    console.log("plasti dip is the cheapest route")
}else if(service === 'Paint'){
    console.log("automotive paint can also be used")
}else{
    console.log("you get no new paint job")
}


const Character = 'player three';

switch (Character){
    case 'player one':
        console.log("Ready player One");
            break;
    case 'player two':
        console.log("Ready player Two");
            break;
    case 'player three':
        console.log("Ready player Three");
            break;
    default:
        console.log("Choose a player");
}

if(Character === 'player one'){
    console.log("Are you ready?");
}else if(Character === 'player two'){
    console.log("You have chosen player two");
}else if(Character === 'player three'){
    console.log("You have chosen player three");
}else{
    console.log("Ready up before you continue");
}
// ================== MORE PRACTICE =============================================

const Job = 'Car Mechanic';

switch (Job){
    case 'Car Mechanic':
        console.log(" i can weld , paint , vinyl wrap vehicles");
            break;
    case 'Contractor':
        console.log(" i can install floor, carpet,tile");
            break;
    case 'Web Developer':
        console.log(" i am full stack front");
            break;
    default:
        console.log("get a job");
}

if(Job === 'Contractor'){
    console.log(" welder, painter, auto basic")
}else if(Job ==='Contractor'){
    console.log("tile,wood,carpet")
}else if(Job ==='Web Developer'){
    console.log("JS, REACT, Mongo, SQL,CSS,HTML")
}else{
    console.log("different skill sets")
}
// ================== MORE PRACTICE =============================================

const cell = 'Apple';

switch (cell){
    case 'NOKIA':
        console.log("Original Cell phone");
            break;
    case 'Samsung':
        console.log("Galaxy's suck");
            break;
    case 'Apple':
        console.log("Apple is a modern day giant");
            break;
    case 'HUAWEI':
        console.log("Asian corporate giant");
    default:
        console.log("Pick a phone company")
}

if(cell === 'NOKIA'){
    console.log("Need a phone")
}else if(cell==='NOKIA'){
    console.log("the original flip phone")
}else if(cell==='Samsung'){
    console.log("Do you like galaxy phones?")
}else if(cell==='Apple'){
    console.log("trying to buy a phone?")
}else if('HUAWEI'){
    console.log("Chinas best phone company")
}else{
    console.log("buy a new phone man")
}

// ================== MORE PRACTICE =============================================

3 + 4
1991
true && false &!false

if(23>10)
{
    const str = '233 is bigger';
}
console.log(`I'm ${2037-1991}`);

// ================== MORE PRACTICE =============================================

const age = 23;

// age >= 18 ? console.log( ` I like to drink wine`):
// console.log(` I like to drink water`);

const drink = age >= 18 ? `wine????`: `water`;
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = `wine for me`;
}else{
    drink2 = `water for me`;
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine????`
: `water`}`);
// ================== MORE PRACTICE =============================================

const year = 2021;

const time_passingby = year >= 1993 ? `You are young`:`You are Old`;
console.log(time_passingby);

let YouAreOld;

if(year >= 1993){
    YouAreOld =  "Baby Boomer";
}else{
    YouAreOld= "Millenials Rock"
}
console.log(`time is passing by ${YouAreOld >= 2021 ? `your past 30`: `your hitting 30's`}`);
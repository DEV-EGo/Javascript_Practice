// for loop will keep running while the condition is TRUE

for(let rep = 1; rep <= 30; rep++) {
    console.log("lifing weights starting at 1 set")
};

const ego = [
    'Edwin',
    'Gonzalez',
    2037-1993,
    'web developer',
    ['Noel','Eppy','jordan','juju'],
    true
];

const types = [];

// console.log(Edwin[0]);
// console.log(Edwin[1]);
// ..
// console.log(Gonzalez[4])


for(let i=0; i<ego.length ; i++){
    // reading from egos array
    console.log(ego[i],typeof ego[i]);

    // filling types array
    // types[i]=typeof ego[i];

    types.push(typeof ego[i]);
}

console.log(types);

const years = [1991 , 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    // calculate age
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break statements

// CONTINUE : exit the current iteration of the loop & continue to the next one
// BREAK: Terminate the entire loop
// EXAMPLE:

for(let i=0; i<ego.length ; i++){
    if(typeof ego[i] !== 'string') continue;
    console.log(ego[i],typeof ego[i]);

}
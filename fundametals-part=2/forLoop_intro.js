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
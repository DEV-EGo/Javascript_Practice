// for loop will keep running while the condition is TRUE

for(let rep = 1; rep <= 30; rep++) {

    console.log("lifing weights starting at 1 set");

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
console.log('--------only strings will show below--------');

for(let i=0; i<ego.length ; i++){

    if(typeof ego[i] !== 'string') continue;
    console.log(ego[i],typeof ego[i]);

}

console.log('--------BREAK with number--------');
for(let i=0; i<ego.length ; i++){
    if(typeof ego[i] == 'number') break;
    console.log(ego[i],typeof ego[i]);

}

console.log('--------MORE PRACTICE--------');

const JDM = [
    'Supra',
    'FR-S',
    'Skyline',
    'Charger',
    ['Paul Walker','Vin Diesel',"Han"],
    true
];
const vehicles=[];

for(var i=0; i<JDM.length; i++){
    console.log(JDM[i],typeof JDM[i]);
}

console.log(JDM);

console.log('--------MORE PRACTICE--------');

const JDMYears = [1997,2010,1970,1980];
const Car_age=[];

for(let i=0; i < JDMYears.length; i++){
    JDMYears.push(2021 - JDMYears[i]);
}
console.log('--------MORE PRACTICE--------');

const jayz =[
    'HOV',
    'RocaFella',
    2021 - 1990,
    'Greatest rappe of all time',
    ['Dipset','Dame Dash','Bigs']
];

// 0,1,............4
// 4,3,............0
// instead of using "+" for increment in the loop we use "-" for decrement
for(let i = jayz.length -1; i >= 0;i--){
    console.log(i, jayz[i]);
}
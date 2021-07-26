// const Friend1 = 'Michael';
// const Friend2 = 'Steven';
// const Friend3 = 'Peter';

// const friends= [ 'Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array (1991,1984,2008,2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// how to mutate the array
// friends[2] = 'jay';
// console.log(friends);
// friends[1] = 'draco';
// console.log(friends);
// friends[0] = 'diego';
// console.log(friends);

// firstName = 'Jonas';
// const Jonas = [firstName, 'Schmedtmann',2037 - 1991,
// 'teacher', friends];
// console.log(Jonas);

// excersise
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const years = [ 1990,1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]),
// calcAge(years[years.lenght - 1])];
// console.log(ages);

// =================================ARRAY METHODS - OPERATIONS =================================

const friends = [
    'Michael',
    ' Steven',
    'Peter'
];
const NewLength =friends.push('jay'); ///PUSH is a function / method that adds to the end of an array
console.log(friends);
console.log(NewLength);

const cars = [
    'gt86',
    'supra',
    'evo'
];
const newcars = cars.push('lambo');
console.log(cars);
console.log(newcars);

const sneakers = [ 
    'jordans',
    'Adidas',
    'NIKE',
    'puma'
];
const Deadstocks =sneakers.push('YEEZY');
console.log(sneakers);
console.log(Deadstocks);

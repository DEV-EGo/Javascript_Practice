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
    'Steven',
    'Peter'
];

// Add Elements

const NewLength =friends.push('jay'); ///PUSH is a function / method that adds to the end of an array
console.log(friends);
console.log(NewLength);

friends.unshift('john');
console.log(friends);

// Remove Elements

friends.pop(); // Last in line
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first in line
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
    console.log('you have a friend called Steven');
}
// more PRACTICE

const laptops =[
    'Dell',
    'Mac',
    'Alien Ware'
];

const newEquipment =laptops.push('Desktop');

console.log(laptops);
console.log(newEquipment);

laptops.pop();

console.log(laptops.indexOf('Dell'));
console.log(laptops.indexOf('Alien Ware'));

laptops.push(2);
console.log(laptops.includes('New PC'));

if(laptops.includes('Mac')){
    console.log('you own a Mac');
}
// ===================
const JobSite =[
    'Mechanic Shop',
    'Electrician',
    'Welder',
    'Carpenter'
];

const NewHire = JobSite.push('Tile installer');
console.log(JobSite);
console.log(NewHire);

JobSite.pop();

if(JobSite.includes('Carpenter')){
    console.log('you were a Carpenter');
}

const crypto = [
    'BTC',
    'ETH',
    'Monero'
];
const AltCoins = crypto.push('ALDA');
console.log(crypto);
console.log(AltCoins);

console.log(crypto.indexOf('BTC'));
if(crypto.includes('BTC')){
    console.log('You own a piece of BTC');
}

const cars = [
    'gt86',
    'supra',
    'evo'
];
const newcars = cars.push('lambo');
console.log(cars);
console.log(newcars);

if(cars.includes('gt86')){
    console.log('you drive baby supra aka gt86');
}

const sneakers = [ 
    'jordans',
    'Adidas',
    'NIKE',
    'puma'
];
const Deadstocks =sneakers.push('YEEZY');
console.log(sneakers);
console.log(Deadstocks);


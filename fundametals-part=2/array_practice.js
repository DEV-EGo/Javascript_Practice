const Friend1 = 'Michael';
const Friend2 = 'Steven';
const Friend3 = 'Peter';

const friends= [ 'Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array (1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

// how to mutate the array
friends[2] = 'jay';
console.log(friends);
friends[1] = 'draco';
console.log(friends);
friends[0] = 'diego';
console.log(friends);

firstName = 'Jonas';
const Jonas = [firstName, 'Schmedtmann',
2037 - 1991,'teacher', friends];
console.log(Jonas);
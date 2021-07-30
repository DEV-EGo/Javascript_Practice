const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
};
console.log(jonas);

// order of values in objects dont matter when you retrieve them

// dot notation example below
// 'dot' is an operator that retrieves the property
console.log(jonas.lastName);
// can use brackets as a similar way to retrieve property
console.log(jonas['lastName']);

const name_key = 'Name';
console.log(jonas['first' + name_key]);
console.log(jonas['last' + name_key]);

const interested_in = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and friends');
console.log(interested_in)

console.log(jonas[interested_in]);
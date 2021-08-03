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

// using bracket notation to call 'interested_in' and retrieving data from array
// accessing property that doest not exist

if(jonas[interested_in]){
    console.log(jonas[interested_in]);
}else{
    console.log('wrong request! what do you want to know about jonas? choose between firstName, lastName, age, job, and friends ')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge request
// "jonas has 3 friends and his friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends}`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael','Peter','Steven']
// };
// console.log(jonas);

// order of values in objects dont matter when you retrieve them

// dot notation example below
// 'dot' is an operator that retrieves the property
// console.log(jonas.lastName);
// can use brackets as a similar way to retrieve property
// console.log(jonas['lastName']);

// const name_key = 'Name';
// console.log(jonas['first' + name_key]);
// console.log(jonas['last' + name_key]);

// const interested_in = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, and friends');
// console.log(interested_in)

// using bracket notation to call 'interested_in' and retrieving data from array
// accessing property that doest not exist

// if(jonas[interested_in]){
//     console.log(jonas[interested_in]);
// }else{
//     console.log('wrong request! what do you want to know about jonas? choose between firstName, lastName, age, job, and friends ')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

//Challenge request
// "jonas has 3 friends and his friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// ===================

// console.log('================================================================');

// const Dipset = {
//     Record_label: 'RocaFella',
//     City: 'New York',
//     Members: ['Camron','Jim Jones', 'Juelz Santana', 'Max B']
// };

// console.log(Dipset);

// console.log(Dipset.Record_label);
// console.log(Dipset['label']);

// const NYC = (' Harlem music');
// console.log(NYC);

// const Intro_toMusic = prompt(' HARLEM in the house');
// console.log(Intro_toMusic);

// if(Dipset[Intro_toMusic]){
//     console.log(Dipset[Intro_toMusic])
// }else{
//     console.log('youre not with the set');
// }

// Dipset.location = 'Lower East Side';
// Dipset['Instagram'] = '@Dipster';
// console.log(Dipset);

// console.log(`${Dipset.Record_label}  signed this music group ${Dipset.Members}`);

console.log('================================================================');

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthyear: 1991,
    job: 'teacher',  //string value
    friends: ['Michael','Peter','Steven'], //array value
    hasDriversLicense: true, //boolean value

    // calculateAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    calculateAge: function(){
        this.age = 2037 - this.birthyear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.hasDriversLicense }`
    }

    // any function that is attached to an object is called a method^^^
};

console.log(jonas.calculateAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// console.log(jonas['calculateAge'](1991));

// ========CHALLENGE===========
// jonas is a 46 year old teacher
console.log(jonas.getSummary());

// =======================================================================
console.log('================================================================');

const nikeSB = {
    ShoeModel: 'NIKE SB',
    ReleaseYear: 2021,
    Hypebeast: 'sneakerhead',
    placeOfRelease: 'Undefeated',
    HitonRelease: true,

    calculate_sale: function (){
       return this.releasedate = 2022 - this.ReleaseYear
    }, 
    getTotal_sum: function(){
        return `${this.ShoeModel} is a ${this.Hypebeast}`
    }
};

console.log(nikeSB.calculate_sale);
console.log(nikeSB.ShoeModel);
console.log(nikeSB.Hypebeast);
console.log(nikeSB.ReleaseYear);

const trip = {
    Destination: 'Gatlinburg',
    timeOfTrip: 2021,
    activities: ['camping','zip-lining,cave exploring'],
    have_fun: true,

    WhenDidWeGo: function(){
        return this.timeofTravel = 2024-this.timeOfTrip
    },
    funtime: function(){
        return `${this.Destination} has many activities like ${activities[0]}`
    }
};

console.log(activities);
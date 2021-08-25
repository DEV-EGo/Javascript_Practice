const jonas = {
    firstname:  'jonas',
    lastname: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: true,

    // calculatingAge : function (birthYear) {
    //     return 2037 - birthYear;
    // }
    calculatingAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    }
};


console.log(jonas.calculatingAge());

// console.log(jonas['calculatingAge'](1991));

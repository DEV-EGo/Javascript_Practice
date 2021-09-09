const jonas = [
    'jonas',
    'schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'peter','steven']
];

for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}

for(let exercise_test = 1; exercise_test < 4; exercise_test++){
    console.log(`starting exercise ${exercise_test}`);

    for(let rep = 1; rep < 6;rep++){
        console.log(`exercise ${exercise_test}: lifting weight competition ${rep} 🏋🏼‍♀️`);
    }
}


// 
console.log('========    my example  =========');
// 
const dog =[
    'chiquis',
    'tyson',
    'duke',
    2037 - 1993
];

for (let i =dog.length - 1; i >= 0; i--){
    console.log(i, dog[i]);
}

for(let walkDog = 1; walkDog < 5; walkDog++){
    console.log(`Weeklog for dog walk: ${walkDog}`);

    for(let WalkingDogMoney = 1; WalkingDogMoney < 6; WalkingDogMoney++){
        console.log(`neighborhood ${walkDog}: you made $ ${WalkingDogMoney} 🐾`);
    }
}

// 
console.log('========    my example  =========');
// 

const Music = [
    'Mac miller',
    'Wiz Khalifa',
    'Kid Cudi',
    'French Montana',
    2021 - 2011
];

for ( let i = Music.length - 1; i >= 0; i-- ) {
    console.log(i, Music[i]);
}
for(let Music_Catalog = 1; Music_Catalog < 5; Music_Catalog++){
    console.log(`Music Catalog: ${Music_Catalog}`);

    for(let ArtistPlaying = 1; ArtistPlaying < 6; ArtistPlaying++){
        console.log(`Track number: ${Music_Catalog}, Artist: ${ArtistPlaying}`);
    }
}
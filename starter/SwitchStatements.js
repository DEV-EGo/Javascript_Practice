const day = `tuesday`;

switch (day) 
{
    case `monday`: //day === monday if its true the code below will be executed
        console.log(`Plan my course structure`);
        console.log(`Go to coding meet up`);
        break;
    case `tuesday`:
        console.log(`preprare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend `);
        break;
    default:
        console.log(`Not a valid date`);
}

// if else examples

if (day === 'tuesday'){
    console.log(`Plan my course structure`);
    console.log(`Go to coding meet up`);
}else if (day === 'tuesday'){
    console.log(`preprare theory videos`);
}else if (day === 'wednesday' || day === 'thursday'){
    console.log(`Write code examples`);
}else if (day === 'friday'){
    console.log(`record videos`);
}else if (day === 'saturday' || day === 'sunday'){
    console.log(`enjoy the weekend`)
}else {
    console.log(`not a valid date`);
}
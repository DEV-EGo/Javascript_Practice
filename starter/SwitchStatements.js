const day = `monday`;

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
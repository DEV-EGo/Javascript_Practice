// const DolphinsScore = (96 + 108 + 89) / 3;
// const KoalasScore = (88 + 91 + 110) / 3;
// console.log(DolphinsScore, KoalasScore);

// compare average of both teams ========

// if (DolphinsScore > KoalasScore){
//     console.log('Dolphins win 🏆');

// }else if(KoalasScore > DolphinsScore){
//     console.log("Koalas win 🏆");

// }else if(DolphinsScore === KoalasScore){
//     console.log("both win the game")
// }

// BONUS ********

const DolphinsScore = (97 + 112 + 80) / 3;
const KoalasScore = (109 + 95 + 50) / 3;

console.log(DolphinsScore, KoalasScore);

if (DolphinsScore > KoalasScore && DolphinsScore >= 100){
    console.log('Dolphins win 🏆');

}else if(KoalasScore > DolphinsScore  && KoalasScore >= 100){
    console.log("Koalas win 🏆");

}else if(DolphinsScore === KoalasScore && DolphinsScore >= 100 && KoalasScore >= 100){
    console.log("both win the game")
}else{
    console.log("No one wins the trophy 😭")
}

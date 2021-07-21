const AverageCalc = (A,B,C) => (A + B + C) /3;
console.log(AverageCalc(3,4,5));

const DolphinsLiveScore = AverageCalc (44,23,71);
const KOALASLiveScore = AverageCalc (65,54,49);

console.log(KOALASLiveScore);
console.log(DolphinsLiveScore);

const CheckingWinner = function (DolphinAverage, KOALASAverage){
    if(DolphinAverage >= 2 * KOALASAverage){
        console.log(`Dolphins win (${DolphinAverage} vs ${KOALASAverage})`);
    } else if( KOALASAverage >=2 * DolphinAverage){
        console.log(`koalas win (${KOALASAverage} vs ${DolphinAverage})`);
    }else {
        console.log(`no team wins....`);
     }
}
checkWinner (DolphinsLiveScore, KOALASLiveScore);
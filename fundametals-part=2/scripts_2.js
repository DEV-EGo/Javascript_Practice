const AverageCalc = (A,B,C) => (A + B + C) /3;
console.log(AverageCalc(3,4,5));

// test
let DolphinsLiveScore = AverageCalc (44,23,71);
let KOALASLiveScore = AverageCalc (65,54,49);
console.log(KOALASLiveScore,DolphinsLiveScore);

const CheckingWinner = function (DolphinAverage, KOALASAverage){
    if(DolphinAverage >= 2 * KOALASAverage){
        console.log(`Dolphins win (${DolphinAverage} vs ${KOALASAverage})`);
    } else if( KOALASAverage >=2 * DolphinAverage){
        console.log(`koalas win (${KOALASAverage} vs ${DolphinAverage})`);
    }else {
        console.log(`no team wins....`);
     }
}
CheckingWinner (DolphinsLiveScore, KOALASLiveScore);
CheckingWinner(576,111);

// test data 2
DolphinsLiveScore = AverageCalc (85,54,41);
KOALASLiveScore = AverageCalc (23,34,27);
console.log(DolphinsLiveScore, KOALASLiveScore)
CheckingWinner (DolphinsLiveScore, KOALASLiveScore);

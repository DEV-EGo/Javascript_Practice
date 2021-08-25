const mark = {
    fullName: 'Mark Miller',
    Mass: 78,
    Height: 1.69,
    calcBMI: function(){
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }
};

const John = {
    fullName: 'John Smith',
    Mass: 92,
    Height: 1.95,
    calcBMI: function(){
        this.bmi = this.Mass / this.Height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
John.calcBMI();
console.log(mark.bmi,John.bmi);

if(mark.bmi > John.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi})
    is higher than ${John.fullName}'s BMI (${John.bmi})
    `)
}else if (John.bmi > mark.bmi){
    console.log(`${John.fullName}'s BMI (${John.bmi})
    is higher than ${mark.fullName}'s BMI (${mark.bmi})
    `)
}
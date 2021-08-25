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
    Height: 1.95
};

mark.calcBMI();
console.log(mark.bmi)
const calctip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const Bills = [ 125, 555, 44];
const tips = [calctip(Bills[0]), calctip(Bills[1]), calctip(Bills[2])];

console.log(Bills, tips);
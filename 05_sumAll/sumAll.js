const sumAll = function (a, b) {
    let finalSum = 0;

    if (Number.isInteger(a) && Number.isInteger(b)) {
        console.log(a);
        console.log(b);
        if (a < 0 || b < 0) {
            return "ERROR";
        }
        if (b > a) {
            for (let i = a; i <= b; i += 1) {
                finalSum += i;
            }
        } else {
            for (let i = b; i <= a; i += 1) {
                finalSum += i;
            }
        }
        return finalSum;
    } else {
        return "ERROR";
    }




};

// Do not edit below this line
module.exports = sumAll;

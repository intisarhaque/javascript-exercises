const removeFromArray = function () {
    arrayRet = []
    // for (number of arrayGiven) {
    //     console.log(number);

    // }
    // const index1 = arrayGiven.indexOf(numbertoDel);
    // arrayGiven.splice(index1, 1);
    // for (number of arrayGiven) {
    //     console.log(number);
    // }
    // return arrayGiven;
    // console.log(arguments[0]);
    let arrayGiven = arguments[0]
    argLength = arguments.length - 1;
    startIndex = 1
    let index1
    do {
        index1 = arrayGiven.indexOf(arguments[parseInt(startIndex)]);
        startIndex += 1;
        if (index1 < 0) {
            continue;
        }
        console.log(`index is ${index1}`);
        arrayGiven.splice(index1, 1);


    } while (startIndex <= argLength);
    // for (number of arrayGiven) {
    //     console.log(number);
    // }
    return arrayGiven;

};

// Do not edit below this line
module.exports = removeFromArray;

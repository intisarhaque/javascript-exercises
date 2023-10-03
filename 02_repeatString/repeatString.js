const repeatString = function (word, numberoftimes) {
    ret = "";
    if (numberoftimes === -1) {
        return "ERROR"
    }
    for (let i = 0; i < numberoftimes; i += 1) {
        ret += word;
    }
    return ret

};

// Do not edit below this line
module.exports = repeatString;

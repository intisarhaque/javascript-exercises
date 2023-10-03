const reverseString = function (text) {
    textRet = ""
    for (let i = text.length - 1; i >= 0; i -= 1) {
        textRet += text[i];
    }
    console.debug(textRet);
    return textRet;

};

// Do not edit below this line
module.exports = reverseString;

const reverseString = function(text) {
    splitTextArr = text.split("")
    reversedText = ""
    for (i=(splitTextArr.length)-1; i>=0; i--) {
        reversedText += splitTextArr[i]
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;

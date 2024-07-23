const repeatString = function(text, repeatCount) {
    let finalText = ""
    if (repeatCount < 0) {
        return "ERROR"
    } else {
        for (i = 0; i < repeatCount; i++) {
            finalText += text
        }
        return finalText;
    }

};

// Do not edit below this line
module.exports = repeatString;

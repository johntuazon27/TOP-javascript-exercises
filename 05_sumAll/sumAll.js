const sumAll = function(numStart, numEnd) {
    let total = 0;
    // check if the input is not a negative number
    if  ( numStart < 0 || numEnd < 0 ||
        // check if the input is a number
        typeof(numStart) != "number" || typeof(numEnd) != "number" ||
        // check if the input has decimal place
        numStart % 1 != 0 || numEnd % 1 != 0) {
        return("ERROR");
    } else {
        // if the numStart is bigger reverse the order of numbers
        if (numStart > numEnd) {
            for (i=numEnd; i<=numStart; i++) {
                total += i;
            }
        } else {
            for (i=numStart; i<=numEnd;i++) {
                total +=i;
            }
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

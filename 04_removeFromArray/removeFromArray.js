const removeFromArray = function() {
    // create a new array that duplicates argument[0], which contains the initial array of numbers
    arr = arguments [0];
    // LOOP THROUGH EACH NUMBER TO REMOVED
    for (i=1; i<=arguments.length; i++) {
        // LOOP THROUGH EACH NUMBER OF THE INITIAL ARRAY
        for (x=0; x<arr.length; x++) {
            // CHECK IF THE ITEM TO BE REMOVED IS THE SAME AS THE ITEM INSIDE THE INITIAL ARRAY
            if (arguments[i] === arr[x]) {
                // REMOVE THE ITEM
                arr.splice(x,1)
                // RESET THE COUNTER TO 0 TO REFRESH THE INITIAL ARRAY\
                // IF THIS IS NOT INCLUDED THERE WILL BE A BUG AND WONT PRODUCE PROPER OUTPUT
                x=0
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

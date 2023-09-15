const removeFromArray = function(array, rElement) {
    let newArray = []
    for (element of array){
        if (element != rElement){
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

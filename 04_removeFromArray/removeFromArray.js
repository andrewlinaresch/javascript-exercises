const removeFromArray = function(array) {
    let newArray = []
    newArray = removeElement(array,arguments[1]);
    return newArray;
};

function removeElement(array, rElement){
    let newArray = [];
    for (element of array){
        if (element != rElement){
            newArray.push(element);
        }
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(array) {
    let newArray = array;
    for (let i = 1; i < arguments.length; i++){
        newArray = removeElement(newArray,arguments[i]);
    }

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

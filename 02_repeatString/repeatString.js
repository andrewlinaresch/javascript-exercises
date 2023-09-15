const repeatString = function(string, repitions) {
    if (repitions < 0) return 'ERROR'
    let newString = '';
    for (let i = 0; i < repitions; i++){
        newString = newString + string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(string) {
    let rString = '';
    let sLength = string.length;
    for (let i = 0; i <= sLength; i++){
        let sChar = string.substr(sLength - i,1);
        rString += sChar;
    }
    return rString;
};

// Do not edit below this line
module.exports = reverseString;

const sumAll = function(num1, num2) {
    //checks validity of arguments (negative or non-numerical)
    if (typeof num1 != 'number' || typeof num2 != 'number') return 'ERROR'
    if (num1 < 0 || num2 < 0) return 'ERROR'
    
    let sum = 0;
    
    if (num2 > num1){
        let difference = num2-num1;
        for (let i = 0; i < num2; i++) sum += (num1 + i);
    } else {
        let difference = num1-num2;
        for (let i = 0; i < num1; i++) sum += (num2 + i);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const sumAll = function(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') return 'Error'
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

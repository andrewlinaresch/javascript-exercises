const convertToCelsius = function(tempFahr) {
  let newTemp = (tempFahr - 32) * (5/9);
  newTemp = roundToOneDec(newTemp);
  return newTemp;
};

const convertToFahrenheit = function(tempCels) {
  let newTemp = tempCels * (9/5) + 32;
  newTemp = roundToOneDec(newTemp);
  return newTemp;
};

function roundToOneDec(num){
  return Math.round(num*10)/10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

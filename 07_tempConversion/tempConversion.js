const convertToCelsius = function(tempFahr) {
  return (tempFahr - 32) * (5/9);
};

const convertToFahrenheit = function(tempCels) {
  return tempCels * (9/5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

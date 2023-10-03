const convertToCelsius = function (farenheit) {
  let celsius;
  celsius = (farenheit - 32) / 1.8;
  if (Number.isInteger(celsius)) {
    return celsius
  }
  else {
    return +celsius.toFixed(1);
  }

};

const convertToFahrenheit = function (celsius) {
  let farenheit;
  farenheit = (celsius * 1.8) + 32
  if (Number.isInteger(farenheit)) {
    return farenheit
  }
  else {
    return +farenheit.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

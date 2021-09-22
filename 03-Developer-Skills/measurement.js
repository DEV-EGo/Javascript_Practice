// prompt will always convert into a string
const measurementKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C fix
    value: Number(prompt('Degrees celsius')),
  };
  //   find the bugg
  console.log(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measurementKelvin());

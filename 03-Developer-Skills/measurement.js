// prompt will always convert into a string
const measurementKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C fix
    // value: Number(prompt('Degrees celsius')),
    value: 10,
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

// using Debuger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp === 'number') continue;

    if (curTemp[i] > max) max = curTemp[i];
    if (curTemp[i] < min) min = curTemp[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

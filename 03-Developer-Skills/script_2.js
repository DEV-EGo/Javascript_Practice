'use strict';

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// compute the max and min of the temperature?
// whats a sensor error? & what to do?
// find min value in temp array
// find max value in temp _array
// substract min from max (amplitude) & return it

const calcTempAmplitudeNew = function (t1, t2) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp === 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperature);
console.log(amplitudeNew);

// problem 2
// function receive 2 arrays of temperature
// merge 2 arrays?

'use strict';

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// compute the max and min of the temperature?
// whats a sensor error? & what to do?
// find min value in temp array
// find max value in temp _array
// substract min from max (amplitude) & return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] > min) min = temps[i];
  }
  console.log(max);
};

calcTempAmplitude([3, 7, 4]);

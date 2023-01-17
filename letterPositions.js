//returns index of a letter

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [ i ];
      }
    }
  }
  return results;
};

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed:  ${actual} === ${expected}`);
//   }
// };

// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   };
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const assertArraysEqual = function (actual, expected) {
//   if (actual.length !== expected.length) {
//     console.log(`🛑🛑🛑Assertion Failed:  ${actual} === ${expected}`);
//     process.exit();
//   }
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       console.log(`🛑🛑🛑Assertion Failed:  ${actual} === ${expected}`);
//       process.exit();
//     }
//   }
//   console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
// };



// assertArraysEqual(letterPositions("hello").e, [1]);

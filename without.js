//returns an array without sertain elements

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;
// const assertArraysEqual = function(actual, expected) {
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

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])) // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

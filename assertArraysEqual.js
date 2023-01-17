const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} === ${expected}`);
    process.exit();
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑Assertion Failed:  ${actual} === ${expected}`);
      process.exit();
    }
  }
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertArraysEqual;

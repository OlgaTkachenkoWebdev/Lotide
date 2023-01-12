// returns array of numbers from the middle of a given array

const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) {
    let midEven = array.slice((array.length / 2) - 1, (array.length / 2) + 1);
    midArray.push(midEven);
  } else {
    let midOdd = array[(array.length - 1) / 2];
    midArray.push(midOdd);
  }
  return midArray;
};

// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
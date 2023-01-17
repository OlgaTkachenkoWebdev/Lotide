// returns a part of an array before callback is true

const takeUntil = function (array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item) === false) {
      newArray.push(item);
    } else {
      return newArray;
    }
  }
}

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

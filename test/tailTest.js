const assert = require('chai').assert;
const tail   = require('../tail');

describe("#head", () => {
  
  it('returns Labs for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
});
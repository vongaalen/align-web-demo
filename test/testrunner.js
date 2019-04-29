var assert = require('assert');

describe('My Test Suite', function() {
  describe('#1 Test', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('#2 Test', function() {
    it('should return 1 when the value is in the 2nd position', function() {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });
});
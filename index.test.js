var assert = require('assert');

describe('Our first test', () => {
    it('should pass', () => {
        assert.equal(-1, [1,2,3].indexOf(4));
    });
});
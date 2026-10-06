const test = require('node:test');
const assert = require('node:assert/strict');
const { longestPalindrome } = require('./index');

test('finds odd and even palindromes', () => {
  assert.equal(longestPalindrome('babad'), 'bab');
  assert.equal(longestPalindrome('cbbd'), 'bb');
  assert.equal(longestPalindrome('forgeeksskeegfor'), 'geeksskeeg');
});

test('handles boundaries and Unicode code points', () => {
  assert.equal(longestPalindrome(''), '');
  assert.equal(longestPalindrome('a'), 'a');
  assert.equal(longestPalindrome('abc'), 'a');
  assert.equal(longestPalindrome('a😀a'), 'a😀a');
  assert.throws(() => longestPalindrome(null), TypeError);
});

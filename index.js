/** Return the leftmost longest palindromic substring of text. */
function longestPalindrome(text) {
  if (typeof text !== 'string') throw new TypeError('Input must be a string.');

  // Code points keep characters such as emoji intact.
  const chars = Array.from(text);
  let bestStart = 0;
  let bestLength = 0;

  function expand(left, right) {
    while (left >= 0 && right < chars.length && chars[left] === chars[right]) {
      left--;
      right++;
    }
    const start = left + 1;
    const length = right - left - 1;
    if (length > bestLength) {
      bestStart = start;
      bestLength = length;
    }
  }

  for (let center = 0; center < chars.length; center++) {
    expand(center, center);     // Odd-length palindromes
    expand(center, center + 1); // Even-length palindromes
  }

  return chars.slice(bestStart, bestStart + bestLength).join('');
}

if (require.main === module) {
  if (process.argv.length < 3) {
    console.error('Usage: node index.js "text to inspect"');
    process.exitCode = 1;
  } else {
    console.log(longestPalindrome(process.argv.slice(2).join(' ')));
  }
}

module.exports = { longestPalindrome };

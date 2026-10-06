# Longest palindromic substring

Run `node longest-palindromic-substring/index.js babad` from the repository root. It prints `bab`; `aba` is also a valid longest answer. The function `longestPalindrome(text)` is exported for use in other code.

The algorithm expands around every possible center. It takes O(n²) time in the worst case and O(n) space to split the input into Unicode code points. It compares characters exactly, including spaces and case, and returns the leftmost result when lengths tie.

Run tests with `node --test longest-palindromic-substring/index.test.js`.

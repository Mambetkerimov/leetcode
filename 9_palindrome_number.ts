// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// Link to problem: https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    let num = x;
    let res = 0;
    while (num !== 0) {
        res = (res * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return res === x;
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
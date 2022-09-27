//You are given a large integer represented as an integer array digits, where each digits[i]
// is the ith digit of the integer.The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Link to problem: https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
    let val = 0;
    let carry = 1;
    while (i >= 0 && carry) {
        val = digits[i] + carry;
        carry = Math.floor(val / 10);
        digits[i] = val % 10;
        i--;
    }
    if (carry) digits.unshift(carry);
    return digits;
};

plusOne([1,2,3]);
plusOne([4,3,2,1]);
plusOne([9]);
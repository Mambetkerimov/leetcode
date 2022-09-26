//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Link to problem: https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    let expectedBrackets = [];
    for (let letter = 0; letter < s.length; letter++) {
        switch (s[letter]) {
            case '{': {
                expectedBrackets.push('}');
                break;
            }
            case '[': {
                expectedBrackets.push(']');
                break;
            }
            case '(': {
                expectedBrackets.push(')');
                break;
            }
            default: {
                if (expectedBrackets.pop() !== s[letter]) {
                    return false;
                }
            }
        }
    }
    return !expectedBrackets.length;
};

isValid("()");
isValid("()[]{}");
isValid("(]");

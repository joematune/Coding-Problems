// Source: freeCodeCamp.org - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

// Task 1 - My Solution 01

function palindrome(str) {
    let clean = str.replace(/\W|\_/g, '').toLowerCase();
    while (clean.length > 1) {
        if (clean[0] !== clean[clean.length - 1]) {
            return false
        }
        clean = clean.slice(1, clean.length - 1);
    }
    return true;
}

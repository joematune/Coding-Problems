// Source: interviewing.io - https://interviewing.io/recordings/Javascript-Google-4/

// Task 1 - My Solution 01

const assert = require('assert').strict; // Uses Node.js assert module

const hasPattern = (string, pattern) => {
    return string.replace(RegExp(pattern), '').length === 0 ? true : false;
}

// Tests ////////////////////////////////////

assert(hasPattern("aba", "ab")    === false);

assert(hasPattern('aa', 'a*')     === true);

assert(hasPattern('ab', '.*')     === true);

assert(hasPattern('ab', '.')      === false);

assert(hasPattern('aab', 'c*a*b') === true);

assert(hasPattern('aaa', 'a*.')   === true);

assert(hasPattern('bbb', 'b*b')   === true);

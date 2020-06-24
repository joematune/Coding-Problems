// Source: interviewing.io - https://interviewing.io/recordings/Javascript-Google-4/

// Task 1 - My Solution 01

// special characters:
// -- . any character
// -- * any number occurances of previous char

// conditions:
// -- string will only contain a-z && non-empty

// const hasPattern = (string, pattern) => {
//     return string.replace(RegExp(pattern), '').length === 0 ? true : false;
// }

// Task 1 - My Solution 02
// --Note: Make my own RegEx subset

const hasPattern = (string, pattern) => {
    notEmpty:
    while (pattern.length !== 0) {
        let pEnd = pattern.length - 1; // pattern last char position
        let sEnd = string.length - 1; // string last char position
        for (i = pattern.length; i > 0; i--) { // loop through the pattern
            if (pattern[pEnd] === '*') {
                let pPrev = pEnd - 1; // char before '*'
                // Check occurances of pattern[pPrev] in string & remove
                if (pattern[pPrev] === '.') { // p: '?.*'
                    if (pattern[pPrev - 1]) { // char before '.*'
                            // Consume !pattern[pPrev - 1]
                            for (j = string.length - 1; j > 0; j--) {
                                if  ((string[j] !== pattern[pPrev - 1]) || // remove non-match
                                    (string[j] === string[j - 1])) // remove repeats 
                                { string = string.slice(0, string.length - 1); }
                            }
                        pattern = pattern.slice(0, pPrev); // Remove star and pEnd
                    } else return true; // p: '.*'
                } else if (pattern[pPrev] === string[sEnd]) { // 'something*'
                    // Remove sEnd and continue notEmpty
                    string = string.slice(0, sEnd);
                    continue notEmpty;
                } else {
                    // Remove star and pEnd and continue notEmpty
                    pattern = pattern.slice(0, pPrev);
                }
            }
            if (pattern[pEnd] === string[sEnd] || pattern[pEnd] === '.') {
                // Remove end characters and continue the notEmpty
                string = string.slice(0, sEnd);
                pattern = pattern.slice(0, pEnd);
            } else return false;
        }
    }
    return (string.length === 0) ? true : false;
}

// Tests ////////////////////////////////////

const assert = require('assert').strict; // Uses Node.js assert module

assert(hasPattern('aba', 'ab')    === false);

assert(hasPattern('aa', 'a*')     === true);

assert(hasPattern('ab', '.*')     === true);

assert(hasPattern('ab', '.')      === false);

assert(hasPattern('aab', 'c*a*b') === true);

assert(hasPattern('aaa', 'a*.')   === true);

assert(hasPattern('bbb', 'b*b')   === true);

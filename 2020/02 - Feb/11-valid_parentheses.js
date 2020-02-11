// Source: Code Wars - https://www.codewars.com/kata/52774a314c2333f0a7000688

// My solution - 01

function validParentheses(p) {
    while (p.length > 0) {
        if (p.length === p.replace(/\(\)/g, '').length) break;
        p = p.replace(/\(\)/g, '');
    }
    return p.length > 0 ? false : true;
}
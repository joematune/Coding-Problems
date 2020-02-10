// Source: Code Wars - https://www.codewars.com/kata/5572f7c346eb58ae9c000047

// My solution - 01

function pattern(n) {
    var output = "";
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            output += i.toString();
        }
        if (i < n) output += "\n";
    }
    return output;
}
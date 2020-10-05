// Source - Self-made

const theBoard = [
    { shading: 3, symbol: 2, color: 2, number: 2 },
    { shading: 1, symbol: 2, color: 3, number: 1 },
    { shading: 3, symbol: 3, color: 2, number: 3 },
    { shading: 1, symbol: 3, color: 2, number: 1 },
    { shading: 1, symbol: 1, color: 1, number: 1 },
    { shading: 3, symbol: 1, color: 1, number: 1 },
    { shading: 3, symbol: 3, color: 2, number: 1 },
    { shading: 1, symbol: 3, color: 1, number: 2 },
    { shading: 2, symbol: 2, color: 1, number: 3 },
    { shading: 2, symbol: 1, color: 3, number: 3 },
    { shading: 1, symbol: 2, color: 1, number: 3 },
    { shading: 3, symbol: 1, color: 3, number: 2 }
];

const categories = [
    'shading',
    'symbol',
    'color',
    'number',
];

const isSet = ([card1, card2, card3]) => {
    const areValuesSet = (a, b, c) => {
        return (a === b && b === c) || (a !== b && a !== c && b !== c);
    }
    for (let category of categories) {
        if (areValuesSet(card1[category], card2[category], card3[category])) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

const findSolutions = (board) => {
    let solutions = [];
    const end = board.length - 1;
    for (let i = 0; i <= end - 2; i++) {
        for (let j = i + 1; j <= end - 1; j++) {
            for (let k = j + 1; k <= end; k++) {
                if (isSet([board[i], board[j], board[k]])) {
                    solutions.push([i, j, k].sort((a,b)=>a-b));
                }
            }
        }
    }
    return solutions;
}

let solutions = findSolutions(theBoard);

console.log(solutions);

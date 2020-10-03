// Source - Self-made

const categories = [
    'shading',
    'symbol',
    'color',
    'number',
];

const isCategorySet = (a, b, c) => {
    return (a === b && b === c) || (a !== b && a !== c && b !== c);
}

const isSet = ([card1, card2, card3]) => {
    for (let category of categories) {
        if (isCategorySet(card1[category], card2[category], card3[category])) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

const set1 = [
    {
        shading: 0,
        symbol: 1,
        color: 0,
        number: 2,
    },
    {
        shading: 0,
        symbol: 1,
        color: 1,
        number: 0,
    },
    {
        shading: 0,
        symbol: 1,
        color: 2,
        number: 1,
    },
];

const set2 = [
    {
        shading: 0,
        symbol: 1,
        color: 2,
        number: 2,
    },
    {
        shading: 0,
        symbol: 1,
        color: 2,
        number: 1,
    },
    {
        shading: 0,
        symbol: 1,
        color: 2,
        number: 2,
    },
];

console.log(isSet(set1));
console.log(isSet(set2));

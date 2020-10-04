// Source - Self-made

const categories = [
    'shading',
    'symbol',
    'color',
    'number',
];

class SetCard {
    constructor(a, b, c, d) {
        this.shading = a,
        this.symbol = b,
        this.color = c,
        this.number = d
    }
}

const createDeck = () => {
    let deck = [];
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            for (let k = 0; k <= 2; k++) {
                for (let l = 0; l <= 2; l++) {
                    deck.push(new SetCard(i, j, k, l))
                }
            }
        }
    }
    return deck;
}

let deck = createDeck(categories);

console.log(deck);

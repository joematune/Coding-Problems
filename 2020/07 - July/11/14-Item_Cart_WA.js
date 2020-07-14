// Source - Self-made

const waMenuMessage = ({ info, ...items }) => {
    let completeOrder = '';
    let max = 0;
    let total = 0;
    Object.keys(items).forEach(item => {
        let { price, quantity } = items[item];
        itemString = `[${quantity}x] ${item} - ${info.currency}${price * quantity}
`
        completeOrder += itemString
        max = itemString.length > max ? itemString.length : max;
        total += quantity * price;
    });
    completeOrder += `${''.padStart(max,'-')}
Total: ${info.currency}${total}`;

    return encodeURI(`https://api.whatsapp.com/send?phone=${info.phone}&text=${completeOrder}`);
};

const order1 = {
    info: { phone: 10123456789, currency: 'R' },
    'Halloumi Fries': { price: 120, quantity: 1 },
    'Falafel Rainbow Bowl': { price: 100, quantity: 2 }
};

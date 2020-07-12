// Source - Self-made

const waMenuMessage = ([ info, ...items]) => {
    let completeOrder = '';
    let max = 0;
    let total = 0;
    items.forEach(item => {
        itemString = `[${item.quantity}x] ${item.name} - ${info.currency}${item.price * item.quantity}
`
        completeOrder += itemString
        max = itemString.length > max ? itemString.length : max;
        total += item.quantity * item.price;
    });
    completeOrder += `${''.padStart(max,'-')}
Total: ${info.currency}${total}`;

    return encodeURI(`https://api.whatsapp.com/send?phone=${info.phone}&text=${completeOrder}`);
};

const order1 = [
    { phone: 0123456789, currency: 'R' },
    { price: 120, quantity: 1, name: 'Halloumi Fries' },
    { price: 100, quantity: 2, name: 'Falafel Rainbow Bowl' }
];

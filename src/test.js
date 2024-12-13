const data = [
    {amount: 10, name: 'fghj'},
    {amount: 20, name: 'fghj'},
    {amount: 30, name: 'fghj'},
    {amount: 40, name: 'fghj'},
]

const result = data.reduce((sum, item) => {
    return sum + item.amount;
}, 0);

console.log(result);
console.log(data);

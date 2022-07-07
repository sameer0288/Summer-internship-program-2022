function difference(num) {
    const diff = Math.abs(num - 13);
    return num > 13 ? (2 * diff) : diff;
};

console.log(difference(42));
console.log(difference(9));
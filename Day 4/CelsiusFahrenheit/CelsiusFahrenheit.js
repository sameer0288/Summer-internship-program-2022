const cToF = (T) => {
    const f = ((T * 9) / 5) + 32;
    return f;
};
const fToC = (T) => {
    const c = ((T - 32) * 5) / 9;
    return c;
};
console.log(cToF(60));
console.log(fToC(45));
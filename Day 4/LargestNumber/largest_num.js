function maxBetweenthree(a, b, c) {
    maximumValue = 0;
    if (a > b) {
        maximumValue = a;
    } else {
        maximumValue = b;
    }
    if (c > maximumValue) {
        maximumValue = c;
    }
    return maximumValue;
}

console.log(maxBetweenthree(79, 84353, 3342));
console.log(maxBetweenthree(-640, 0, 150));
console.log(maxBetweenthree(143, 112, -25));
console.log(maxBetweenthree(-13, 652, 6));
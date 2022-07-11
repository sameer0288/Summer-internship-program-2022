// Print the fibonacci sequence
function printFibonacciSequence() {
    let inputNum = parseInt(prompt("Enter a number: "));
    let a = 0,
        b = 1;
    let nextVal;
    for (let i = 1; i <= inputNum; i++) {
        console.log(a);
        nextVal = a + b;
        a = b;
        b = nextVal;
    }
}

console.log("Fibonacci sequence: ");
printFibonacciSequence();
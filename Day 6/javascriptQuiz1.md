# Assignment 1 Week 2 Day 1

## Theory:

1. ### What is Javascript?
 
     javascript is a dynamically typed prograamming language for the web. it was developed by Brendan Eich at netscape.
other than using it for web development its is used in game development, and lots more.

2. ### What is the difference between _let_ and _var_?
   
      The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope
 
- let 
 
```js
// program to print the text
// variable a cannot be used here
function greet() {
    let a = 'hello';

    // variable b cannot be used here
    if(a == 'hello'){
        // variable b can be used here
        let b = 'world';
        console.log(a + ' ' + b);
    }

     // variable b cannot be used here
    console.log(a + ' ' + b); // error
}
// variable a cannot be used here

greet();
```

- var

 ```js
     var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}
 ```
 
3.  ### Why do prefer _const_ over _var_?
    
     - The value of const variable cannot be changed.
     - const makes sure that the variable (well, constant) binding is immutable but the object itself can change whenever you need to.
     
 ```js
     const N = 1000 
const squares = [] 
 
for(let i = 0 ; i < N ; ++i) { 
	squares[i] = new Square(Math.random() * canvas.width, Math.random() * canvas.height, 1) 
 } 
 ```
 
 4.  ### What is the use of JavaScript in Web Browsers?
 
     JavaScript is a programming language used both on the client-side and server-side that allows you to make web pages interactive this is one of the biggest reson that javascript is so much used in web pages there are many features in javascript like its `DOM` manipulation provides us better control over our webpage.
     JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user.
     
 5.  ### What are Objects?
    
       Object is a unique entity, which contains data and functions that is characteristics and behaviours together in an object oriented programming language.
       It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor.
       
 6.  ### What is an Array and how is it different from an Object in JavaScript?
  
       Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.
       - JS arrays are not associative arrays.
       - Arrays in JS are zero-indexed.

 7. ### What is a function?
 
       A function is a block of code that is designed to perform a specific task.
        Functions provide better modularity for your application and a high degree of code reusing.
        
 8.  ### How can we implement call by value and call by reference in Javascript?
      
      -  By value 
 ```js
    var a = 5;
    var b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b)
```

     -  By reference
```js
    var c = { greeting : 'Welcome' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'Welcome to geeksforgeeks';
    console.log(c);
    console.log(d);
```

9.  ### What are primitive data types in JS?

      There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

10. ### What is DOM ?
   
      The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. In the DOM specification, the term "document" is used in the broad sense - increasingly, XML is being used as a way of representing many different kinds of information that may be stored in diverse systems, and much of this would traditionally be seen as data rather than as documents. Nevertheless, XML presents this data as documents, and the DOM may be used to manage this data.
      
11. ### Why do we need DOM?
       
          DOM allows JS to be powerful enought to access and change everything that can be changed in a HTML document i.e. we can change the Styling, create new elements, etc. Being able to use DOM gives the programmer infinite possibilities and thus allows a programmer to be able to create truly dynamic web pages.
          
          
          
    
<hr>

## Programs:

1. ### Average of array nums in JS.

```js
var grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var average = calculateAverage(grades, 0, 9);
console.log(average);

function calculateAverage(arr, start, end) {
    var total = 0;
    for (var i = start; i <= end; i++) {
        total += arr[i];
    }
    var diff = (end - start) + 1;
    var avg = total / diff;
    return avg
}
```


2. ### Swap variables using reference.

```js
// JavaScript Program to Swap Two Variables
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
// Temporary variable
var temp;
// Swapping two variables
temp = num1;
num1 = num2;
num2 = temp;
console.log("The value of first number after swapping: " + num1);
console.log("The value of second number after swapping: " + num2);
 ```
 
3. ### Print the fibonacci sequence.

```js
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
```


4. ### Sort an array in both ascending order and descending order.

  - Asscending order:

```js
const arr1 = [21, 2100, 2, 35000];
let ascN = arr1.sort((f, s) => f - s);
console.log(arr1);
```
   - Descending Order 

```js
const arr2 = [21, 2100, 2, 35000];
let dscN = arr2.sort((f, s) => s - f);
console.log(arr2);
```


5. ### Show a variable value in an HTML webpage using DOM.

```html
<!DOCTYPE html>
<html>

<body>

    <p>HTML webpage using DOM.</p>

    <span onclick="myFunction()">click Me</span>

    <script>
        function myFunction() {
            var x = document.createElement("VAR");
            var t = document.createTextNode("Hello this is dom..");
            x.appendChild(t);
            document.body.appendChild(x);
        }
    </script>

</body>

</html>
```

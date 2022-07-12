# Assignment Week 2 Day 2

## Theory:

1. ### What are anonymous function in JavaScript?
       
     In JavaScript, an anonymous function is that type of function that has no name or we can say which is without any name. The main focused point is that there is no function we have declared before. It is just the keyword function and parenthesis
     
```js
let x = function () {  
    console.log('It is an anonymous function');  
};  
x();  
```  
  - The function is created for displaying the message as its output.
  - We have used the function keyword, which is used when we create any function in JavaScript, and the function is assigned to a variable x using 'let'.

```js
function normale() {  
  console.log('It is a normal function');  
}  
normale(); 
``` 


2. ### Explain strict comparision and abstract comparision in JavaScript.

    - (Abstract) == or === (Strict) Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different.
    
  - Strict comparision
 ```js
   console.log(3 === "3"); // false
 ```
 
   - Abstract comparision
 ```js
   console.log(3 == "3"); // true
 ```


3. ### Difference between arrow and regular functions.

     - Regular functions are constructible and they can be called using the new keyword
     - The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions
     - Arrow function do not have their own this but regular function have.
     
  ->Syntax of regular functions:-

```js
let x = function function_name(parameters){
   // body of the function
};
```
- Example of regular function:-
       
```js
let square = function(x){
  return (x*x);
};
console.log(square(9));  // output: 81
```

   ->Syntax of arrow functions:-

```js
let x = (parameters) => {
    // body of the function
};
```

- Example of arrow function:-

```js
var square = (x) => {
    return (x*x);
};
console.log(square(9));  // output: 81
```


4. ### What is Hoisting in JS?

     In JavaScript, hoisting allows you to use functions and variables before they're declared. JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. 
     - Hoisting allows functions to be safely used in code before they are declared.


5. ### JavaScript is a garbage collected programming language, explain how?

      The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.When it comes to programming, Garbage Collection means cleaning the memory spaces which don’t contain useful data and then reallocating those cleared memory to some other data which is both active and useful.
      - Use the allocated memory (read, write)
  Using values basically means reading and writing in allocated memory. This can be done by reading or writing the value of a variable or an object property or even passing an argument to a function.
      - This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.
      
      
6. ### Explain Shallow vs Deep copy in JS?
     
     A shallow copy means that the copied variable values is still connected to the original variable while a deep copy means that those values are now disconnected.
       
     A deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected. 
     
 - Shallow copy:
```js
// Method: Use slice()

let list = ['a', 'b', 'c', 'd'];
let box = list.slice();
console.log("list-> ",list, "box-> ", box);

console.log("After changing some values ")

list[2] = 'e';
box[3] = 'f';
console.log("list-> ",list, "box-> ", box);
```

 - Deep copy:
     
```js
 let student = {
    subject: 'JS',
    marks: 100,
    details: {
        name: 'developer',
        age: 23
    }
}

let record = JSON.parse(JSON.stringify(student)); //Deep Copy

console.log("After changing some values ")

student.details.age = 30;
record.marks = 50;
console.log("student", student, "\nrecord", record);
```    


7. ### What is Object.freeze ?

     - Freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
     - Object.freeze() is used for freezing objects and arrays.
     - Object.freeze() is used to make an object immutable.
     
```js
  Object.freeze(obj)
```

<hr>

## Programs:

1. ### Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

```js
   function radomInTwoRange(min1, max1, min2, max2) {
     var ranges = [
       {
         min: -100,
         max: 0,
       },
       {
         min: 800,
         max: 900,
       },
     ];

     ranges.forEach((e) => {
       console.log(Math.floor(Math.random() * (e.max - e.min + 1) + e.min));
     });
   }
```

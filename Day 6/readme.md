# Assignment 1 Week 2 Day 1

# Theory:
1.  ### What is Javascript?
    
       Javascript or JS is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is an interpreted language. Thus, it doesn't need to be compiled. JavaScript renders web pages in an interactive and dynamic fashion.

2.  ### What is the difference between _let_ and _var_?
           
       - let is block-scoped. var is function scoped. let does not allow to redeclare variables. var allows to redeclare variables.
       
 #### let is Block Scoped 
   
```js
function func() 
{
    let x = 10; 
 
    if(x === 10) 
    {
        let y = 20; 
 
        console.log(x); //Output 10
        console.log(y); //Output 20
    }
     
    console.log(x); // Output 10
    console.log(y); // ’undefined'
}
 
 
func();
 ``` 
 
  #### var is Function Scoped
  

```js
  function func() 
{
    var x = 5;
 
    if(1) 
    {
        var y = 10; 
 
        console.log(x); //Output 5
        console.log(y); //Output 10
    }
     
}
 
func();
```

3.  ### Why do prefer _const_ over _var_?
     
     - The usage of const makes sure that the variable binding is immutable but the object itself can change whenever we like.  Therefore, every const variable must be assigned a value at the time of declaration.
     
4.  ### What is the use of JavaScript in Web Browsers?
   
     - JavaScript is a light-weight object-oriented programming language that is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language. JavaScript enables dynamic interactivity on websites when it is applied to an HTML document.

5.  ### What are Objects?
 
     - A JavaScript object is a collection of named values,JavaScript variables can also contain many values. 
     -  Objects are one of the available data types in JS. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor.
    To create a sample object:

    ```js
    const person = {
      name: "John Doe",
      age: 52,
      jobStatus: "Retired",
    };
    ```

6.  ### What is an Array and how is it different from an Object in JavaScript?

      - Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.
        - Arrays in JS are resizable and can contain a mix of different data types.
        - JS arrays are not associative arrays.
        - Arrays in JS are zero-indexed.
      
7.  ### What is a function?
     A function is a block of code that is designed to perform a specific task.
    The usage of a function also helps in re-use of code rather than writing it each time we wish to use it.

    - To declare a function:

    ```js
    function nthFibonacci(inpNum) {
      if (inpNum <= 1) return inpNum;
      return nthFibonacci(inpNum - 2) + nthFibonacci(inpNum - 1);
    }
    ```
    
8.  ### How can we implement call by value and call by reference in Javascript?
    
     Call by Value: Suppose there is a variable named “a”. Now, we store a primitive value(boolean, integer, float, etc) in the variable “a”.
```js
    let originalVal = 10;
    function updateOriginalVal(originalVal) {
      originalVal += 10;
      console.log(originalVal);
    }

    updateOriginalVal(originalVal); // 20
    console.log(originalVal); // 10
 ```
 
- This is call by reference.
        
```js
    // By reference (all objects (including functions))
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

      The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
      
11. ### Why do we need DOM?

      The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page

      
      

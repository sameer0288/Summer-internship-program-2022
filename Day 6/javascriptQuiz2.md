# Assignment 1 Week 2 Day 1

## Theory:

1. ### Why do we use functions in JavaScript?
       
      A function allows you to define a block of code, give it a name and then execute it as many times as we want. A JavaScript function can be defined using function keyword.
      JavaScript functions are used to perform operations. We can call JavaScript function many times to reuse the code.

   - Advantage of JavaScript function
       There are mainly two advantages of JavaScript functions.

        1. Code reusability: We can call a function several times so it save coding.
        2. Less coding: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.
        
        
2. ### What is Function Invocation?    

      Defining a new function does not make the function run. To execute the function, we need a function call. This is also known as a function invocation.
            
        function myFunction( var ) {
          return var;
         }
         myFunction( value );
        
        
3. ### Does a function behave like an object in Javascript? Prove it by an example.    

     In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects
        
      - Yes, in JS, a function does indeed behave like an object.
      - This is because essentially, a function IS an object but with special properties and methods. 
      

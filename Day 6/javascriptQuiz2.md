# Assignment 2 Week 2 Day 1

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
        
         Example:
      
             // Function declaration.
               function showFavoriteIceCream() {
                   const favIceCream = 'chocolate';
               console.log(`My favorite ice cream is ${favIceCream}`);
               }
                showFavoriteIceCream.flavours = ['chocolate', 'vanilla', 'strawberry'];

             // Let's log the showFavoriteIceCream function.
                console.log(showFavoriteIceCream);

             // Log
             // { [Function: showFavoriteIceCream]
             // flavours: [ 'chocolate', 'vanilla', 'strawberry' ] } -> property assigned
             
             
4. ### What are Events in Javascript?

     The change in the state of an object is known as an Event. In html, there are various events which represents that some activity is performed by the user or by the browser. When javascript code is included in HTML, js react over these events and allow the execution. This process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.
     
     
5. ### What is a string?

      A string is any series of characters that are interpreted literally by a script. For example, "hello world" and "LKJH019283" are both examples of strings. 
      > The first character is in position 0, the second in 1, and so on.
      
  
6. ### What is an array? Is it static or dynamic in Javascript? 

      A Dynamic Array is a list data structure that has a variable size. It automatically expands when you try to add more elements after creating it. The dynamic array also permits adding or removing elements from the array at run-time.
      - JavaScript has dynamic arrays as neither their size is predetermined, nor the type of data.


7. ### Difference between Map and Set?

   - Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
    
     Methods and properties are:

     - new Map() – creates the map.
     - map.set(key, value) – stores the value by the key.
     - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
     - map.has(key) – returns true if the key exists, false otherwise.
     - map.delete(key) – removes the value by the key.
     

   - A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
    
      Its main methods are:

     - new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
     - set.add(value) – adds a value, returns the set itself.
     - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
     - set.has(value) – returns true if the value exists in the set, otherwise false.


8. ### Difference between Array and Map?

     - Array
     > An Array is a collection of elements of the same data type.
     
     > The indices of the list are integers starting from 0.
     
     > Array’s size must be specified during the array declaration.

     - Map
     > The map is a hashed structure of key and value pairs
     
     > The elements are accessed via key-values.
     
     > The map’s size is dynamic.

9. ### What are array methods? List a few names?

    - push(... items) – adds items to the end,
    - pop() – extracts an item from the end,
    - shift() – extracts an item from the beginning,
    - sort(): Sorts the elements of an array.
    - unshift(... items) – adds items to the beginning.
    - reverse(): Reverses the order of the elements in an array
    - indexOf() Search the array for an element and returns its position


10. ### In how many ways can we traverse through an array in Javascript?

- There are multiple ways one can iterate over an array in Javascript. The most useful ones are mentioned below :
1. Using while loop.
2. Using forEach method.
3. Using every method.
4. Using map.


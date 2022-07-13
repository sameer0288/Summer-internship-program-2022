# Assignment 1 Week 2 Day 3

## Theory:

1. ### What are the basic data types in TypeScript?
      
   | Buit-in Data Type | Keyword     |      Description             |
   | ----------------- | ----------- | -----------------------------|
   | Number            | number      | It is used to represent both Integer as well as Floating-Point numbers|
   | Boolean           | boolean     | Represents true and false    |
   | String            |  string     | It is used to represent a sequence of characters  |
   | Null              |  null       | It is used when an object does not have any value |
   | Undefined         | undefined   | Denotes value given to uninitialized variable     |
   
   
2. ### What is Generic data type.

     A generic type is a generic class or interface that is parameterized over types.
   - A generic types allow you to write a general, generic class (or method) that works with different types, allowing for code re-use.
   
3. ### What is type inferring in TS. 

     TypeScript infers types of variables when there is no explicit information available in the form of type annotations.
     When a type inference is made from several expressions, the types of those expressions are used to calculate a “best common type”.
     
     Example:
     
   ```
   let x = [0, 1, null];
   
   let x: (number | null)[]
   ```
   
   
4. ###  What are the possible ways to define typing for functions.

      In TypeScript, there are multiple syntaxes for declaring the type of a function:
      
  - Method signatures.
     
        The method signature syntax is probably the most straightforward to use. When defining an object type
```
interface Date {
  toString(): string;
  setTime(time: number): number;
  // ...
}
```

   - Function type literals.
        
       Function type literals are another way to declare the type of a function. They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function:
          
```
interface Array<T> {
  sort(compareFn?: (a: T, b: T) => number): this;
  // ...
}
```          
          
  - Object type literals with call/construct signatures.
    
       In JavaScript, functions are nothing but special objects than can be called. This fact is reflected in the syntax of object type literals: they describe the shape of an object, which also happens to have a call signature:
  
```
interface Date {
  toString(): string;
  setTime(time: number): number;
  // ...
}
``` 


5. ###  How to define Generic type for Classes.
        
     A Generic class simply means that the items or functions in that class can be generalized with the parameter(example T) to specify that we can add any type as a parameter in place of T like Integer, Character, String, Double or any other user-defined type.
     - These classes are known as parameterized classes or parameterized types because they accept one or more parameters.

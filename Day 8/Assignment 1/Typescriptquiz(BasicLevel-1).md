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
    
     For example:

   ```ts
   class StudentInfo<T, U> {
     private Id: T;
     private Name: U;

     setValue(id: T, mame: U): void {
       this.Id = id;
       this.Name = name;
     }

     display(): void {
       console.log(`Id = ${this.Id}, Name = ${this.Name}`);
     }
   }

   let student1 = new StudentInfo<number, string>();
   student1.setValue(123, "Sameer");
   student1.display();
   ```

     
    <hr>

## Program:

1. ### Define the types in typescript for the given following JavaScript code.

   Todo:

   - Define type/interface for a single Todo object.
   - Define type for each function.
   - Do not use `any` (TS Data Type) type of typescript.

   Code(Js):

```js
   var todos = [];
   function add(name, description) {
     return todos.push({ name: name, description: description, done: false });
   }
   function remove(index) {
     return todos.splice(index, 1);
   }
   function list() {
     todos.forEach(function (todo, index) {
       console.log(index + " -" + todo.name);
     });
   }
   function update(index, name, description) {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }
   ```
   Solution :
   
```ts
   class Entry {
     name: string;
     description: string;
     done: boolean;
   }

   var todos: Entry[] = [];

   function add(name: string, description: string): number {
     return todos.push({
       name: name,
       description: description,
       done: false,
     });
   }

   function remove(index: number): Entry[] {
     return todos.splice(index, 1);
   }

   function list(): void {
     todos.forEach(function (todo: Entry, index: number) {
       console.log(index + " - " + todo.name);
     });
   }

   function update(index: number, name: string, description: string): Entry {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }

   console.log(add("Go to College", "Do some Assignments"));        // 1
   list();        // 0 - Go to College
```

# Programming Basics
Date: 2022, July 7

## Class and Object
Class is a template to create other objects
Object is a runtime instance of class
## Function
Function is a block of code that can be reusable
## Scope
There are two types of scope

--Global Scope

--Local Scope

## Conditionals
In programming there are conditional statements that we use when we have to evaluate conditions in the programming.

In Javascript there , when we deal with conditions we deal with Truthy or Falsy values.

Falsy values are the values like Empty String , 0 , null, undefined, NaN (Not a number). All the values other than these values are termed as truthy values.


# Equality Operator in javascript
## Javascript comprises of 2 types of equality operator

==

===

The == operator actually looks for the value of variable and does not do type checking. For eg:

console.log(1 == '1')
returns a true value. But, in case of array

console.log([1] == [1])
returns false.

After this, The === operator is a strict equality operator which performs the strict reading of variable and will return true only if both the enitity point towards a specific reference in the memory.

    const a = 10;
    const b = 10;
    const c = '10';
    const d = a;
Now,

console.log(a === b);
// Returns false
console.log(a == b);
// Returns true
console.log(c === b);
// Returns false
console.log(a === a);
// Returns true

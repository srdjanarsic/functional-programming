# Functional programming

This page includes my personal notes about functional programming and related things.

* [Introduction](#introduction)
* [First class](#first-class)
* [High order functions](#high-order-functions)
* [Pure functions](#pure-functions)
* [Referential transparency](#referential-transparency)
* [Arity](#arity)
* [Carrying](#carrying)
* [Partial application](#partial-application)
* [Function composition](#function-composition)


## Introduction

Functional programming is a programming paradigm based on concept of pure function, immutable data.  
In functional programming we do not use shared state, mutable data and functions with side effect.  
Functional programming uses declarative style/paradigm - it uses expressions instead of statements.   

**Benefit**

* Less bugs due to predictable behavior
* Reusability due to interchangeability
* Confidential parallelism due to the deterministic behavior 

## First class

Function in JavaScript is a first class citizen. What does it means?  
In JavaScript functions can be used in the same way as any other type e.g. string.
Function can be:

 * assigned to variable, 
 * added to array, 
 * assigned to object property.
 * function can be passed as argument to another function
 * function can be returned from another function (using return keyword)

These behaviors enables functional paradigm in JavaScript.

## High order functions

Each functions that takes function as an argument or return function is a high order function.

There are some built in functions in JavaScript like `.map()`, `.filter()`, `.reduce()` exposed on array object.

```js
var arr = [1,2,3,4,5,6,7,8,9,10];

//filter
var evenArr = arr.filter(v => v % 2 == 0);
var oddArr = arr.filter(v => v % 2 == 1);

//map
var multiplyArr = arr.map(v => v * v);

//reduce
var reduceArr = arr.reduce((acc, v) => acc + v);
```

## Pure functions

Pure function is function that always returns the same output for the same input. It does not modify input and does not perform any side work.

## Referential transparency

Variable never change once it is defined. 

```js
// statement
x = x * 5;  // if we change x it will change the assigned value

// function
(x) => x * 5  // this does not change input x implicitly x and thus no side effect.
```

## Arity

Arity is a number of argument that function takes.  

## Carrying

Carrying is technique of translating functions that takes more that one arguments into sequence of functions where each function take only one argument. 
Carried function 

```js
//source
var calc1 = function (a,b,c){
    return a + b + c;
}

// target ( arrow style )
var calc2 = a => b => c => a + b + c;

// target
var calc3 = function(a){
    function(b){
        function(c){
            return a + b + c;
        }
    }
}

// Uncarrying
var calc4 = (a, b, c) => calc(a)(b)(c)

```

## Partial application

In the case of **Application** we apply argument to function in order to get return value.
In the case of **Partial Application** we apply some of its arguments and gets the function for later use. 
In other words, Partial Application enables passing arguments to returned function scope (due to closure nature).   

## Function composition

Function composition is a concept that allow as to combine two or more function to produce a new function.


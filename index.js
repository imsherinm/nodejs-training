//! what is js
// ***  high level
// ***  single threaded
// ***  garbage collected
// ***  interpreted || JIT
// ***  dynamic language
// ***  non-blocking event loop
// ***  prototype based
// ***  multi paradigm

//! execution of js

/*  All JavaScript code needs to be hosted and run in some kind of environment. In most cases, that environment would be a web browser. */

//? 1. Parser

//? js run env

//? 2. JavaScript Engine
//V8 engine for Google chrome, SpiderMonkey for Firefox, and Chakra for Internet Explorer. ECMA

//?  Execution Contexts
//engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.

//? Global Execution Context (GEC)
//The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.
//? Function Execution Context (FEC)
// Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC)
//within the GEC to evaluate and execute the code within that function.
//? Execution Contexts Created
// 1. Creation Phase
//          1.1 Creation of the Variable Object (VO)
//              1.1.1 Hoisting in JavaScript
//                  1.1.1.1 Function Hoisting
//                  1.1.1.2 Variable Hoisting
//          1.2 Creation of the Scope Chain
//              1.2.1 closure
//          1.3 Setting the value of the "this" keyword
//              1.3.1 The Global Context
//              1.3.2 The Function Context
// 2. Execution Phase
//      2.1 Call Stack
//      2.2 event loop
//      2.3 callback queue
//      2.4 micro task queue

// var vs let and const

// 🥇🥇🥇🥇🥇🥇 scope 🥇🥇🥇🥇🥇🥇🥇🥇
// Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.

// 💜 var: global and functional scope
// var name = 'ana';

// function sayMyName(){
//   var name = 'maria';
//   console.log(`my name is: ${name}`)
// }

// console.log(name) // ana
// sayMyName() // my name is: maria

// the same for let
// let name = 'ana';

// function sayMyName(){
//   let name = 'maria';
//   console.log(`my name is: ${name}`)
// }

// console.log(name) // ana
// sayMyName() // my name is: maria

// 💜💜 let/const: block scope
// if and for loop don't have scope when used with var

// for (var i = 1; i <= 4; i++) {
//   console.log(`Iterations inside the loop: ${i}`);
// }

// console.log(`After the loop: ${i}`);

// Iterations inside the loop: 1
// Iterations inside the loop: 2
// Iterations inside the loop: 3
// Iterations inside the loop: 4
// After the loop: 5

// if and for loop have scope when used with let/const
// for (let i = 1; i <= 4; i++) {
//   console.log(`Iterations inside the loop: ${i}`);
// }

// console.log(`After the loop: ${i}`);

// Iterations inside the loop: 1
// Iterations inside the loop: 2
// Iterations inside the loop: 3
// Iterations inside the loop: 4
// ReferenceError: i is not defined

// 🥉🥉🥉🥉🥉🥉🥉🥉🥉🥉🥉🥉🥉

// re-declaring and updating

// 1. var - can be re-declared and updated
// 2. let - can't be re-declared and can be updated

var price = 100;
var price = '99';

console.log(price); // 99

// can't be re-declared
// let price = 100;
// let price = "99"; // Identifier 'price' has already been declared

var priceWtax = 555.99;
priceWtax = 89;

// can be updated
// let priceWtax = 555.99;
// priceWtax = 89;

console.log(`price with tax is: ${priceWtax}`);
// price with tax is: 89

// IS THIS ALWAYS GOOD?

var name = 'Ironhacker';
console.log(`Name before if statement: ${name}`);

if (true) {
  var name = 'Ant';
  console.log(`Name inside if statement: ${name}`);
}
console.log(`Name after if statement: ${name}`);

// Name inside if statement: Ant
// Name after if statement: Ant

// _+_+_+_+_+_+_+_+_+_+_
// it is so easy to re-declare variables declared with "var". if we have declared variable somewhere before,
// it means we just "fu****" our code.
// _+_+_+_+_+_+_+_+_+_+_

// ***********
// That’s why let and const are here to prevent this and we will see now how.
// ***********

// hoisting

// _+_+_+_+_+_+_+_+_+
// Variables declared using var are moved to the top if it’s scope (we say - hoisted) and initialized with a
// value of undefined. Let's see what this means.
// _+_+_+_+_+_+_+_+_+
console.log(`students name is: ${studentName}`);
var studentName = 'joana';

//  variables declared with let are hoisted to the top as well but they are not initialized. So using var we would
// get the value of undefined but using let we get a Reference Error.

// VARIABLES declared with let and const hoist but you cannot access them before the actual declaration is evaluated
// at runtime.

// console.log(`studentLastName is: ${studentLastName}`); // ReferenceError: studentLastName is not defined
let studentLastName = 'xyz';

// _+_+_+_+_+_+_+_+_+_+_+
// To recap and compare: let gives us much more security because when variables are declared with let, if declared
// in different scopes, are two different variables while using var the second one will redeclare the first one. At
// the same time, let doesn’t allow having the same named variables in the same scope while, as we saw, with var that
// is possible to happen and no error will be thrown.
// _+_+_+_+_+_+_+_+_+_+_+

// process of compilation - this is when your code gets translated into machine understandable language so machine
// (your computer) can process it. This language is bunch of 0s and 1s.

// lexical environment - During compile phase, just microseconds before your code is executed, it is scanned for
// function and variable declarations. All these functions and variable declarations are added to the memory inside
// a JavaScript data structure called Lexical Environment. So that they can be used even before they are actually
// declared in the source code.

// A lexical environment is a data structure that holds identifier-variable mapping.

// It is object that holds variable/function name as properties and value is reference to actual object or primitive value.
// Example:
// LexEnv = {
//   // Identifier:  <value>,
//   name: value,
//   // Identifier:  <function object>
//   sayMyName: function
// }

// _+_+_+_+_+_+_+_+_+_+_+_+_+
// So in short, a lexical environment is a place where variables and functions live during the program execution.
// _+_+_+_+_+_+_+_+_+_+_+_+_+

// function declaration gets hoisted
sayHello();
function sayHello() {
  console.log('Hello there!');
}

// function expression doesn't get hoisted

// greeting(); // ReferenceError: greeting is not defined
const greeting = function() {
  console.log('Hi!');
};

// even if we use var it won't work since greeting is a var variable, so the engine will assign is the undefined
// value during hoisting.

// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+
// Remember JavaScript only hoist declarations, not initializations. That is, during compile time, JavaScript only
// stores function and variable declarations in the memory, not their assignments (value).
// _+_+_+_+_+_+_+_+_+_+_+_+_+_+_

// When JavaScript engine finds a var variable declaration during the compile phase, it will add that variable to the
// lexical environment and initialize it with undefined and later during the execution when it reaches the line where
// the actual assignment is done in the code, it will assign that value to the variable.
// So the initial lexical environment for the above code will look something like this:
// LexEnv = {
//   name: undefined
// }

// And when the engine reaches the line (during execution) where the actual assignment is done, it will update
// the value of the variable in its lexical environment. So the lexical environment after the assignment will look
// like this:
// lexicalEnvironment = {
//   name: 'maria'
// }

// Why do we get value of undefined with var but we get Reference Error with let?

// _+_+_+_+_+_+_+_+_+_+_+_+_+_
// All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are
// initialized with undefined, but let and const declarations remain uninitialized.
// _+_+_+_+_+_+_+_+_+_+_+_+_+_

// They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript
// engine. This means you can’t access the variable before the engine evaluates its value at the place it was declared
// in the source code. This is what we call “Temporal Dead Zone”, A time span between variable creation and its
// initialization where they can’t be accessed.

// Hoisting Class Declaration
// Just as let and const declarations, classes in JavaScript are also hoisted, and just as let or const declarations,
// they remain uninitialized until evaluation. So they are also affected by the “Temporal Dead Zone”.

const ironhacker = {
  firstName: 'sandra',
  city: 'miami',
  course: {
    type: 'WD',
    bootcamp: 'PT',
    start: 'june 2019',
    end: 'november 2019',
    careerChanger: true
  }
};
// What we’re doing is creating variables using the same names as the properties of our object.

const {
  firstName,
  city,
  course: { type, bootcamp, start, end, careerChanger }
} = ironhacker;

console.log(`Name: ${firstName}.`);
console.log(`Bootcamp: ${bootcamp}.`);
console.log(`Start date: ${start}.`);

// Arrays

const ironhackers = ['arthur', 'kevin', 'vero', 'kayla'];

const [uxers, ...developers] = ironhackers;

// console.log(developers);

function printName({ firstName, lastName }) {
  console.log(`Name isssss: ${firstName} ${lastName}`);
}

let personObj = {
  firstName: 'John',
  lastName: 'Doe'
};

// printName(personObj); //Name : John Doe

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  // change code below this line
  const [a, b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// what are ...?

// what is diff between spread and rest operator?

// Array/Object spread operator

// Assume you have the following object:
const adrian = {
  fullName: 'Adrian Oprea',
  occupation: 'Software developer',
  age: 35,
  website: 'https://oprea.rocks'
};
// Let’s assume you want to create a new object(person) with a different name and website, but the same occupation and age.

const bill = {
  ...adrian,
  fullName: 'Bill Gates',
  website: 'https://microsoft.com'
};
// console.log(adrian)
// console.log(bill)

const uxers = ['arthur', 'miakel'];
const devs = ['alex', 'fabricio'];

// const allStudents = [];

// uxers.forEach(oneUxer => allStudents.push(oneUxer));

// devs.forEach(oneDev => allStudents.push(oneDev));

// console.log(`All: ${allStudents}`);

const all = [...uxers, ...devs];
// console.log(all);

// rest:

function calcSum(someElements) {
  console.log(arguments);

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;

  // return someElements.reduce((a, b) => a + b); // error (we should use rest operator (the same as spread (...)))
}

calcSum(3, 5, 9);

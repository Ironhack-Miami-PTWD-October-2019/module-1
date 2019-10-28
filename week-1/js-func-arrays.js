// create => function declaration
function printCoffeePrice(){
  console.log("Coffee price is 5.")
}
  
// call => invocation
printCoffeePrice()

function printSandwichPrice(){
  console.log("Coffee price is 8.")
}

printSandwichPrice()

// when declaring function => PARAMETER
// "price" we pass in the func declaration is a placeholder, it can be any word
function printProductPrice(price){
  console.log(`Product price is: ${price}`)
}

// when calling the function => ARGUMENT
// 54 is the real value we pass in
printProductPrice(54)

function printInfo(product, price){
  return `${product} price is ${price}`
  // console.log(`${product} price is ${price}`); // this doesn't exist for this function because it comes after the return
}

// printInfo("coffee", 7)
printInfo("sandwich", 17)
// printInfo("milk", 3)
// printInfo("gas", 6.5)

const sandwich = printInfo("sandwich", 17);
console.log(`hello: ${sandwich}`)

const milk = printInfo("milk", 3)
console.log(`hello 1: ${milk}`)

console.log("=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=")
// console.log(`Name is: ${name}`); // Name is: undefined
// const name = "ana"; // with var is hoisted and can be used before it's declared. however, only declaration is hoisted, not the value itseld

multiply(4, 5) // we can call this function before it's declared
// ✅ function declaration is hoisted all the way to the top of the code doc
function multiply(num1, num2){
  return num1 * num2
}

// function expression
// addition(5, 6) // 🚫 this doesn't work since it's not hoisted 🚫
const addition = function(a, b){
  return a + b
}
// practice time - 1:
// Create a function that returns whether a 
// student's name has an odd or even number of letters
// return a string '<Name> has an even/odd number of letters'

function isNameOddOrEven(theName){
  // if (!theName) <===> if(theName.length === 0)
  if (!theName) return `Please enter the valid name!`
  if( theName.length % 2 === 0) return `${theName} has even number of letters`
  else return `${theName} has odd number of letters`
}
isNameOddOrEven("")

// practice time - 2:
// Create a function doTheMath(a, sign, b) that will return the result of the mathematic operations of a operator b
// signs: +, -, *, /, %, **

// a, b, sign => are just PLACEHOLDERS, it can be any word
function doTheMath(a, sign, b){
  switch(sign){
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "Please insert the valid operator!"
  }
}

// doTheMath(3, "*", 5) // 15
doTheMath(5, "/", 2) // 2.5

// -=-=-=-=-=-=-=-=-=-=-= arrow functions =-=-=-=-=-=-=
// function multiply(num1, num2){
//   return num1 * num2
// }

// const multiply1 = x => {} // => if ony one parameter we don't need () around x

// const multiply1 = (x,y) => {
//   return x * y
// }

const multiply1 = (x,y) => x * y // if return is only one line, we don't have to use word "return" and we can skip curly braces since arrow function returns by default if used with no curly braces

multiply1(7,2); // 14

// -=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-=

const animals = ["dog", "cat", "fish"];

const mixedArr = [3, "fish", true, [], { name: "sandra" }, "", null, ["table", "chair"]];

for(let i = 0; i < mixedArr.length; i++){
  console.log(`el: ${mixedArr[i]}`);
}
console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+")

// to access each elem of the array, we can use .forEach() method

// this is example of the old syntax:
// mixedArr.forEach(function(elem){
//   console.log(`The elem is: ${elem}`)
// })

// this is ES6 way of doing the same as above:
mixedArr.forEach(elem => console.log(`The elem is: ${elem}`))

// add elements to array
// .push() adds elements to the end of the array

animals.push("tiger");
console.log(animals); // [ 'dog', 'cat', 'fish', 'tiger' ]

// add elements to array
// .unshift() adds elements to the beginning of the array

animals.unshift("monkey");
console.log(animals); // [ 'monkey', 'dog', 'cat', 'fish', 'tiger' ]

// inserts an element at a specified index
animals.splice(2, 0, "horse");
console.log(animals); // [ 'monkey', 'dog', 'horse', 'cat', 'fish', 'tiger' ]

animals.splice(3, 2, "lion"); // removes cat and fish and replaces them with lion
console.log(animals); // [ 'monkey', 'dog', 'horse', 'lion', 'tiger' ]

// remove element at specified index
animals.splice(2,1);
console.log(animals); // [ 'monkey', 'dog', 'lion', 'tiger' ]

// remove last element
animals.pop();
console.log(animals); // [ 'monkey', 'dog', 'lion' ]


// remove the first elem
animals.shift();
console.log(animals); // [ 'dog', 'lion' ]

// to make a copy of an array, you can use 
// 1. spread operator
// 2. slice()
// read here for more: https://stackoverflow.com/questions/3978492/fastest-way-to-duplicate-an-array-in-javascript-slice-vs-for-loop/20547803

// why we would make a copy of an array? - because we want to preserve the original array and keep its original state and make all the changes in the copied array

const originalArr = [1, 3, 5];
console.log(`originalArr: ${originalArr}`)
const copyOfOriginal = [...originalArr]
console.log(`copyOfOriginal: ${copyOfOriginal}`)
// 3 ways to declare variables in JS:
// var 
// let 
// const

let student; // var. declaration (saving a spot in memory)
console.log("Value is: ", student); // Value is:  undefined
student = "kevin"; // var. assignment (initialization) - giving it a value

let firstName = "sandra"; // declaration and initialization in the same time

// 🚨can't name it with number starting nor with JS reserved words:
// let 3students 🚫🚫🚫
// class, let, const, function, for, ... 🚫🚫🚫

// multiple var. declarations
let price, tax, total;

// use camelCase (but if you want to use snake_case is OK, just be consistant)
let totalPrice // camelCase
let total_amount // snake_case


// this is single line comment
/* this is
multiple lines
comment */

// numbers are immutable data types - can't change their value, you are actually creating a new variable with the same name 
price = 7;
price = 9;


// double quotes combined with single quotes (string)
let pizza = "margaritha is 'the best' ";
// console.log(pizza); margaritha is 'the best' 
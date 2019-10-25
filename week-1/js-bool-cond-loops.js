const str = "this is our test string";

// console.log(`This is the first letter: ${str[0]}`);
// the same as above ^^^^
// console.log("This is the first letter:", str[0]);
// the same as above ^^^^
// console.log("This is the first letter:" + str[0]);

str[0] = "T";
console.log(`Is string changed: ${str}`); // Is string changed: this is our test string

let num = 3;
console.log(typeof num);
num += 11 // num = num + 11 // number
console.log(`num 1: ${num}`); // 14


num = "3"; // now our num is type of string so math operations will "fail"
console.log(typeof num); // string

// adding to a string => concatenation
num += "11"; // num = num + 11 => string
console.log(`Num 2: ${num}`); // 311

// length is not a method
console.log(`How long is this string: ${str.length}`); // 23

// ✅check if string includes substring or character: 
// includes() ===> returns true or false
// indexOf() ===> returns the position where character is found or -1 if not found

console.log(`CHECK INCLUDES: ${str.includes("stri")}`); // true
console.log(`CHECK INDEXOF: ${str.indexOf("string ")}`); // -1 (false)
console.log(`CHECK INDEXOF: ${str.indexOf("string")}`); // 17 (false)

// ✅ access character in the string charAt(index)

console.log(str.charAt(0)); // t

// ‼️ string methods never mutate the string
// substring(start, end)️️️
// substr(start, howManyFromStart)
// slice(start, end) and can accept negative numbers (counts from the last index) 

let useSubstring0 = str.substring(5, 10);
console.log(useSubstring0); // is ou ==> the last is not included, meaning the "end" is not inclusive

let useSubstring = str.substring(5, 11);
console.log(useSubstring); // is our

let useSubstring1 = str.substring(-11, 5); // negative number is zero for substring(), so this is the same as (0, 5)

console.log(`hello: ${useSubstring1}`); // as if starts with zero ==> hello: this 

let useSubstring2 = str.substring(5); // from this position all the way till the end of the string if we don't pass the end value
console.log(`What if we pass only start to substring: ${useSubstring2}`); // What if we pass only start to substring: is our test 

let useSubstr = str.substr(5, 11);
console.log(useSubstr); // is our test

let useSlice = str.slice(5, 11);
console.log(useSlice); // is our
let useSliceWithNegative = str.slice(-4);
console.log(useSliceWithNegative); // ring 

// **************************************************
// - substring's parameters are reversible, as it will always use its smallest parameter value as the start index and largest value as the stop index. 
// - substring will treat a negative start index as 0.
// - slice extracts from the end of the string if the starting index is negative.
// **************************************************

// boolean - true or false

// 🙅‍♀️falsy:
// false
// 0
// "" empty string
// undefined
// null
// NaN


// 🎯 truthy:
// "0"
// "false"
// [] or {}

// PASS THE truthy OR THE FALSY VALUES TO THE IF-ELSE STATEMENT AND SEE WHICH ONES COME OUT AS TRUE AND WHICH ONE AS FALSE:
// if(NaN){
//   console.log("This is soooo true!");
// } else {
//   console.log("This is false!")
// }

// IF RETURN IS IN ONE LINE, YOU DON'T HAVE TO USE CURLY BRACES IN IF-ELSE:
// if(true) console.log("This is soooo true!");
// else console.log("This is false!");

// ternary operator
true ? console.log("This is soooo true!") : console.log("This is false!");


// EXAMPLE OF THE MOST EXCLUSIVE RULE MUST COME FIRST:
for(let i = 1; i<= 20; i++){
  if(i % 3 === 0 && i % 5 === 0  ) console.log("FIZZBUZZ")
  else if(i % 3 === 0) console.log("FIZZ")
  else if( i % 5 === 0 ) console.log("BUZZ")
  else console.log(i);
}

// == checks only the value (loose equality)
//  === checks the value and the type (strict equality)
let x = 3;
let y = "3"
// if (x == y) console.log("The same")
if (x === y) console.log("The same")
else console.log("not the same")


// amsterdam 9
// barcelona 9
// berlin 6
// lisbon 6
// madrid 6
// mexico city 11
// miami 5
// paris 5
// sao paulo 9

let campus = "Miamiii";
switch(campus.length){
  case 5:
    console.log("Miami, Paris");
    break;
  case 6:
    console.log("Berlin, Madrid, Lisbon");
    break;
  case 9:
    console.log("Amsterdam, Sao Paulo, Barcelona");
    break;
  case 11:
    console.log("Mexico City");
    break;
  default:
    console.log("A new Ironhack campus is opening? 🚀")
    break;
}

let bootcamp; // undefined
console.log(`Bootcamp before is: ${bootcamp}`); // Bootcamp before is: undefined
bootcamp = "Web Dev";
console.log(`Bootcamp after is: ${bootcamp}`); // Bootcamp after is: Web Dev


// const hello; ==> 🚫 this doesn't work since constant variable needs to be initialized in the moment of declaration

let r = "hello";
console.log(r/2); // NaN
console.log(`Is this divisible? ${r/2}`); // NaN
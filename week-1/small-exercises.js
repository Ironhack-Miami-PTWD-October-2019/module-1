// 1. turn string to number
let price1 = "30.14xxx";
let price2 = "45";

console.log(`price2 before: ${typeof price2}`);
// price2 = Number(price2);
// price2 = +price2;
price2 = parseInt(price2)

console.log(`price2 after: ${typeof price2}`);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
console.log(`price1 before: ${typeof price1}`);
// price1 = Number(price1); // doesnt work NaN
// price1 = +price1; // doesnt work  NaN
// price1 = parseInt(price1) // 30 number doesnt work
price1 = parseFloat(price1); //  30.14 number

console.log(`price1 after: ${price1} ${typeof price1}`);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
// 2. given the number as string, remove comma and add dot
let num = "2,45";
console.log(`num before: ${num} ${typeof num}`)
// num = +num.replace(",", "."); // 1st way
num = Number(num.split(",").join(".")); // 2nd way
console.log(`num after: ${num} ${typeof num}`);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

// 3. turn number to string
let price3 = 55;
console.log(`price3 before: ${price3} ${typeof price3}`)
price3 = price3.toString();
// price3 = `${price3}`;
console.log(`price3 after: ${price3} ${typeof price3}`)
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// 4. write if-else or switch that will console.log() message if someone is eligible to drink, and send them warning if they are not eligible to drink

let age = 20;
// if(age < 21) console.log("Sorry, no drinks for you. 🥤")
// else console.log("Enjoy your drink! 🍻")

age < 21 ? console.log("Sorry, no drinks for you. 🥤") : console.log("Enjoy your drink! 🍻")
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

// 5. find js method that will help you to get rid of the white space around the string

let weirdString = "   this string has some white space around    "; 
console.log(`weirdString: ${weirdString.length}`) // 46
let cleanedString = weirdString.trim(); // ✅
console.log(`cleanedString: ${cleanedString.length}`); // 39
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// 6. create two variables with your first name and last name, make the first letters capitalized and concatenate them

let firstName = "erick";
let lastName = "sicard";

console.log(firstName[0].toUpperCase());
// ✅get the first letter: firstName[0] or firstName.charAt(0) 

// console.log(firstName.charAt(0).toUpperCase() + firstName.substring(1) + " " + lastName.charAt(0).toUpperCase() + lastName.substring(1) ); // Erick Sicard
const fullName = `${firstName.charAt(0).toUpperCase()+ firstName.substring(1)} ${lastName.charAt(0).toUpperCase()+lastName.substring(1)}`
// use newer syntax: template literal - backticks
console.log(fullName); // Erick Sicard


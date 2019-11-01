console.log("------------ iteration 1 ------------");

// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "kevin";

// 1.2 Print "The driver's name is XXXX".
console.log(`hacker1's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "vero";

// 1.4 Print "The navigator's name is YYYY".
console.log(`hacker2's name is ${hacker2}`);

// you can also use prompt():
// let hacker1 = prompt("hacker1 name please:");
// let hacker2 = prompt("hacker2 name please:");
// the "old" way of concatenating strings would be:
// console.log("hacker2's name is " + hacker2);

console.log("------------ iteration 2 ------------");
// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!

 // If hacker1 is longer than hacker2
if (hacker1.length > hacker2.length) console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)
else if (hacker1.length < hacker2.length) console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters.`)
else console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`)


console.log("------------ iteration 3 ------------");

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1InCaps = '';

for (let i = 0; i < hacker1.length; i++) {
  hacker1InCaps += hacker1[i].toUpperCase();
  // If we are not at the last character
  if(i !== hacker1.length-1) hacker1InCaps+= " "
}

// the other solution is to use .trim() to get rid of the empty spaces
// hacker1InCaps = hacker1InCaps.trim();

// one more solution to remove the last emty space if we don't use if nor trim

// hacker1InCaps = hacker1InCaps.substr(0,hacker1InCaps.length-1);
console.log(`hacker1InCaps: ${hacker1InCaps}`); // hacker1InCaps: K E V I N
console.log("0-0-0-0-0-0-",hacker1InCaps.length);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navigatorReversed = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  if (navigatorReversed.length !== hacker2.length - 1) navigatorReversed += hacker2[i];
  else navigatorReversed += hacker2[i].toUpperCase();
}

// ****** other options - 1 ****** 
// for (let i = hacker2.length-1; i >= 0; i--) {
//  navigatorReversed += hacker2[i];
// }
// navigatorReversed = 
//  navigatorReversed.slice(0, navigatorReversed.length - 1) + 
//  navigatorReversed.charAt(navigatorReversed.length-1).toUpperCase()

// ****** other options - 2 ****** 
// let navReversed = [];
// for(let i = 0; i< hacker2.length; i++){
//   navReversed.unshift(hacker2[i])
// }

// navReversed[navReversed.length-1] = navReversed[navReversed.length-1].toUpperCase()
// navReversed = navReversed.join("");
// console.log(navReversed);

console.log(`navigatorReversed: ${navigatorReversed}`); // navigatorReversed: oreV

// 3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?

// console.log("A < B", "A" < "B");
// console.log("A < Z", "A" < "Z");

if (hacker1 < hacker2) console.log('hacker1 goes first');
else if (hacker1 > hacker2) console.log('hacker2 goes first');
else console.log('You have same names');

console.log("------------ Bonus Time! ------------");

// Bonus Time!
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut blandit nibh. Cras venenatis vestibulum metus sit amet dictum. Suspendisse malesuada bibendum augue, eget efficitur diam ultricies feugiat. Nulla mollis ex tellus, semper elementum dui efficitur sit amet. Quisque convallis sapien in metus elementum, eget auctor sem ornare. Donec pharetra odio sit amet tellus tempor feugiat. Sed a enim ex. Curabitur nec turpis a augue facilisis blandit. Vestibulum molestie lectus in odio commodo luctus. Duis sem est, sodales a vehicula id, hendrerit eget velit. Nulla maximus justo id augue sagittis accumsan. Integer turpis eros, ultricies convallis posuere et, auctor non ante. Vestibulum posuere, elit sit amet dapibus ultrices, orci mi lacinia neque, nec venenatis nunc ex id ex. Aliquam et dapibus quam, at convallis turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus nec augue eu nisl accumsan dapibus nec ac velit. Vestibulum porta libero eu ante tempor, non malesuada augue dapibus. Etiam fermentum accumsan ipsum, ac pulvinar erat accumsan vitae. Aenean vitae faucibus augue. Donec in eros sollicitudin, euismod elit sit amet, tempor nulla. Aliquam lobortis mattis rutrum. Aenean molestie lacinia eros, ut facilisis nulla aliquet ac. Cras augue magna, eleifend ac lacus sit amet, mattis dignissim massa. Aliquam pharetra varius tellus, ullamcorper venenatis mauris dictum elementum. Vestibulum ut est nisl. Aenean porttitor eleifend felis, blandit volutpat eros volutpat ac. Morbi eleifend convallis condimentum. In sed accumsan dolor, et aliquam dolor.`

let nbOfWords = 1;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    nbOfWords++;
  }
}
console.log(`lorem has ${nbOfWords} words.`);

// second solution:
const wordsArr = lorem.split(" ");
console.log(`LOREM IPSUM: The number of words is: ${wordsArr.length}`);

// Make your program count the number of times the Latin word "et" appears.

// let's demo on some smaller example and take it from there to lorem 
const someStr = 'this IS, weird string that is counting how many times the word IS. repeating';

const someArr = someStr.split(" ")
let count = 0;
for (let i = 0; i <= someArr.length - 1; i++) {
  let lowerCased = someArr[i].toLowerCase()
  if (lowerCased === ('is') || lowerCased === ('is.') || lowerCased === ("is,") ) {
    count++;
  }
}
console.log(`The number of the word 'is' is: ${count}`); // 3

console.log("------------ Bonus Time 2! ------------");

// Ask the user for a new string and check if it's a *palindrome*. Examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

let phraseToCheck = "race car";

// Fancy:
// string = string.split(" ").reverse().join("");
//

let stringWithoutSpaces = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== " ") stringWithoutSpaces += phraseToCheck[i];
}

console.log(`stringWithoutSpaces: ${stringWithoutSpaces}`);

let stringReversed = "";

for (let i = stringWithoutSpaces.length - 1; i >= 0; i--) {
  stringReversed += stringWithoutSpaces[i];
}

if (stringReversed === stringWithoutSpaces) {
  console.log(`String is a palindrome: ${userInput}`);
} else {
  console.log(`String is not a palindrome: ${userInput}`);
}
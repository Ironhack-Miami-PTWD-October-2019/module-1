# Brain warm-up

## 1. Turn string to number

```jsx
let price1 = '30.14xxx';
let price2 = '45';
```

- Solution:

```jsx
console.log(`price2 before: ${typeof price2}`);
// price2 = Number(price2);
// price2 = +price2;
price2 = parseInt(price2);

console.log(`price2 after: ${typeof price2}`);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log(`price1 before: ${typeof price1}`);
// price1 = Number(price1); // doesnt work NaN
// price1 = +price1; // doesnt work  NaN
// price1 = parseInt(price1) // 30 number doesnt work
price1 = parseFloat(price1); //  30.14 number

console.log(`price1 after: ${price1} ${typeof price1}`);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
```

## 2. Given the number as string, remove comma and add dot

```jsx
let num = '2,45';
```

- Solution:

```jsx
console.log(`num before: ${num} ${typeof num}`);
// num = +num.replace(",", "."); // 1st way
num = Number(num.split(',').join('.')); // 2nd way
console.log(`num after: ${num} ${typeof num}`);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
```

## 3. Turn number to string

```jsx
let price3 = 55;
```

- Solution:

```jsx
console.log(`price3 before: ${price3} ${typeof price3}`);
price3 = price3.toString();
// price3 = `${price3}`;
console.log(`price3 after: ${price3} ${typeof price3}`);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
```

## 4. Write if-else or switch that will console.log() message if someone is eligible to drink, and send them warning if they are not eligible to drink

```jsx
let age = 20;
// if(age < 21) console.log("Sorry, no drinks for you. 🥤")
// else console.log("Enjoy your drink! 🍻")

age < 21
  ? console.log('Sorry, no drinks for you. 🥤')
  : console.log('Enjoy your drink! 🍻');
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
```

## 5. Find js method that will help you to get rid of the white space around the string

```jsx
let weirdString = '   this string has some white space around    ';
```

- Solution:

```jsx
console.log(`weirdString: ${weirdString.length}`); // 46
let cleanedString = weirdString.trim(); // ✅
console.log(`cleanedString: ${cleanedString.length}`); // 39
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
```

## 6. Create two variables with your first name and last name, make the first letters capitalized and concatenate them

```jsx
let firstName = 'erick';
let lastName = 'sicard';
```

- Solution:

```jsx
console.log(firstName[0].toUpperCase());
// ✅get the first letter: firstName[0] or firstName.charAt(0)

// console.log(firstName.charAt(0).toUpperCase() + firstName.substring(1) + " " + lastName.charAt(0).toUpperCase() + lastName.substring(1) ); // Erick Sicard
const fullName = `${firstName.charAt(0).toUpperCase() +
  firstName.substring(1)} ${lastName.charAt(0).toUpperCase() +
  lastName.substring(1)}`;
// use newer syntax: template literal - backticks
console.log(fullName); // Erick Sicard
```
 ## 7. Using the `new Date().getDay()` method you can get the numerical representation of a current day in the week. 
The rule is that number 0 represents Sunday, number 1 represents Monday and so on till number 6 that represents Saturday. Using the given expression as an argument in the `switch` statement, output in the console which day is today. Ex. of return from `new Date().getDay()` is 1, you should see in the console `It's Monday`.

```jsx
console.log(new Date().getDay())

// https://www.w3schools.com/js/js_date_methods.asp
```
- Solution:
```jsx
switch(new Date().getDay()){
  case 0:
    console.log("It's Sunday");
    break;
   case 1:
    console.log("It's Monday");
    break;
   case 2:
    console.log("It's Tuesday");
    break;
  case 3:
    console.log("It's Wednesday");
    break;
   case 4:
    console.log("It's Thursday");
    break;
  case 5:
    console.log("It's Friday");
    break;
  case 6:
    console.log("It's Saturday");
}
```

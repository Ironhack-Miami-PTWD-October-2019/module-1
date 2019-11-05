## Cloning arrays - basics

### Introduction

To recap, mutable data types are:
- arrays 
- objects.

All the other data types (the primitives) are immutable:
- string,
- number,
- boolean,
- null,
- undefined and
- symbol.

On most occasions, you __will not want to lose your original state of mutable data type__ (doesn't matter if we talk about arrays or objects). Instead, you would want to make a copy of it and any changes you are planning to create, to actually do that on the copy and never on the original.

We will be working on the `fruits` array, and when talking about it, we will refer to it as on the original array.

```jsx
const fruits = ["🍎", "🍐", "🍊"];
```

### What is `don't do`? :x: 

Don't just create a new variable and give it a value of the array you want to copy.

```jsx
const fruitsCopy = fruits;
fruitsCopy.push("🍍");

console.log(`original: ${fruits} <==> copy: ${fruitsCopy}`);

// original: 🍎,🍐,🍊,🍍 <==> copy: 🍎,🍐,🍊,🍍
```

As seen, changes in the copy will result in the changes in the original array. The reason for that is that both of these arrays are pointing/referencing to the same memory location.

### The solution :white_check_mark: 

These are some of the most used ways to make a copy of an array and to see how fast each of them check this [link](http://jsben.ch/lO6C5) but at the same time keep in mind that the speed depends on the browser you use.



1. __`.slice()`__

```jsx
const fruitsCopy1 = fruits.slice();

console.log(`original: ${fruits} <==> copy: ${fruitsCopy1}`);

// original: 🍎,🍐,🍊 <==> copy: 🍎,🍐,🍊
```

2. __`ES6 spread operator [...arr]`__

```jsx
const fruitsCopy2 = [...fruits];

console.log(`original: ${fruits} <==> copy: ${fruitsCopy2}`);

// original: 🍎,🍐,🍊 <==> copy: 🍎,🍐,🍊
```

3. __`Array.from()`__

```jsx
const fruitsCopy3 = Array.from(fruits);

console.log(`original: ${fruits} <==> copy: ${fruitsCopy3}`);

// original: 🍎,🍐,🍊 <==> copy: 🍎,🍐,🍊
```

4. __`.concat()`__

```jsx
const fruitsCopy4 = [].concat(fruits)

console.log(`original: ${fruits} <==> copy: ${fruitsCopy4}`);

// original: 🍎,🍐,🍊 <==> copy: 🍎,🍐,🍊
```

5. __`loop`__ (any)

Loops can be used to copy arrays.

- __for loop__:
```jsx
const fruitsCopy5 = [];

for (let fruit of fruits){
  fruitsCopy5.push(fruit)
}

console.log(`original: ${fruits} <==> copy: ${fruitsCopy5}`);

// original: 🍎,🍐,🍊 <==> copy: 🍎,🍐,🍊
```

- __.map()__

```jsx
const fruitsCopy6 = fruits.map(el => el);

console.log(`original: ${fruits} <==> copy: ${fruitsCopy5}`);

// original: 🍎,🍐,🍊 <==> copy: 🍎,🍐,🍊
```

### Let's test

Take any of the copies of the fruit array and add a new element to it. When done, print the original array and the copy. We will take the first one, `fruitsCopy1`:

```jsx
fruitsCopy1.push("🍒");

console.log(`original: ${fruits} <==> copy: ${fruitsCopy1}`);

// original: 🍎,🍐,🍊 <==> copy: 🍎,🍐,🍊,🍒
```

As we can see, only the copy was modified while the original array stayed untouched.

__Keep in mind__: These ways are good to use if we are talking about one-dimensional arrays. In the case of a two-dimensional array, you will want to explore some other options. However, we will talk about that in later lessons.

Happy coding! :heart:
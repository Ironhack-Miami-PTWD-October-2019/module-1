## The most common ways of iterating over arrays

### `for` loop

Probably the most used way of iterationg through arrays so far:

```jsx
const names = ["carlos", "ana", "alex"];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// carlos
// ana
// alex
```
__Plus__: Flow control statements, `break` and `continue` can be used inside this loop.

- `break` - very much used when iterating over the array and when it's enough to get the first occurrence and not look for others in the array (saves lots of time, especially when working with massive arrays):

```jsx
for(let i = 0; i < names.length; i++){
  // if an nth element of array is equal to "ana" break the loop
  if (names[i] === "ana") break;
  console.log(names[i]);
}


// As we can see, only "carlos" gets printed out
// carlos
```

- continue:

```javascript
for(let i = 0; i < names.length; i++){
 // if an nth element of array is equal to "ana" jsut continue (skip the following step)
  if (names[i] === "ana") continue;
  console.log(names[i]);
}

// when the element is equal to "ana", the console in the next line is skipped so only these two get printed
// carlos
// alex
```

__Minus__: Although still very much used, this way brings a quite verbose syntax. 

### `.forEach()` - array method

Using `.forEach()`, we can access each element of the array. We shouldn't be using this method when we want to modify one or more elements of the array (in that case, using _.map_ is recommended). It is used only when we want to iterate over the array.

- ES5:
```jsx
names.forEach(function(theName){
  console.log(theName)
})

// carlos
// ana
// alex
```

- ES6 - the same as above, just using a bit cleaner syntax:

```jsx
names.forEach(theName => console.log(theName))

// carlos
// ana
// alex
```

__Plus__: short and readable. <br>
__Minus__: can't use the break and continue.

### [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)


In the ES6, a new way of iterating over data was introduced - `for...of` statement. It can be used on any iterable.

- Example of iterating over an array of strings:
```jsx
for(const name of names){
  console.log(name);
}

// carlos
// ana
// alex
```

- Example of iterating over string:

```jsx
// iterating over string
const iterableStr = "hello";

for (const val of iterableStr) {
  console.log(val);
}
// h
// e
// l
// l
// o
```

__Plus__: This way is super used since it combines great readability with the ability to use _break_ and _continue_. <br>
__Minus__: It's not yet compatible with all browsers.

Happy coding! :heart:

## When and why we should use `length-1`?

Very often you will see that `length - 1` is being used and you might ask yourself why is that.
Here is an example that will demo when and why you should use it and what is the alternative way.

Let's take variable `firstName` and has the length 4.

```js
const firstName = "maya";

console.log(`The length of the variable ${firstName} is: ${firstName.length}.`); 
// The length of the variable maya is: 4.
```
If we want to iterate through this string (and we would want to do that so we can have access to each element/character - and the same goes for arrays (we would iterate over array so we can have access to each element of it)), 
we would use loop that goes from the first position, which is zero (0) for both straings and arrays and go all the way to the length of the array, which is 4 in our case.

The question here is - how many times loop iterations we would execute? We start at 0 and we'll go to 4 inclusive.
Let's see:
```bash
iteration 1: index = 0 <====> m
iteration 2: index = 1 <====> a
iteration 3: index = 2 <====> y
iteration 4: index = 3 <====> a
iteration 5: index = 4 <====> undefined
```
Let's see why and how:
```js
console.log("----------- wrong: -------------------");

for (let i = 0; i <= firstName.length; i++){
  console.log(`index: ${i} <-> char: ${firstName[i]}`);
}
// ----------- wrong: -------------------
// index: 0 <-> char: m
// index: 1 <-> char: a
// index: 2 <-> char: y
// index: 3 <-> char: a
// index: 5 <-> char: undefined
```
We are basically going over the string one more time than needed and that's why in the iteration 5, when `i=4` we see `undefined`.

The fix is pretty easy and we can do it on two different ways which will lead to the same result:
The correction - 1:
```js

console.log("--------- correct - 1: ---------------------");

for (let i = 0; i <= firstName.length - 1; i++){
  console.log(`index: ${i} <-> char: ${firstName[i]}`);
}

// --------- correct - 1: ---------------------
// index: 0 <-> char: m
// index: 1 <-> char: a
// index: 2 <-> char: y
// index: 3 <-> char: a
```
In the for loop, we are setting the condition not to to go from `i=0` to `i <= firstName.length - 1`. This way, we will go through 4 and not 5 iterations and we will not get `undefined` as our final value.


The correction - 2:
```js
console.log("------------ correct - 2: ------------------");

// correct - 2:
for (let i = 0; i < firstName.length; i++){
  console.log(`index: ${i} <-> char: ${firstName[i]}`);
}

// ------------ correct - 2: ------------------
// index: 0 <-> char: m
// index: 1 <-> char: a
// index: 2 <-> char: y
// index: 3 <-> char: a
```

In the second approach, we started from the position zero (0) as well and we used the full length of the variable as the stop point for this loop, but exclusively (`i < firstName.length` and not `i <= firstName.length;`).

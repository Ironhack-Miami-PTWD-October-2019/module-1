## `.filter()`

- doesn't mutate the original array
- returns a new array with only the elements that satisfy conditions (returns a new array of smaller size than original (subarray))

We will be working on the following array:

```jsx
const numbers = [3, 7, 9, 10, 12];
```

Let's use _.filter()_ to extract the numbers that are divisible with `3`.

```jsx
const filteredArr = numbers.filter(num => {
  if (num % 3 === 0) return num;
})
// filteredArr: 3,9,12

// and in one line, this would look like:

const filteredArr2 = numbers.filter(num => num % 3 === 0); 
// filteredArr2: 3,9,12
```

Remember, anything we use the array methods for (_map_, _reduce_, _filter_, ...) can be done using `for` loop or `.forEach()` method. Let's see what is under the  hood of the `.filter()` method:

```jsx
const filtered = [];
for (const num of numbers){
  if (num % 3 === 0) filtered.push(num);
}

console.log(`filtered: ${filtered}`); // filtered: 3,9,12

// in one line:

const filtered2 = [];
numbers.forEach(num => num%3 === 0 ? filtered2.push(num) : null)

console.log(`filtered2: ${filtered2}`); // filtered2: 3,9,12
```

### Challenge 1:

1. In the given array, find the elements that start with "m" and make them capitalized.
2. Bonus: If the city name has two or more names, make them both capitalized (ex. Mexico City).

```jsx
const cities1 = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];
```

```jsx
const capsMs = cities1.filter(theCity => theCity[0] === "m")
                      .map(city => {
                        if (city.includes(" ")){
                          let splitted = city.split(" ");
                          const len = splitted.length;
                          for (let i = 0; i < len; i++){
                            splitted[i] = splitted[i][0].toUpperCase() + splitted[i].slice(1);
                          }
                          return splitted.join(" ");
                        }
                        return city[0].toUpperCase() + city.slice(1)
                      })

console.log(capsMs);
```

## Challenge 2: 

1. From the given array of people, get the people who are allowed to consume alcoholic beverages (based on the US law).

2. _Bonus_: Get just their names, we don't need their age.

```jsx
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];
```
1. `allowedToDrink` will be the list of people who are older than 21.
```jsx
const allowedToDrink = people.filter(person =>{
  return person.age >= 21;
});
// in one line:
// const allowedToDrink = people.filter(person => person.age >= 21);
console.log(allowedToDrink);

// [ { name: 'Candice', age: 25 },
  // { name: 'Tammy', age: 30 },
  // { name: 'Allen', age: 49 },
  // { name: 'Nettie', age: 21 } ]
```

2. We will map through the `allowedToDrink` and get only their names into a new array.

```jsx
const namesArrOfAllowedToDrink = allowedToDrink.map(person => {
    return person.name
});

// in one line:
// const namesArrOfAllowedToDrink = allowedToDrink.map(person => person.name);

console.log(namesArrOfAllowedToDrink); // [ 'Candice', 'Tammy', 'Allen', 'Nettie' ]
```

### Challenge 3:

Given an array of numbers, filter out the numbers that are not even, and are less than 100.

```jsx
const numbers = [1, 60, 112, 123, 100, 99, 73, ];
```

```jsx
const newArray = numbers.filter(number =>{
  return ((number % 2 ===1)&&(number<100))
});
console.log(newArray); // [ 1, 99, 73 ]
```
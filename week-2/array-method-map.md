## `.map()`

- doesn't mutate the original array
- returns a new array of the same size as the original array 

We will be working on the following array:
```javascript
const arr = [1, 2, 3];
console.log(`original: ${arr}`); // original: 1,2,3
```

### `.map()` vs. `.forEach()`

|             | .forEach()                             |  .map()                                          |
|-------------|----------------------------------------|--------------------------------------------------|
| returns     |  by default always returns "undefined" | by default always returns a new array            |
|  use when...| When you’re not trying to change the data in your array but instead want to just do something with it — like saving it to a database or logging it out.    | When changing or altering data. It is much faster than `.forEach()`  |


Let's demo:
```jsx
const newArr = arr.forEach(el => el * 3);
console.log(newArr); // undefined
```

If we want to double each number in the `arr` without making changes to it, we have to create a new empty array and push changed elements in it:

```jsx
const someNewArr = [];
arr.forEach(el => someNewArr.push(el*2));

console.log(`forEach-pushed: ${someNewArr}`); // forEach-pushed: 2,4,6
```

If we want for any reason to mutate original array:

```jsx
arr.forEach((el, i) => arr[i] = el*2);

console.log(`forEach-mutated: ${arr}`); // forEach-mutated: 2,4,6
```

### Example with using `.map()`

The only proper way of going through an array and making changes to it without actually changing the original array is using `.map()`:

```jsx
const updatedArr = arr.map(el => el*2);

console.log(`mapped: ${updatedArr}`); // mapped: 4,8,12
```
_In case you are wondering how we got 4, 8 and 12, remember we mutated original array earlier._ 


### Challenge 1:

Capitalize each element of the array - the whole word:
```jsx
const fruits = ["pineapple", "orange", "mango"];

const capsFruits = fruits.map(oneFruit => {
  return oneFruit.toUpperCase();
})

// we can write it in one line:
// const capsFruits = fruits.map(oneFruit => oneFruit.toUpperCase())
// 
console.log(`fruits: ${fruits}`); // fruits: pineapple,orange,mango

console.log(`capsFruits: ${capsFruits}`); // capsFruits: PINEAPPLE,ORANGE,MANGO
```

### Challenge 2:

Capitalize the first letter of every city. <br>
_Bonus_: if the city has 2 or more words in the name, capitalize the first letter of each word. 

```jsx
const cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

const capsCities = cities.map(city => {
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

console.log(capsCities
// [ 'Miami',
// 'Barcelona',
// 'Madrid',
// 'Amsterdam',
// 'Berlin',
// 'Sao Paulo',
// 'Lisbon',
// 'Mexico City',
// 'Paris' ]
```

### Challenge 3:
_(from the lesson)_

```jsx
const students = [
    {
      name: "Tony Parker",
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: "Marc Barchini",
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: "Claudia Lopez",
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    }
]

const finalList = students.map(student => {
  // console.log(student);
  const projAvg = (student.firstProject + student.secondProject) / 2;

  const finalGrade = projAvg * 0.4 + student.finalExam * 0.6;
  const updStudent = {
    name: student.name,
    finalGrade: Math.round(finalGrade)
  }
  return updStudent;
})

console.log(finalList);

// [ 
//   { name: 'Tony Parker', finalGrade: 85 },
//   { name: 'Marc Barchini', finalGrade: 69 },
//   { name: 'Claudia Lopez', finalGrade: 87 } 
// ]
```

Happy coding! :heart: 
## Callbacks

__CALLBACKS are a way to make sure certain code doesn’t execute until another code has already finished execution.__

Let's check this example:
- function 1:

```jsx
function study(what){
   console.log(`I am studying ${what}.`)
}
```

- function 2:

```jsx
function enjoy(){
  console.log("I am done with studying, now I can enjoy.")
}
```

If called in the same order we defined it:

```jsx
study("JS"); // JavaScript of course 🔥
enjoy();
```

...they will output as we expect in the same order:

```
I am studying JS.
I am done with studying, now I can enjoy.
```

Cool, we know how this works - our computers execute line by line so they will first execute`study("JS")` and then `enjoy()` because this is the order in which we called it.

### Delayed execution of one of the functions

Let's spiced it up a bit. We will use `setTimeout()` method to delay the execution of one of the functions for one second. If you are not familiar with `setTimeout()` yet, you will be very soon, so for now, just see it as a _tool_ we will use to postpone the execution of the first functions.

Let's update function 1:

```jsx
function study(what){
  setTimeout(() => {
   console.log(`I am studying ${what}.`)
  }, 1000)
}
```

and call functions for execution in the same order we did earlier:

```jsx
study("JS");
enjoy();
```

but now the output will be slightly different compared to earlier:

```
I am done with studying, now I can enjoy.
I am studying JS.
```

__It’s not that JavaScript didn’t execute our functions in the order we wanted it to, it’s instead that JavaScript didn’t wait for a response from `study()` before moving on to execute `enjoy()`.__


_When and why any function would be postponed/delayed in the real world?_

Well, at many occasions. Here is one example: you could be waiting for some data from your database or API to display it to the users. So imagine that it takes a bit to get those data, but your page already renders and your users see an empty page or even worse an error. Very bad user experience and something we can't allow so we have to make sure that the function that renders the page to users doesn't get executed before the function that gets the data doesn't really get that data that we want to display to users.

__So we can't just call one function after another and hope they execute in the right order.__

### The solution - callback function


Callbacks are a way to make sure a certain code doesn’t execute until another code has already finished execution.

This is example of how callback functions work:

```jsx
// function study(what, blah){...}
function study(what, callback){ // callback is just placeholder
                                // you can use any word including blah 🎃
  console.log(`I am studying ${what}.`);
  // blah();
  callback(); // and then here you would do: blah();
}
```
So now this means that whichever function we define as callback, as the second function (in our case, that is `enjoy()`) should execute first, because most likely we will need something from it in order to execute the first function (in our case: `study()`).

Let's see what is changed in the way we invoke functions now:
```jsx
 // make sure when invoking callback func NOT tu use ()
 //                                                  |
 //             -------------------------------------
 //            |
study('JS', enjoy);
```
Called like this, we are making sure that `study()` doesn't get executed before `enjoy()`.

To help you understand better, this is the same as passing the second (callback) function definition directly in the function call of the first function:

```jsx
 study("math", () => {
    console.log('After studying, I am enjoying!')
 })
```
As you can see, the callback is [anonymous (unnamed) function](https://blog.scottlogic.com/2011/06/10/javascript-anonymous-functions.html) in this case.

We will be heavily working with asynchronous code that requires using callbacks (or something similar :wink: ) later on, especially during modules 2 and 3.

Happy coding! :heart:

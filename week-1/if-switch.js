const language = prompt("Please enter the language:");
const name = prompt("Please enter your name:");

// switch(language){
//   case "spanish":
//     console.log(`Hola, ${name}`);
//     break;
//   case "french":
//     console.log(`Salut, ${name}`);
//     break;
//   case "english":
//     console.log(`Hello, ${name}`);
//     break;
//   default:
//     console.log("I am not sure what are you trying to do, sorry! 🍺");
// }

if (language === "spanish") { // if we will have more than one thing to console or return we have to use curly braces
  console.log(`Hola, ${name}`);
  console.log("Something else");
}
else if(language === "french") console.log(`Salut, ${name}`);
else if (language === "english") console.log(`Hello, ${name}`);
else console.log("I am not sure what are you trying to do, sorry! 🍺");
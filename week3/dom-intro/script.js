let theLeftSideOperator;
let theRightSideOperator;



let theButton = document.getElementById('the-button');

theButton.onclick = function(){
    console.log('you clicked me');
}

let helloDiv = document.querySelector('.hello');
helloDiv.onmouseover = function(){
    console.log('you hovered')
}


let theInput = document.querySelector('.list > input');



document.querySelector('.list > button').onclick = function(){

    let newThing = document.createElement('li');

    let theAnimal = theInput.value;

    newThing.innerText = theAnimal;


    let theList = document.querySelector('.list > ul')
    theList.prepend(newThing);

    theInput.value = "";

}



let operationBtns = document.getElementsByClassName('operation-btn')


for(let i=0; i < operationBtns.length; i++){
    operationBtns[i].onclick = rememberTheOperator;
}


function rememberTheOperator(e){

    // look at the thing i clicked
    // look at its id 
    // get the last letter of the id to see which side it came from 
    // based on that last letter either change the first variable i made or change the second variable
    let id = e.target.id;
    let lastLetter = id.substr(id.length - 1);

    if(e.target.classList.contains('selected')){
        e.target.classList.remove('selected')
    } else {

        let allSelected = document.getElementsByClassName('selected');

        for(let i = 0; i < allSelected.length; i++){

            let currentThing = allSelected[i];
            let thingIJustClicked = e.target;
            let lastLetterOfCurrent = currentThing.id.substr(currentThing.id.length - 1);
            let lastLetterOfThingIClicked = thingIJustClicked.id.substr(thingIJustClicked.id.length - 1);
            
           if(lastLetterOfCurrent == lastLetterOfThingIClicked){
               currentThing.classList.remove('selected');
           }

        }

        e.target.classList.add('selected');
    }



    if(lastLetter == 1){
    theLeftSideOperator = e.target.id
    } else {
    theRightSideOperator = e.target.id
}


console.log(theLeftSideOperator, theRightSideOperator)
}


document.querySelector('.calc-all').onclick = function(){
    if(!theRightSideOperator || !theLeftSideOperator)
    return;


    let calcs = document.getElementsByClassName('calc-container');

    console.log(calcs)
    for(let i=0;i<calcs.length;i++){

    let firstNumBox = calcs[i].querySelector('div:first-child > input');
    let secondNumBox = calcs[i].querySelector('div:nth-child(2) > input');

    let leftOp = theLeftSideOperator.substr(0, theLeftSideOperator.length - 1)
    let rightOp = theRightSideOperator.substr(0, theRightSideOperator.length - 1)

    let operation = i===0? leftOp : rightOp;

    
    let result;

    if(operation === 'add')
     result = Number(firstNumBox.value) + Number(secondNumBox.value)
    else if(operation ==='subtract')
    result = Number(firstNumBox.value) - Number(secondNumBox.value)
    else if(operation ==='divide')
    result = Number(firstNumBox.value) / Number(secondNumBox.value)
    else if(operation ==='multiply')
    result = Number(firstNumBox.value) * Number(secondNumBox.value)

    let legend = {
        add: 'plus ', 
        subtract: 'minus ',
        multiply: 'times ',
        divide: 'divided by '
    }

    let feedback = "";
    feedback += firstNumBox.value;
    feedback += " "
    feedback += legend[operation]
    feedback+= secondNumBox.value;
    feedback += ' equals '
    feedback+= result;

    let num = i+1;

    document.getElementById('result'+num).innerText = feedback;

    firstNumBox.value = "";
    secondNumBox.value = "";


    }

 
  
}


function doTheMath(e){
    

    




 
}


// looping through and traversing the DOM

// let bothBoxes = document.querySelectorAll('.calc-container');
// undefined
// bothBoxes
// NodeList(2) [div.calc-container, div.calc-container]
// for(let i=0; i < bothBoxes.length; i++){

// bothBoxes[i].querySelector('div:first-child > input').value = i;

// }

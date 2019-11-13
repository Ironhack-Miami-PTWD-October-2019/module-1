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
    operationBtns[i].onclick = doTheMath;
}


function doTheMath(e){
    let operation = e.target.id;

    let firstNumBox = document.querySelector('.calc-container > div:first-child > input');
    let secondNumBox = document.querySelector('.calc-container > div:nth-child(2) > input');

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


    document.getElementById('result').innerText = feedback;

    firstNumBox.value = "";
    secondNumBox.value = "";
}


// looping through and traversing the DOM

// let bothBoxes = document.querySelectorAll('.calc-container');
// undefined
// bothBoxes
// NodeList(2) [div.calc-container, div.calc-container]
// for(let i=0; i < bothBoxes.length; i++){

// bothBoxes[i].querySelector('div:first-child > input').value = i;

// }

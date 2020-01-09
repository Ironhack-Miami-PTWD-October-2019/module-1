console.log('hello');

window.onload = function(){

    let explosion = document.createElement('img');
    explosion.setAttribute('src', "theexplosion.gif");
    explosion.style.width = "50px";

    let theScore = 20;

    let didTheMoleGetWacked = true;
 


    let mole = document.createElement('div');
    mole.classList.add('mole');

 let randomBox;


    function sendTheMole(){


        if(!didTheMoleGetWacked){
            theScore -=10;
        }
        updateScore();
        mole.remove();

            
            let randomNumWithGlobalScope = (Math.floor(Math.random() * 3000));
            
            if(randomNumWithGlobalScope > 2500 || randomNumWithGlobalScope < 250){
                setTimeout(sendTheMole, randomNumWithGlobalScope) 
                return;
            }
            
            didTheMoleGetWacked = false;

            // right now the mole simply appears in a different box once every second
            // instead, let's make it so the mole sometimes stays for longer than a second
            // sometimes for less
            // and sometimes, dissappears and there is no mole for one or two seconds

            
            let boxes = document.getElementsByClassName('col');
            randomBox = boxes[Math.floor(Math.random() * boxes.length)];
           
            
            explosion.remove();
            randomBox.append(mole);


            setTimeout(sendTheMole, randomNumWithGlobalScope) 
    }





    sendTheMole();


    
    
 
    console.log(document.getElementById('game-board'))



mole.onclick = function(){
    theScore += 10;
    updateScore();
    mole.remove();
    didTheMoleGetWacked = true;
    randomBox.append(explosion)
    
    let sound = document.getElementById('explode-sound')
    
    if (sound.paused) {
        sound.play();
    }else{
        sound.currentTime = 0
    }



}



function updateScore(){
    document.getElementById('score').innerHTML = "Score: "+theScore;
    // checkStatus();
}



function checkStatus(){
    if(theScore < 0){
        alert('you lose');
    } 

    if(theScore > 100){
        alert('you win');
    }
}








}// end window onload
let randomNumber1 = Math.floor(Math.random()*6)+1;
let diceImage1 = "images/dice" + (randomNumber1) +".png";
document.querySelectorAll("img")[0].setAttribute("src",diceImage1);
let randomNumber2 = Math.floor(Math.random()*6)+1;
let diceImage2 = "images/dice" + (randomNumber2) +".png";
document.querySelectorAll("img")[1].setAttribute("src",diceImage2);
function result(){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="player1 won";
    }
    if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="player2 won";
    }  
    else if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML="its a tie";       
    }
}
result();

var randomNumber = Math.floor(Math.random() * 6) + 1 ;     // returns a random integer from 1 to 6
var randomDiceImage = "dice" + randomNumber +  ".png" ; //dice1 to dice6
var randomSourceImage = "images/" + randomDiceImage; // source code

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomSourceImage);



// -----------------------------------------------------------------//


var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;     // returns a random integer from 1 to 6
var randomDiceImage2 = "dice" + randomNumber2 +  ".png" ; //dice1 to dice6
var randomSourceImage2 = "images/" + randomDiceImage2;// source code

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSourceImage2);


// -------------------------------------//
var winner = document.querySelector("h1");
if (randomNumber > randomNumber2)
winner.innerHTML = "😎Player 1 wins!";
else if(randomNumber2 > randomNumber)
winner.innerHTML="😎Player 2 wins!";
else winner.innerHTML= "Draw";

// create a number guassing game

let input = prompt("enter the number: ");

let gameNumber = 45;


    if(gameNumber == input){
        alert("you won the game");
    } else{
        while(gameNumber != input){
        input = prompt("enter again ")
        }
    }

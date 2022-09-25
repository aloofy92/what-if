const prompt = require('prompt-sync')({sigint: true});

let player1 = Number(prompt("Please enter rock, paper or scissors: "));

//use least common multiple in order to run the number that is divisible by 3 and 5 
// to print. Do this first then do the 3 and 5.

if (player1 === 'rock' && player2 === 'paper'){
    console.log("Player 1 is the winner!");

} else if (player1 === 'paper' && player2 === 'rock'){
    console.log("Player 2 is the winner!");
    
} else if (player1 === 'rock' && player2 === 'paper'){
    console.log("Player 1 is the winner!");
} 
if (player1 === 'rock' && player2 === 'paper'){
    console.log("Player 1 is the winner!");
} 



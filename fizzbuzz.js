const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt("Please enter your number: "));
console.log(number);

//use least common multiple in order to run the number that is divisible by 3 and 5 
// to print. Do this first then do the 3 and 5.

if (number % 15 == 0){
    console.log("fizz buzz");
} 
else if (number % 3 == 0){
    console.log("fizz")
}
 else if (number % 5 == 0){
    console.log("buzz")
}


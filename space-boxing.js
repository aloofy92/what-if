const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("Please enter your earth weight: "));
console.log("Please enter the number of the planet you will be traveling to using the following system. 1- venus, 2-mars, 3-jupiter, 4-saturn, 5-uranus, 6-neptune:");
let planetNum = Number(prompt(">"));
let validWeight = true;

console.log(weight);
console.log(planetNum);

if(isNaN(weight) == true){
    validWeight = false;
}

if(planetNum === 1){
    console.log("You picked venus");
    console.log(`Your weight needs to be: ${weight * 0.78}`);
} else if (planetNum === 2){
    console.log("You picked mars");
    console.log(`Your weight needs to be: ${weight * 0.39}`);
} else if (planetNum === 3){
    console.log("You picked jupiter");
    console.log(`Your weight needs to be: ${weight * 2.65}`);
} else if (planetNum === 4){
    console.log("You picked saturn");
    console.log(`Your weight needs to be: ${weight * 1.17}`);
} else if (planetNum === 5){
    console.log("You picked uranus");
    console.log(`Your weight needs to be: ${weight * 1.05}`);
} else if (planetNum === 6){
    console.log("You picked neptune");
    console.log(`Your weight needs to be: ${weight * 1.23}`);
} else{
    console.log("invalid entry");
}
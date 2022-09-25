const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt("Please enter your age: "));
console.log(enterAge);

if(day === 1){
   console.log("Today is Monday");
} else if (day === 2){
    console.log("Today is Tuesday");
}else if (day === 3){
    console.log("Today is Wednesday");
} else if (day === 4){
    console.log("Today is Thursday");
}else if (day === 5){
    console.log("Today is Friday");
}else if (day === 6){
    console.log("Today is Saturday");
}else if (day === 7){
    console.log("Today is Sunday");
} else {
    console.log("Error");
} 
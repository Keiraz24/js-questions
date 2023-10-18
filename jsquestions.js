console.log("Hellow world");

console.log("question 1:Determine if a randomly generated number is divisible by 7 and 9. Print success and failure messages to the console.");
var randomNumber= Math.floor(Math.random()*1000);
console.log(randomNumber);
if (randomNumber % 7==0 && randomNumber % 9==0){
    console.log("sucess");
}else{
    console.log("failer");
}

console.log("question 2:Use the question mark and conditional chaining to determine a student's letter grade based on a number");

const grade =95 ;
var realGrade = grade >= 70 ? grade >=80 ? grade >= 90 ? "A" : "B" : "C": "F";
console.log(realGrade); // 

console.log("Make a function that does an arithmetic calculation like addition or calculates gravity. The function must have parameters and returns. Console.log the result of your calculation");


function poundsOnNeptune(x){
    return (x/9.81)* 11.15;
}

let x= poundsOnNeptune(140);
console.log(x)

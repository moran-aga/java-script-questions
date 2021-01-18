"use strict"

//6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

let num1 = 80;
let num2 = 77;
let num3 = 88;
let num4 = 95;
let num5 = 68;

let sum = (num1 + num2 + num3 + num4 + num5);

let average = (sum / 5);

if (average < 60) 
{ console.log("F"); } 
else if (average < 70) 
{console.log("D"); } 
else if (average < 80) 
{console.log("C"); } 
else if (average < 90) 
{console.log("B");} 
else (average < 100 )
 {console.log("A");}


console.log(average); 
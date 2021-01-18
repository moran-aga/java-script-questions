"use strict"

//11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers

let numberOne = 15;
let numberTwo = 5;
let lower = numberOne < numberTwo ? numberOne : numberTwo;
let divisor = 1;

    for (let i = 1; i <= lower; i++) {
        if (numberOne % i === 0 && numberTwo % i === 0) {
        } divisor = i;
    } 

    console.log(divisor);
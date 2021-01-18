"use strict"

//7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

//3=fizz 5=buzz 15=fizzbuzz

for (i=0; i<100; i++) 
    {
    if (i % 15 === 0)
    {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) 
    {
        console.log(i+ " fizz");
    }
    else if (i % 5 === 0) 
    {
        console.log(i+ " Buzz");
    }
    else {
        console.log(i);
    }
}


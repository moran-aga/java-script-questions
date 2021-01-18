"use strict"

//9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
//Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

let firstDigit = x;
let secondDigit = y;
let thirdDigit = z;

for (let x = 1; x<10; x++) 
{
    for (let y = 1; y<10; y++) 
    {
        for (let z = 1; z<10; z++)
        {
         let armstrong = (x**3)+ (y**3) + (z**3);
         let sum = ((x*100) + (y*10) + (z))

        if ( sum === armstrong) 
        { 
            console.log(armstrong);
        }
        }
    }
}

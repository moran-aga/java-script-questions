"use strict"

//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

let x = 1;
let y = 8;
let z = -2;

if (x>y && x>z) {
    if (y>z) 
    {
        console.log(x + ", " + y + ", " + z);
    } 
    else
    {
       console.log(x + ", " + z + ", " + y);
    }
}
else if (y>x && y>z) 
{
    if (x>z) 
    {
        console.log(y + ", " + x + ", " + z);
    } 
    else 
    {
    console.log(y + ", " + x + ", " + z);
    }
}
else if (z>x && z>y) 
{
    if (y>x)
     {
        console.log(z + ", " + y + ", " + x);
    }
     else
      {
    console.log(z + ", " + x + ", " + y);
      }
}

"use strict"

//2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

let x = 5;
let y = -4;
let z = 2;

if (x>0 && y>0 && z>0)
    { alert ("The sign is +");
} else if (x<0 && y>0 && z>0) 
    { console.log ("The sign is +");
} else if (x>0 && y<0 && z>0)
    { console.log ("The sign is +");
} else if (x>0 && y>0 && z<0)
    { console.log ("The sign is +");
} else (x<0 && y<0 && z<0)
     { console.log ("The sign is -");
}
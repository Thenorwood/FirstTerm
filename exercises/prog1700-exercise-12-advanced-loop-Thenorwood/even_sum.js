"use strict";
/*
name: bryn Norwood
date: oct 25/2023
description: exercise 12
*/

// DO NOT EDIT: The main function to house our program code 
function main()
{
    //declare variable to store sum of even numbers
    let evenSum = 0;

    /*create a loop... count even numbers from 2 to 100
    for(let i=0; i<=100; i=i+2)
    {
        //add the countinmg numbers (e- 2,4,6 etc) to the variable evenSum
        evenSum = evenSum + i;

    }
    console.log("Sum of all even numbers between 2-100 (inclusive: " +evenSum);

    // enter your code here
    */
   let i = 2;
   while(i<=100)
   {
    evenSum = evenSum + i;
    i = i+2;
   }

   console.log("Sum of all even numbers between 2-100 (inclusive: " +evenSum);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

"use strict";

/* 
Name: Bryn Norwood
Date: 9/22/23
description: code for weekly loan calculator question 2
*/
// DO NOT EDIT: The main function to house our program code 
let readlineSync = require('readline-sync');
function main()
{
   //input
   let Loan = parseFloat(readlineSync.question("enter the amount of loan:"));
   let Int = parseFloat(readlineSync.question("Enter the interest rate %" ));
   let Year = parseFloat(readlineSync.question("Enter the number of years: "));

   //process
   let itax = ( Int / 5200 );
   let itaxa = (itax / (1 - (1 + itax) ** (-52 * Year))) * Loan
 
   

   //output
   console.log("your weekly payment will be "+ itaxa.toFixed(2));

}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

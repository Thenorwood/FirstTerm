"use strict";

/*Author: bryn Norwood
Date: 9/15/2023
Description: exercise 3 question 2
Price-to-Earnings Ratio Request a company’s earnings-per-share for the year and the price of
one share of stock as input, and then display the company’s price-to-earnings ratio (that is,
price/earnings).
*/
// DO NOT EDIT: The main function to house our program code 

let readlineSync = require('readline-sync');
function main()
{
    // input
    //get the info from users input
    console.log("Calculate the profit/earning ratio");
    let companyname = readlineSync.question("Input Company name: ");
    let price = parseInt(readlineSync.question("Enter price per share "));
    let earning = parseInt(readlineSync.question("enter earnings per share "));

    //process
    //display company n ame and its per ratio
    let peratio = price/earning *100;

    //output
    //display the name of the team and % of games won
    console.log(companyname + "- PE ratio:  " + peratio.toFixed(2));
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
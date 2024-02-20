"use strict";
/*
Author: Hamlet Lin
Date: 9/13/2023
Description: Part of exercise 2 in PROG1700 
Stock Purchase The following steps calculate the amount of a stock purchase: 
A. Assign the value 25.625 to the variable cost_per_share.
B. Assign the value 400 to the variable number_of_shares.
C. Assign the product of cost_per_share and number_of_shares to the variable markdown.
D. Display the value of the variable markdown in the console application
*/
// DO NOT EDIT: The main function to house our program code 
function main()
{
    //input
    // define the variables and assign values
    let cost_per_share = 25.625;
    let number_of_shares = 400;

    //process
    let markdown = cost_per_share * number_of_shares;

    //output
    //display the result
    console.log("Markdown: " + markdown);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
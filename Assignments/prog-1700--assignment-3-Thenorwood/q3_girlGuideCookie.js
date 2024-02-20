"use strict";

/*
Author: Bryn Norwood
Date: nov 3, 2023
Title: PROG1700 Assignment 3- Q3 Girl Guide Cookie Sell-off

use a 2d array. 1 column name, 1 column value
The organizers of the annual Girl Guide cookie sale event want to raise the stakes on the number of cookies sold and are offering cool prizes to those guides who go above and beyond in their sales efforts. The organizers want a program to print the guide list and their prizes.

Your solution should demonstrate an understanding of how to apply list/loop concepts in a program that should:
•	Have a flowchart that clearly shows all the paths of execution that will exist within your designed solution to this problem.
•	Ask the user how many guides sold cookies in the current event,
•	For each numbered guide up to the user-entered count of guides, allow the user to enter a name and the number of boxes of cookies that 
    person sold. 
•	Calculate and output a list of all guide names, 
•	Display the average sales, and the prize that each guide won,
•	The highest selling guide gets a trip to the Girl Guide Jamboree, any guides selling above average get a badge, and any guides 
    selling at least one box get to split the remaining cookies, with guides selling no boxes shut out of all prizes (as they should be).
 (Hint: Some potential solution ideas: Research parallel arrays or two-dimensional lists)

Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (loops and lists).


*/

let readlineSync = require('readline-sync');


// DO NOT EDIT: The main function to house our program code 
function calculateAverage(guides) {
    let total = 0;
    for (let i = 0; i < guides.length; i++) {
        total += guides[i][1];
    }
    return total/guides.length
}
function assignPrizes(guides, average, highestSale) {
    for (let i = 0; i < guides.length; i++) {
        if (guides[i][1] === highestSale) {
            guides[i][2] = 'Trip to Girl Guide Jamboree in Aruba!';
        } else if (guides[i][1] > average) {
            guides[i][2] = 'Super Seller Badge';
        } else if (guides[i][1] > 0) {
            guides[i][2] = 'Left over cookies';
        } else {
            guides[i][2] = 'No prize';
        }
    }
}
function findHighestSale(guidesbox) {
    let highestSale = 0;
    for (let i = 0; i < guidesbox.length; i++) {
        if (guidesbox[i][1] > highestSale) {
            highestSale = guidesbox[i][1];
        }
    }
    return highestSale;
}


let guides = [];
for (let row =0; row<guides.length;row++){
    for(let col =0; col<guides.length; col++)
    {
        guides[row][col] = "n/a"
    }
}
// Function to print the results
function printResults(guides, average) {
    console.log(`The average number of boxes sold by each guide was ${average.toFixed(1)}`);
    console.log("Guide               Prizes Won");
    console.log('---------- -----------------------------------');
    for (let i = 0; i < guides.length; i++) {
        console.log(`${guides[i][0].padEnd(10)} - ${guides[i][2]}`); // name is at index 0, prize is at index 2
    }
}
function main()
{ 
let guidecookies=readlineSync.questionInt("Enter the number of guides selling cookies: ");
    for(let row=0; row<guidecookies; row++)
    
    {
        let GuideName = readlineSync.question(`Enter the name of guide ${row+1}: `);
        let boxnum = readlineSync.questionInt(`Enter the number of boxes sold by ${GuideName}: `);
        let prize = "";
        
            
        guides.push([GuideName, boxnum, prize]);
    }

    let average = calculateAverage(guides);
    let highestSale = findHighestSale(guides);
    assignPrizes(guides, average, highestSale);
    printResults(guides, average);


   
   // enter your code her
}


// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

"use strict";

/*
Author: Bryn Norwood
Date: oct 31, 2023
Title: PROG1700 Assignment 3- Q1 Timesheet

Design and write a program that accepts the number of hours worked on each of five work days from the user, then displays different information calculated about those entries as output. 
Your solution should demonstrate an understanding of how to apply list and looping concepts in a program that should:
•	Include a flowchart that clearly shows all the paths of execution that will exist within your designed solution to this problem.
•	Prompt the user to enter the five daily hours worked amounts, and store them in the program. 
•	Determine the day(s) on which the most hours were worked and display the day(s) and hours onscreen. 
•	Calculate and display both the total and the daily average of hours worked.
•	Display a list of all days that had insufficient hours, which is defined as less than 7 hours.

Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (loops and lists).
 make an array to store 5 numbers
  find biggest number
*/
// DO NOT EDIT: The main function to house our program code 
let readlineSync = require('readline-sync');
// fuction to calculate the max hours
function findMaxHours(days) {
    let maxHours = days[0];
    for (let i = 1; i < days.length; i++) {
        if (days[i] > maxHours) {
            maxHours = days[i];
        }
    }
    return maxHours;
}
// Find the days on which the maximum hours were worked
function daysWithMaxHours(days, maxHours) {
    let result = [];
    for (let i = 0; i < days.length; i++) {
        if (days[i] === maxHours) {
            result.push(`Day #${i + 1}`);
        }
    }
    return result;
}
// Calculate the total hours worked in a given week
function calculateTotal(days) {
    let total = 0;
    for (let i = 0; i < days.length; i++) {
        total = total + days[i];
    }
    return total;
}
// Calculate the average hours worked per day in a given week
function calculateAverage(total, daysLength) {
    return total / daysLength;
}
// Find days with insufficient hours (less than 7)
function findInsufficientDays(days) {
    let result = [];
    for (let i = 0; i < days.length; i++) {
        if (days[i] < 7) {
            result.push(`Day #${i + 1}: ${days[i]} hours`);
        }
    }
    return result;
}


function main()
{
    let daysWorked = [];
    console.log ("Please enter worked hours (Monday through Friday");
    for (let i = 0; i<5; i++){  //loop to run through eaCH DAY OF THE WEEK, 1 TO 5
            let hoursWorked = readlineSync.question(`Enter hours worked on day #${i+1}:`);
            daysWorked.push(Number(hoursWorked));
    }
    //declaring variables ot use in main (pulling form functions)
    let maxHours = findMaxHours(daysWorked);
    let maxHoursDays = daysWithMaxHours(daysWorked, maxHours); //sending two variable sup to next function
    let totalHours = calculateTotal(daysWorked);
    let averageHours = calculateAverage(totalHours, daysWorked.length);
    let insufficientDays = findInsufficientDays(daysWorked);


    
    console.log ("---------------------------------------------");
    console.log (`the Most Hours worked was on: ${maxHoursDays} `);
    console.log (`Day ${maxHoursDays} where you worked ${maxHours} hours`);

    
    console.log("-----------------------------------------------");
    console.log(`The total amount of hours worked was:${totalHours}`);
    console.log(`The average number of hours worked each day was: ${averageHours}`);
    console.log("-----------------------------------------------");

    console.log("Days you slacked off (i.e. worked less than 7 hours):");
    console.log(insufficientDays);

   

    console.log
    // enter your code here
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

"use strict";
/* Author: Bryn Norwood
 9/15/2023
Exercise 3- question 1
Baseball Write code to read the name of a baseball team, the number of games won, and the
number of games lost, and display the name of the team and the percentage of games won.

*/

// Do not edit:the main function to house our program code
let readlineSync = require('readline-sync');
function main()
{
    // input
    //get the info from users input
    console.log("Calculate the profit/earning ratio");
    let teamName = readlineSync.question("Please input team name: ");
    let gamesWon = parseInt(readlineSync.question("Enter games won "));
    let gamesLost = parseInt(readlineSync.question("enter games lost "));
    let totalGameCount = gamesWon + gamesLost;

    //process
    //calculate the percentage of games won (games won / (games won + games lost))
    let wonPercent = gamesWon/totalGameCount * 100;

    //output
    //display the name of the team and % of games won
    console.log(teamName + "- percentage of games won: " + wonPercent.toFixed(2) +"%");
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

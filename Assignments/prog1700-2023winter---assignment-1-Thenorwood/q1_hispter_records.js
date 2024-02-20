"use strict";

/* Name: Bryn Norwood
Date 09/19/2023
Description: Question 1, hipster records receipt generator
*/

// DO NOT EDIT: The main function to house our program code
let readlineSync = require("readline-sync"); 
function main()
{
    // input
    console.log("Hipster's Local Vinyl Records - Customer Order Details");
    let name = readlineSync.question("Enter the customer's name: ");
    let kilometers = readlineSync.question("Enter the distance in kilometers for delivery: ");
    let purchase = readlineSync.question("Enter the cost of cost of records purchased: ");

    // process
    let dcost = parseFloat((kilometers * 15).toFixed(2));
    let pcost = parseFloat((purchase * 1.14).toFixed(2));
    let tcost = parseFloat((dcost + pcost).toFixed(2));

    // output
    console.log("Purchase summary for " + name);
    console.log("delivery cost: " + dcost);
    console.log('Purchase Cost: ' +  pcost);
    console.log('Total Cost: ' +  tcost);
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}


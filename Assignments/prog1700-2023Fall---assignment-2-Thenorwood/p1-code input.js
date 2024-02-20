"use strict";

/*
Student Name:   Bryn Norwood
Date:          Oct 10, 2023 
Program Title:  landscape.js
Description:    create a program that calculates the total
cost of landscaping
*/
let readlineSync = require("readline-sync");
function main() // <-- Don't change this line!
{   
//input
//gather variables. address, depth, width
let addr = readlineSync.question("Enter House Number: ");
console.log();
let depth = readlineSync.question("Enter property depth (feet): ");
console.log();
let width = readlineSync.question("Enter property width: ");
console.log();
let grass = readlineSync.question("Enter type of grass (fescue, bentgrass, campus): ").toLowerCase();
console.log();
let trees =readlineSync.question("Enter the number of trees: ");


//process
//start with a base rate of 1000
//calculate square feet, calculate if area is greater than 5000 and add a 500 charge if it is
//decide rate depending on type of grass selected
let price = "";
let fprice = "";

let cash = 1000;
let sqfeet =(depth*width);
if (sqfeet > 5000){
    cash= (cash + 500)
}
if (grass == "fescue"){
    fprice=(cash+(sqfeet*.05))
}else if (grass == "bentgrass"){
    fprice=(cash+(sqfeet*.02))
}else if (grass == "campus"){
    fprice =(cash+(sqfeet*.01))
}

if (trees >= 1){
    console.log(`Total cost for house ${addr} is: ` +(fprice+(trees*100)));
}else{
console.log(`Total cost for house ${addr} is: ` +fprice );
}




//output

}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}
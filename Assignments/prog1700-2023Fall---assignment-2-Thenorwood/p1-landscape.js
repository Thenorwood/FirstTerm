"use strict";

/*
Student Name:  Bryn Norwood
Date:           Oct 12, 2023 
Program Title:  Assignment 1, landscape
Description:    create a program that calculates the total
cost of landscaping
*/
let readlineSync = require("readline-sync");
function fprice(depth, width, grass, trees) //forgot about adding variables
{
  //base function  
    let fprice = "";
    let cash = 1000;
    let sqfeet = depth*width;
    if (sqfeet > 5000){
        cash = cash + 500
    }
    if (grass == "fescue"){
        fprice=parseFloat(cash+sqfeet*.05)
        }else if (grass == "bentgrass"){
        fprice=parseFloat(cash+sqfeet*.02)
        }else if (grass == "campus"){
        fprice=parseFloat(cash+sqfeet*.01)
        }
        if (trees >= 1){
        (fprice =(fprice+trees*100))

    }
    return fprice;
    }
function main() // <-- Don't change this line
{
//inputting variables. address doesnt count in function goes directly to end
let addr = readlineSync.question("Enter House Number: ");
console.log();
let depth = readlineSync.questionInt("Enter property depth (feet): ");
console.log();
let width = readlineSync.questionInt("Enter property width: ");
console.log();
let grass = readlineSync.question("Enter type of grass (fescue, bentgrass, campus): ").toLowerCase();
console.log();
let trees =readlineSync.questionInt("Enter the number of trees: ");
console.log()
console.log (`Total cost for house ${addr} is: $`+fprice(depth, width, grass, trees).toFixed(2));
}



// Do not change any of the code below!
if (require.main === module)
{
    main();
}
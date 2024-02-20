"use strict";

/*
Name: bryn Norwood
Date: 9/24/2023
Description imperial to metric converter program
*/
// DO NOT EDIT: The main function to house our program code 
let readlineSync=require("readline-sync");
function main()
{
    // input
    console.log("ImperiaL to Metric Converstion");
    console.log();
    let tons = parseFloat(readlineSync.question("Enter the number of tons: "));
    let stone = parseFloat(readlineSync.question("Enter the numbner of stone: "));
    let pounds = parseFloat(readlineSync.question("Enter the amount of pounds: "));
    let ounces = parseFloat(readlineSync.question("Enter the number of ounces: "));


    //process
    let Tounce = (35840 * tons + 224 * stone + 16 * pounds + ounces);
    let totalkg = (Tounce/35.274);
    let mtons = parseInt(totalkg/1000);
    let kg = parseInt(totalkg - mtons*1000);
    let grams = parseFloat((totalkg - kg - mtons*1000)*1000);


    //output
    console.log (`The metric weight is ${mtons.toFixed(0)} Metric tons,  ${kg.toFixed(0)}  kilos, and ${grams.toFixed(1)} grams.`);
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

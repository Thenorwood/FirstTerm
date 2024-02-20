"use strict";
/*
Author: Bryn Norwood
Date: 09/28/23
Description: In  class exercise 6, orange order calculator
*/

// DO NOT EDIT: The main function to house our program code 
let readlineSync= require('readline-sync');
function main()
{
    
    //input
    console.log("Orange orders calculator");
    let orderSize = parseFloat(readlineSync.question("enter pounds ordered: "));
    let location = readlineSync.question("enter location: ");
    //process
    let orderCost = orderSize*1.99;
    let shippingCost;
    if ((orderSize>=100) || (location.toLowerCase() == "halifax")){
        shippingCost = 7.5 - 1.5;
    }else{
        shippingCost= 7.5;
    }
    let finalcost = orderCost + shippingCost;
  
  
    //output
    console.log(`Cost of the orange: $${orderCost}`);
    console.log(`Cost of the shipping: $${shippingCost}`);
    console.log(`total: $${finalcost}`);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

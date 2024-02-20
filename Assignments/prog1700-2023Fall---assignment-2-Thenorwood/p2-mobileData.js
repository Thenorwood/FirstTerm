"use strict";

/*
Student Name:   Bryn Norwood
Date:           oct 17/2023 
Program Title:  assignment 2 question 2
Description:    mobile data calculator
*/
/*
Up to and including 200Mb 	                $20.00 flat rate 
Over 200Mb and up to and including 500Mb 	$0.105 per Mb 
Over 500Mb and up to and including 1Gb 	    $0.110 per Mb 
Over 1Gb 	                                $118.00 flat rate 
*/
let readlineSync = require("readline-sync");
//adding in function and variables for function
function mobiledatacost(data)
{   
    let datacost = "";
    
//adding if-else statements
//base cost is 20 bucks so initial cost is 20.00 all if statements build on that
//changed that as price doesnt increase by 20 bucks each time
    if  (data <=200){
        datacost = parseFloat(20.00)
    }else if((data > 200)&&(data<=500)){
        datacost = parseFloat(20+((data-200)*.105))
    }else if ((data > 500)&&(data<=1000)){
        datacost = parseFloat(20+52.5((data-500)*.110))
    }else if (data>1000)
        datacost = parseFloat(118.00)

    return datacost;
    //fixed equations to calculate cumulative cost
}



function main() // <-- Don't change this line!
{   

let data = readlineSync.question("Enter data usage (Mb): ");
console.log("Total charge is $" +mobiledatacost(data).toFixed(2));
//added function to the consol.elog

}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}
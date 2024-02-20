"use strict";

/*
Student Name:   Bryn Norwood
Date:           oct 17, 2023 
Program Title:  auto insurance
Description:    

 male and your age is 15 to 24, the price of the vehicle
multiplied by 25%/12
age is 25 to 39, the price of vehicle
multiplied by 17%/12
age 40-69, price of vehicle *10%/12

female 15-24, price of vehicle*20%/12
25-39, price of vehicle*15%/12
40-69, price of vehicle*10%/12
*/
let readlineSync=require('readline-sync');

function InsuranceCost(sex, age, cost)
{
    let percent= 0;
    //nested if statements within the if statement about being male or female
    if (sex=="male"){
        if ((age>=15)&&(age<25)){
            percent=.25
        }else if ((age>=25)&&(age<40)){
            percent=.17
        }else if ((age>=40)&&(age<70)){
            percent=.10
        }
    else if(sex=="female"){
        if ((age>=15)&&(age<25)){
            percent=.20
        }else if ((age>=25)&&(age<40)){
            percent=.57
        }else if ((age>=40)&&(age<70)){
            percent=.10
        }
        }
    
    }
    let monthcost=parseFloat((cost*percent)/12);
    return monthcost;

}

function main() // <-- Don't change this line!
{   
//did the function main first to declare variables being used
let sex = readlineSync.question("Are you 'Male' or 'Female': ").toLowerCase();
console.log();
let age = readlineSync.question("Enter your age: ");
console.log();
let cost = readlineSync.question("Enter the purchase price of the vehicle: ");
console.log()
console.log("Your monthly insurance will be $"+InsuranceCost(sex, age, cost).toFixed(2));





}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}
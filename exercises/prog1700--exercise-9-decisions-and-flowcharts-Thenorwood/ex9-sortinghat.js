"use strict";
//author: Bryn Norwood
//Date: oct 10, 2023
//description: exercise 9 sorting hat
var readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function main()
{
    //Input
    //get last name 
 console.log("Time to be sorted!");
 console.log();
 let lastName = readlineSync.question("what is your last name?: ").toLowerCase();  
    let house ="";
    //process
   
    //if last name is potter put in gryffindor
    // if last namew puit in slytherin
     // put in house by random number. between 1 and 4
     // 1 is gryffindor
     // 2 is slytherin
     //3 is ravenclaw
     //4 is hufflepuff
    if (lastName == "potter"){
        house = "gryffindor";
    }else if (lastName == "malfoy"){
        house = "slytherin";
    } else{
        let num = Math.floor(Math.random()*4) + 1;
        if (num ==1){
            house = "Gryffindor"
        }else if (num ==2){
            house = "Slytherin"
        }else if (num ==3){
            house = "Ravenclaw"
        }else {house = "Hufflepuff"}
    }

    console.log("Student is assigned to "+house);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

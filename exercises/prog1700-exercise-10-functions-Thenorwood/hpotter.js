"use strict";
//author: Bryn Norwood
//Date: oct 12, 2023
//description: exercise 9 sorting hat
var readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function AssignHouse(lastName)
{
    let AssignHouse="";
    if (lastName == "potter"){
        house = "gryffindor";
    }else if (lastName == "malfoy"){
        AssignHouse = "slytherin";
    } else{
        let num = Math.floor(Math.random()*4) + 1;
        if (num ==1){
            AssignHouse = "Gryffindor"
        }else if (num ==2){
            AssignHouse = "Slytherin"
        }else if (num ==3){
            AssignHouse = "Ravenclaw"
        }else {AssignHouse = "Hufflepuff"}
    }
    return AssignHouse;
}
function main()
{
    
    let lastName = readlineSync.question("Please enter the students last name: ");
    console.log("Assigned House: " +AssignHouse(lastName));
   // lastName = readlineSync.question("please enter the students last name: ");
   // console.log("assigned House: " + assignHouse(lastName));
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

module.exports.prog1700Ex10 = main
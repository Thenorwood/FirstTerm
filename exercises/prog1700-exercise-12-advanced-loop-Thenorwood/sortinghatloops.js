"use strict";
let readlineSync = require("readline-sync");
/*

//author: Bryn Norwood
//Date: oct 26, 2023
//description: exercise 10 sorting hat w/loops. allow 10 students to be entered everey time progream runs, 
//then report when ends
const houseName = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
*/
function assignHouse(lastname)
{
    let assignedHouse="";
    if (lastname == "Potter"){//Check if the last name is Potter, if it is, assign to Gryffindor
        assignedHouse = "Gryffindor";
    }else if (lastname == "Malfoy"){//Check if the last name is Malfoy, if it is, assign to Slytherin
        assignedHouse = "Slytherin";
    }else{
        //generate a random number between 0 and 1
        //if it is 0, continue, else they are muggles

        //Else, generate a random number from 1 - 4
        var randomNum = parseInt(Math.random()*4)+1; //generate 1 - 8
        if (randomNum == 1){//if random number == 1, assign to Gryffindor
            assignedHouse = "Gryffindor";
        }else if (randomNum == 2){//if random number == 2, assign to Hufflepuff
            assignedHouse = "Hufflepuff";
        }else if (randomNum == 3){//if random number == 3, assign to Ravenclaw
            assignedHouse = "Ravenclaw";
        }else if (randomNum == 4){
            assignedHouse = "Slytherin";
        }
    }
    /*
    if (assignedHouse!="na"){
        console.log(`You are going to .... ${assignedHouse}`);
    }else{
        console.log(`You're a muggle, how did you get on the train in the first place?`);
    }
    */
    return assignedHouse;
}

function main()
{   
    let house1Count = 0;
    let house2Count = 0;
    let house3Count = 0;
    let house4Count = 0;

    for (let i = 10; i >=1; i--) // loop for 10 times
    {
        let lname = readlineSync.question("Please enter the student's last name: ");
        let houseAssigned = assignHouse(lname); //store the house assigned
    

        //conditional statements to keep track of each house
        if (houseAssigned == "Gryffindor"){
            house1Count++;
        }else if (houseAssigned == "Hufflepuff"){
            house2Count++;
        }else if (houseAssigned == "Ravenclaw"){
            house3Count++;
        }else if (houseAssigned == "Slytherin"){
            house4Count++;
        }
        console.log("Asssigned house: " + houseAssigned);

    }

    console.log("Student(s) assigned to Gryffindor: " + house1Count);
    console.log("Student(s) assigned to Hufflepuff: " + house2Count);
    console.log("Student(s) assigned to Ravenclaw: " + house3Count);
    console.log("Student(s) assigned to Slytherin: " + house4Count);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}


  
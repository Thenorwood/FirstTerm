"use strict";
let readlineSync = require("readline-sync");
/*

//author: Bryn Norwood
//Date: oct 26, 2023
//description: exercise 10 sorting hat w/loops. allow 10 students to be entered everey time progream runs, 
//then report when ends
const houseName = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
*/
const houseName = ["Gryffindor", "hufflepuff", "Ravenclaw", "Slytherin"];
function assignHouse(lastname)
{
    let assignedHouse="";
    if (lastname == "Potter"){//Check if the last name is Potter, if it is, assign to Gryffindor
        assignedHouse = 0;
    }else if (lastname == "Malfoy"){//Check if the last name is Malfoy, if it is, assign to Slytherin
        assignedHouse = 3;
    }else{
        //generate a random number between 0 and 1
        //if it is 0, continue, else they are muggles

        //Else, generate a random number from 1 - 4
        var randomNum = parseInt(Math.random()*houseName.length)+1; //generate 1 - 4
        assignedHouse =  randomNum
        
    }
    
    return assignedHouse;
}

function main()
{   
    /*
    let house1Count = 0;
    let house2Count = 0;
    let house3Count = 0;
    let house4Count = 0;
    */
    let houseCount = [];// declare an array and store 4 values
    for (let i = 0; i < houseName.length; i++)
    {
        houseCount.push(0);
    }

    for (let i = 10; i >=1; i--) // loop for 10 times
    {
        let lname = readlineSync.question("Please enter the student's last name: ");
        let houseAssigned = assignHouse(lname); //store the house assigned
    
        houseName[houseAssigned]++;
        //conditional statements to keep track of each house
        /*
        if (houseName[houseAssigned] == "Gryffindor"){
            houseCount[0]++;
        }else if (houseName[houseAssigned] == "Hufflepuff"){
            houseCount[1]++;
        }else if (houseName[houseAssigned] == "Ravenclaw"){
            houseCount[2]++;
        }else if (houseName[houseAssigned] == "Slytherin"){
            houseCount[3]++;
        }
        */

        console.log("Asssigned house: " + houseName[houseAssigned]);

    }
    for (let i = 0; i < houseName.length; i++)
    {
        console.log("Student(s) assigned to "+ houseName[i] + ": " + houseCount[i]);  
    }
    /*
    console.log("Student(s) assigned to Gryffindor: " + houseCount[0]);
    console.log("Student(s) assigned to Hufflepuff: " + houseCount[1]);
    console.log("Student(s) assigned to Ravenclaw: " + houseCount[2]);
    console.log("Student(s) assigned to Slytherin: " + houseCount[3]);
    */
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}


  
"use strict";
/*
Author:bryn norwood
Assignment #:
Description: Design and write a program that reads the text from a provided text file into a array, 
displays the text on-screen, makes some alterations to the text and outputs the changed text to the screen, 
then saves the altered text as a new file. 
  
Begin by designing your solution to this problem in pseudocode, which will be submitted along with the program.
 Your solution should demonstrate an understanding of how to apply file I/O, array and looping concepts. Your program 
 will read all the text contained in a file (provided) into a array and output the unchanged text content to the console. 
 Your program should then make the following alterations: 

•	Add a line number (starting with line number 1) to the beginning of each line of text in the file. 
•	Any line of text that is longer than twenty characters should be converted to all lowercase letters. 
•	Any line 20 or less characters long should be converted to all uppercase letters. 
•	Your program should randomly select a line in the text and OMIT it from any output. 

Once all text alterations are complete, output the altered text to the console, and finish by saving the altered 
text to a new text file. Every time the program is run it should pick a different random line of text and you can 
assume the file doesn’t contain any commas. Although a text file is provided, your finished program should work
 with any text-based file, not just the original A-Team text. 

Your solution must contain examples demonstrating your understanding of appropriate use of functions and core 
assignment concepts (file I/O, 2-d arrays).




*/

let readlineSync = require("readline-sync");
let fs = require("fs");

function main() // <-- Don't change this line!
{ 
    let fileContents= fs.readFileSync("ateam_Original.txt", "utf-8"); 

    //input
    //read data from the ateam_original file
    let lines = fileContents.split("\r\n");


    let alteredLines = [];
    //process
    //add a line number to beginning of each line of text in the file
    for (let i=0; i <lines.length;i++)
    {
        let lineNumber = i+1; //line starts at #1
        let line = lines[i];
    
    //convert all lines fo text longer than 20 characters to lowercase
        if(line.length >20){
            line = lineNumber +" " + line.toLowerCase();
        }else{
        //convert all line sof text with 20 or less characters to uppercase
        line = lineNumber + " " + line.toUpperCase();
        }
        alteredLines.push(line);

    }
    //randomlly select a line in the text and omit it from any output 
    let lineOmit= Math.floor(Math.random()*alteredLines.length);

    //create array to hold final output
    let finalOutput = [];
    //omit random line and store text in array
    for (let i=0; i<alteredLines.length; i++){
        if (i == lineOmit) {
            finalOutput.push(" ");
        }else{
            finalOutput.push(alteredLines[i]);
        }
    }

    //output
    for (let line of finalOutput) {
    console.log(line);
    }
    //output altered text to console

    //save altered text to a new text file.
    let newFileContent = finalOutput.join("\n");
    fs.writeFileSync("ateam_Altered.txt", newFileContent, "utf8");
 
}
// Do not change any of the code below!
if (require.main === module)
{
    main();
}

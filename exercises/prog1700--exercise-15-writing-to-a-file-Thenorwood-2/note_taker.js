"use strict"
//name: bryn norwood
//date: november 13, 2023

let readlineSync = require("readline-sync");
let fs = require('fs');
function main()
{


    //input
    //keep aasking user to input a message until they enter a certain key
let note = readlineSync.question("please enter a not (type 'q' to quit: ");
while (note !="q")
{
    //get current content
    let fileContent = fs.readFileSync("Note_log.txt", 'utf-8');
    let currentDateTime = new Date();
    let timestamp = `${currentDateTime.getFullYear()}-${currentDateTime.getMonth() + 1}-${currentDateTime.getDate()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;
    fs.writeFileSync('note_log.txt', fileContent + note + " " + (timestamp) + '\n'); // the \n creates a line break after each listed line
    note = readlineSync.question("please enter a not (type 'q' to quit: ");
}


    //process & output
    //add the message to a file called node.txt w/o overwriting existing file contents


    



}
if(require.main === module)
{
    main();
}
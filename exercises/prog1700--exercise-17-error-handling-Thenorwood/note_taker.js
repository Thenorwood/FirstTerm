"use strict";
const fs = require('fs');
const readlineSync = require("readline-sync");
/*
Name: Bryn Norwood
Date: Nov 14, 2023
desc: create a note taking program with built
 in error handling when saving/reading to/from file

*/
function main(){
  let file_name = "note_taker.txt";  

  //input
  //keep asking user to put in the task and the # of times(s) they
  //have worked on that task, store it to a string?
  //type "qqq" to quit?
  let currentContent = "";
  try{
    currentcContent = fs.readFileSync(file_name, 'utf-8');
  }catch (e){
    //console.log(e.message.split(':'[0]));//e.m,essage will giver a shorter version of the error
  }

  let notes = []; //array to store notes
  let keepGoing = true;

  while(keepGoing)
  {
    let taskName = readlineSync.question("Enter thr name of the task: ");
    let numberOfTimes = readlineSync.question("Howmany times have you done the task? ");
    while (!isNaN(parseInt(numberOfTimes) || (parseInt(numberOfTimes) < 0))){
      numberOfTimes = readlineSync.question("How many times have you done the task? please enter a valid number? ");
    }
    let timeStamp = (new Date()).toISOString();
    if (parseInt(numberOfTimes > 1))
    {
    notes.push(timeStamp+ " " +taskName + " " + numberOfTimes + "time.");
    }else{
      notes.push(timeStamp+ " " +taskName + " " + numberOfTimes + "times.");
    }
    keepGoing = readlineSync.question("Do you want to continue? (type qqq to quit)");
  }
  /*let note = readlineSync.question("please enter a note (type 'qqq' to quit: )");
while (note !="qqq")
{
    let fileContent = fs.readFileSync("Note_log.txt", 'utf-8');
    let currentDateTime = new Date();
    let timestamp = `${currentDateTime.getFullYear()}-${currentDateTime.getMonth() + 1}-${currentDateTime.getDate()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;
    fs.writeFileSync('note_log.txt', fileContent + note + " " + (timestamp) + '\n');
    note = readlineSync.question("please enter a not (type 'qqq' to quit: ");
} 

*/

  //process
  fs.writeFileSync(file_name, currentContent+notes.join('\n')+'\n');

  //output
  }
  
if (require.main ===module){
    main();
}

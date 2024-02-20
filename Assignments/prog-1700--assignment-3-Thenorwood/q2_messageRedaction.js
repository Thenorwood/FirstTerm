"use strict";

/*
Author: Bryn Norwood
Date: Nov 3, 2023
Title: PROG1700 Assignment 3- Q2 Message Redaction


processing of string.

*/
let readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 

function getLettersToRedact() {
    let lettersInput = readlineSync.question('Type a comma-separated list of letters to redact: ');
    let letters = [];

    for (let i = 0; i < lettersInput.length; i++) {
        if (lettersInput[i] !== ' ' && lettersInput[i] !== ',') {
            letters.push(lettersInput[i].toLowerCase());
        }
    }

    return letters;
}
function redactPhrase(phrase, lettersToRedact) {
    let output = '';

    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];
        let replaceChar = false;

        for (let j = 0; j < lettersToRedact.length; j++) {
            if (char.toLowerCase() == lettersToRedact[j]) {
                replaceChar = true;
                break;
            }
        }

        if (replaceChar) {
            output += '_';
        } else {
            output += char;
        }
    }

    return output;
}

function main()
{
    let phrase = readlineSync.question('Type a phrase (or quit to exit program): ');

    while (phrase.toLowerCase() !== 'quit') {
        let letters = getLettersToRedact();
        let result = redactPhrase(phrase, letters);
        console.log(`Redacted phrase: ${result}`);
        
        phrase = readlineSync.question('Type a phrase (or quit to exit program): ');
    }
    // enter your code here
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

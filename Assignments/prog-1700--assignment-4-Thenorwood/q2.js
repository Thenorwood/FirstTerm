"use strict";
/*
Author:Bryn Norwood
Assignment #: mad libs game
Description: Design and develop a program that presents the user with a “Mad Libs” type game, where a random choice of words are read
 from a file, then interjected into a story read from another file.
Your solution should demonstrate an understanding of how to apply file I/O, string manipulation, array and looping concepts.
*/
let fs = require('fs');
let readLineSync = require('readline-sync');

// Function to parse the choices file and return a 2D array of choices and an array of descriptors
function parseChoices(choicesContent) {
    let lines = choicesContent.split('\n');
    let choicesArray = [];
    let descriptors = [];

    lines.forEach(line => {
        let elements = line.split(',');
        descriptors.push(elements.shift()); // Remove the first element and add to descriptors
        choicesArray.push(elements);
    });

    return { choicesArray, descriptors };
}

// Function to prompt user for their choices
function promptChoices(choicesArray, descriptors) {
    let userChoices = [];

    descriptors.forEach((descriptor, i) => {
        let choices = choicesArray[i];
        console.log(`Please choose ${descriptor}:`);
        choices.forEach((choice, index) => {
       console.log(`${index + 1}) ${choice}`);
        });

        let userChoiceIndex;
        while (true) {
            userChoiceIndex = readLineSync.question('Enter the number of your choice: ');
            userChoiceIndex = parseInt(userChoiceIndex, 10) - 1;
            if (userChoiceIndex >= 0 && userChoiceIndex < choices.length) {
                break;
            }
            console.log('Invalid choice, please enter a valid number.');
        }

        userChoices.push(choices[userChoiceIndex]);
    });

    return userChoices;
}

// Function to complete the story with user choices
function completeStory(storyContent, userChoices) {
    userChoices.forEach((choice, index) => {
        let token = `_${index + 1}_`;
        storyContent = storyContent.split(token).join(choice.toUpperCase());
    });
    return storyContent;
}

// Main function to control the flow of the game
function main() {
    let storyContent = fs.readFileSync('the_story_file.txt', 'utf8');
    let choicesContent = fs.readFileSync("the_choices_file.csv", "utf8");

    let { choicesArray, descriptors } = parseChoices(choicesContent);
    let userChoices = promptChoices(choicesArray, descriptors);
    let completedStory = completeStory(storyContent, userChoices);

    console.log("\nHere's your completed story:\n");
    console.log(completedStory);
}

// Execute the main function if the script is run directly
if (require.main === module) {
    main();
}

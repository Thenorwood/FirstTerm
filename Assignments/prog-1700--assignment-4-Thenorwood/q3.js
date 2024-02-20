"use strict";
/*
Author:
Assignment #:
Description: Design and develop a program that replicates the functionality of the provided sample application,
 a simple version of the game Battleship.

Begin by designing your solution to this problem in pseudocode, which will be submitted along with the program. Your 
solution should demonstrate an understanding of how to apply file I/O, array and looping concepts, in a Battleship program 
that will work as follows:

On application start, your code will read the contents of the provided ship grid text file into a two-dimensional array in
 your program. This ship map will be used as the “key”, indicating the locations of the five ships used in the game. Zeros 
 (0) indicate empty water, while ones (1) indicate part of a ship exists at that location. The ship map will remain invisible 
 to the user during gameplay. A second map (the targeting map) will be displayed to the user each turn, and will be used to 
 show the targeting results of the current game turn by turn. The initial display of the targeting map will be blank except 
 for the row and column indicators (Columns A, B, C, Rows 1, 2, 3, etc.).

The user will be given 30 turns to attempt to sink all five ships. During each turn, the user will be prompted to enter a map 
coordinate (ex. A2, F5, B10) representing the location at which they wish to fire a missile. After each missile shot attempt, 
your program will evaluate whether the chosen coordinate is a hit or a miss and notify the user of the result. The targeting 
map will be updated to show the latest missile result and be shown to the user. A message indicating the current missile count 
will also be displayed, used to tell the player how many turns remain.

Only valid targeting coordinates are allowed to be entered. If an invalid coordinate value is entered, the user will be prompted 
to re-enter a new coordinate until a valid coordinate is entered.

The game has two ending conditions: 
•	If the user hits every individual location in the map that contains part of a ship before running out of missiles, they win the game. 
•	If the user runs out of missiles before hitting every part of every ship, they lose the game. 
Your program should track the game’s progress and display either a “You win!” or “You lose!” message when either game ending condition 
is reached.

Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts
 (file I/O, 2-d arrays).

*/
// include readslinesync
//include fs
// Removed the 'use strict' at the top because it is already present in your function.
const readlineSync = require('readline-sync'); // include readline-sync
const fs = require('fs'); // include fs

const validLetters = 'ABCDEFGHIJ';
const validNumbers = '12345678910';

function printAttackMap(attackMap) {
  const headers = '  A B C D E F G H I J';
  console.log(headers);
  attackMap.forEach((row, index) => {
    const rowNumber = index < 9 ? ` ${index + 1}` : `${index + 1}`; // Adjust for double-digit numbers
    console.log(`${rowNumber} ${row.join(' ')}`);
  });
}

function getValidCoordinate() {
  let isValid = false;
  let input;

  while (!isValid) {
    input = readlineSync.question('Choose your target (Ex. A1, J10): ');
    input = input.toUpperCase();
    
    const letter = input[0];
    const number = input.slice(1);
    
    isValid = validLetters.includes(letter) && validNumbers.includes(number);
    
    if (!isValid) console.log('Invalid coordinate. Please try again.');
  }

  return input;
}

function processAttack(input, shipMap, attackMap, validLetters) {
  let col = validLetters.indexOf(input[0]);
  let row = parseInt(input.slice(1)) - 1;

  // Make sure the coordinate is within the map boundaries
  if (row >= 0 && row < shipMap.length && col >= 0 && col < shipMap[row].length) {
    if (attackMap[row][col].trim()) {
      console.log('You have already attacked this coordinate. Choose another one.');
      return 0;
    }

    if (shipMap[row][col] === 1) {
      console.log('HIT!!!!');
      attackMap[row][col] = 'X';
      return 1;
    } else {
      console.log('Miss');
      attackMap[row][col] = 'O';
      return 0;
    }
  } else {
    console.log('Coordinate out of bounds. Please try again.');
    return 0;
  }
}

function main() {
  let mapData = fs.readFileSync('map.txt', 'utf-8');
  let lines = mapData.split("\n");

  let shipMap = lines.map(line => line.split(",").map(Number));
  
  let attackMap = Array.from({ length: shipMap.length }, () => new Array(shipMap[0].length).fill(' '));

  let missiles = 30;
  let hits = 0;
  const totalShipParts = shipMap.flat().filter(part => part === 1).length; // Calculate total parts of ships

  while (missiles > 0 && hits < totalShipParts) {
    printAttackMap(attackMap);
    console.log(`You have ${missiles} missiles remaining.`);
    let input = getValidCoordinate();
    let hitResult = processAttack(input, shipMap, attackMap, validLetters);
    if (hitResult > 0) {
      hits += hitResult;
      if (hits === totalShipParts) {
        console.log('You sunk my entire fleet! You win!');
        break;
      }
    } else {
      missiles--; // Decrement only on a miss or new attack
    }
  }

  if (missiles === 0 && hits < totalShipParts) {
    console.log('Game over. You did not sink all the ships.');
  }

  printAttackMap(attackMap);
}

main();

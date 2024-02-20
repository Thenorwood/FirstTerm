"use strict";
//Name: bryn Norwood
//date: oct 10, 2023
//description: exercise 11
let readlineSync = require('readline-sync');
function main()
{
	console.log("Welcome to my number game!");
// let n is the number of guesses you get
	let totalguess = 10;
	let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//let t is the random number it comes up with to try to guess. between 1 and 100
	//for(let i = 0; i < totalguess; i++)
	let i = 0
	while(true)
	{
		let guess = parseInt(readlineSync.question("Enter a number between 1 and 100: "));
	// g is the number you guessed
		if (guess < random)
		{
			console.log("Higher");
		} 
		else if (guess > random)
		{
			console.log("Lower");
		} 
		else if (guess == random)
		{
			console.log(`You got it! ${random} was the answer!`);
			break;
		}
		
	}

	console.log("You didnt guess it. Game Over");
}
if (require.main === module)
{
		main();
}

"use strict";
//Name: Bryn Norwood
//Date: Mov 13, 2023
//desc: exercise 14
function main()
{
let fs = require('fs');//using a module called 'fs?

let o = Math.floor(Math.random() * (25 - 1 + 1)) + 1;//generates a random number between 1 - 25
let letArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
		  't','u','v','w','x','y','z'];//array of alphabets a-z
let punc = [' ', '.',','];//array of punctuation
let fileRead = "test_file.txt";//input file name (fileRead?)
let fw = "processed.txt";//another file
let e = "utf-8";//encoding
let om = "";//an empty string?

let im = fs.readFileSync(fileRead,e);// use the fs module to read the input fiule, using the e encoding
//im stores the content of the file
fs.writeFileSync(fw + filecontent + '\n');

for(let i = 0; i < im.length; i++)
{
	if(punc.includes(im[i]))
	{
		om += im[i];// copy the letter to om if it is one of the punctuation
	}
	else 
	{
		let ai = letArray.indexOf(im[i].toLowerCase());
		let ni = (ai + o) % 26;
		
		if(im[i].toUpperCase() == im[i])
		{
			om += letArray[ni].toUpperCase();
		}
		else
		{
			om += letArray[ni];
		}
	}	
}

console.log(om);

}
if (require.main === module)
{
    main();
}
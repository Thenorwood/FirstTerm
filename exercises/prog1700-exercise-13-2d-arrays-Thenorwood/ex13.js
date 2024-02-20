"use strict";
var readlineSync = require('readline-sync');

/////////////////////////////////////
/* 
PROG1700 - Exercise 13
name: Bryn Norwood
date: oct 31, 20
descriotion: 2d arrays
*/
/////////////////////////////////////


function main()
{
 let tictactoe = [
    ["","" ,"" ],
    [ "","", ""],
    [ "", "", ""]
 ];
 tictactoe[1][1]="x";
 tictactoe[0][0]="o";
 
 console.log(tictactoe[1][1]);

 for (let row=0; row<3; row++)
 {
    for(let col=0; col<3; col++)
    {
        if (tictactoe[row][col]=="")
        {
            console.log(`cell[${row}][${col}] is empty.`)
        }else{
            console.log(`cell[${row}][${col}] ${tictactoe[row][col]}`);
        }    }
}


}


//PROGRAM STARTS HERE
if (require.main === module)
{
    main();
}


//do not change the following lines
module.exports = {
   main
}

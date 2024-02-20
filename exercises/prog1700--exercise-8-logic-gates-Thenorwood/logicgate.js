"use strict";

// bryn norwood
// oct 10, 2023
// logic gate exercise 8

function main()
{

/*p = true, q equals false, r = true. if (p or q) and NOT(q and r): print
// "(something printed")
//input variables
write equations, add not at end of second\
combine as "and"

*/


let p =readlineSync.question("value for p? true/false")//true;
let q = ''//false;
let r = ''//true;


//process
if ((p == true)||(q ==false))
{
    (!(( q == false)&&(r ==true)));
}
console.log("something printed");


//output

}

if (require.main === module)
{
    main();
}
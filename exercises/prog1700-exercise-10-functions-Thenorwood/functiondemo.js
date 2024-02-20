"use strict"

function sayHello(greeting, name)
{
    return(greeting+" "+name);
}
    // () text between is just a plaxceholder can be anything... can have multiple placeholders
function main()
{
    //let name = "hamlet"
    //sayHello ("bryn");
    //ayHello ("god");
    console.log(sayHello ("good afternoon", "Bryn"));
}
//you can use the output of a function in another function
if (require.main === module)
{
    main();
}


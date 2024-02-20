function countDown()//added a
{
    const endOfTerm= new Date(2023,11,14,16,30,0,0)
    const currentDateTime = new Date();
    let diffMS = endOfTerm - currentDateTime;
    const remainingDay =Math.floor(diffMS/86400000);
    const remainingHour = Math.floor(diffMS%(remainingDay*86400000)/3600000);
    const remainingMin = Math.floor(diffMS%(remainingDay*86400000)-(remainingHour*3600000)/60000);
    const remainingSec = Math.floor(diffMS%(remainingDay*86400000)-(remainingHour*3600000)-(remainingMin*60000)/1000);
    document.getElementById
    ("countDownText").innerHTML = `${remainingDay}, ${remainingHour},${remainingMin},${remainingSec} til the end of the term (2023-12-14 16:30pm)`;
    if(counter >=3)
    {
        clearInterval(countDownTimer);
    }
    counter++;
}

function sayHello()
{
    alert("w3schools rock!");
}

function updateC()
{
    document.getElementById
    ("selectedText").innerHTML =
    "PROG1700 is great!";
    
}
const countDownTimer = setInterval(countDown, 1000);
"use strict"
/*
name: bryn norwood
date: nov 16, 2023
description: In a program called most_dangerous_airline.js we will 
read in data from the provided airline-safety.csv file. First, we should 
print a list of all airline names with their total fatalities. Our ultimate 
goal is to find the airline that has the most fatalities per kilometer 
travelled so Michael can avoid that airline. NOTE: You will need to add the 
two fatalities columns together as there is one for the years 85-99 and 
one for 00-14 and then divide it by the average number of kilometers travelled 
per available seat to find the fatality ratio (so, the answer should not just
 be “China Airlines” who have the most fatalities as they also have more flights 
and travel further).
*/
const fs = require("fs");


function main()
{

    //input
    //read csv file and save it in a 2d array
    let filename = "airline-safety.csv";
    let rawData = fs.readFileSync(filename, 'utf-8');//reads file content and stores it to a single string
    console.log(rawData)

    //process
    //parse content from csv into a 2d array
    //split the raw data into lines
    let lines = rawData.split('\r\n');
    let airlineInfo = []; //prepare the 2d array
    let maxFatality = -1 //set as negative number, smallest possible value (fatality rate cannot be smalle rthan 0)
    let mostDangerousAirline = "";
    for(let i = 1; i < lines.length; i++)//go over each line starting at second line, index 1
    {
        let info = []; //declare an empty array to store field for each col on a line
        info = lines[i].split(",");
        let fatalityRate = (parseInt(info[4]) + parseInt(info[7]))/parseInt(info[1]);
        if (fatalityRate > maxFatality)//find airline with highest fatality rate
            {
                maxFatality = fatalityRate;
                mostDangerousAirline = info[0];
            }
    info.push(fatalityRate); //add a column to store the fatality rate
    airlineInfo.push(info);
        
    }

    //calculate fatality raste of each airline
    
    

    //output
    //display airline and fatality rate with the worst safety record
    console.log(`the mst dangerous airline is ${mostDangerousAirline} with the highest fatality rate of ${maxFatality}`);
    fs.writeFileSync("result.csv", airlineInfo.join('\n'));
}

if (require.main === module)
{
    main();
}
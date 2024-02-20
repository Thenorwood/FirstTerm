"use strict"

/* 
name: bryn Norwood
Date: nov 11, 2023
description: dnd  character generator
*/
function main()
{
let characterRaces = ["dwarf", "elf", "human", "gnome", "halfling",];

let characterClasses = ["bard", "fighter", "wizard", "sorcerer", "paladin", "cleric", "rogue", "warlock"];

let characterBackgrounds = ["flutist", "househippo", "timelord"];

let rollD6 = () => Math.floor(Math.random() * (6 - 1) + 2);

let rollAbilityScores = () => {
    let diceRolls = [];

    let firstD6 = rollD6();
    diceRolls.push(firstD6);

    let secondD6 = rollD6();
    diceRolls.push(secondD6);    

    let thirdD6 = rollD6();
    diceRolls.push(thirdD6);

    let fourthD6 = rollD6();
    diceRolls.push(fourthD6);

    let dropLowest = (rolls) => {
        rolls = rolls.slice();
        rolls.splice(rolls.indexOf(Math.min.apply(null, rolls)),1);
        return rolls;
    };

    let abilityScore = dropLowest(diceRolls).reduce((a, b) => a + b, 0);
    return abilityScore;
}

let getRace = () => Math.floor(Math.random() * characterRaces.length);
let characterRace = characterRaces[getRace()];

let getClass = () => Math.floor(Math.random() * characterClasses.length);
let characterClass = characterClasses[getClass()];

let getBackground = () => Math.floor(Math.random() * characterBackgrounds.length);
let characterBackground = characterBackgrounds[getBackground()];

let strength = rollAbilityScores();
let dexterity = rollAbilityScores();
let constitution = rollAbilityScores();
let intelligence = rollAbilityScores();
let wisdom = rollAbilityScores();
let charisma = rollAbilityScores();

}
console.log("random character generator");
console.log("dnd character sheet");

console.log

if (require.main === module) {
    main();
}
  
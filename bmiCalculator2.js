// All code written by Danny E.
// These challenges were completed for the Complete JS 2022 by Jonas Schmedtmann course

/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote,
and improve it.
*/

/* Tasks for this challenge
1. Print a nice output to the console, saying who has the higher BMI.
The message is either "Mark's BMI is higher than John's!" or 
"John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
Example: "Mark's BMI(28.3) is higher than John's(23.9)!"
*/

/* Test data: 
Data 1: Mark weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is
1.95 m tall.
Data 2: Mark weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is
1.76 m tall.
*/

// Define Mark's mass (kg) and height (m), Data set 1.
let markMass = 78;
let markHeight = 1.69;

/* Data set 2.
let markMass = 95;
let markHeight = 1.88;
*/

// Calculate Mark's BMI
const MARK_BMI = Math.round(markMass / (markHeight * markHeight));

// Define John's mass and height, Data set 1.
let johnMass = 92;
let johnHeight = 1.95;

/* Data set 2.
let johnMass = 85;
let johnHeight = 1.76;
*/

// Calculate John's BMI
const JOHN_BMI = Math.round(johnMass / (johnHeight * johnHeight));

// Print out to the console based on the conditional of who's BMI is higher
if(MARK_BMI > JOHN_BMI) {
    console.log(`Mark's BMI (${MARK_BMI}) is higher than John's (${JOHN_BMI})!`);
} else {
    console.log(`John's BMI (${JOHN_BMI}) is higher than Marks's (${MARK_BMI})!`);
}

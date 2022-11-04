// All code written by Danny E.
// These challenges were completed for the Complete JS 2022 by Jonas Schmedtmann course

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height)

mass in kg, height in meter.
*/

/* Tasks for this challenge
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a Boolean variable 'markHigherBMI' containing information
about whether Mark has a higher BMI than John.
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
const MARK_BMI = markMass / (markHeight * markHeight);

// Define John's mass and height, Data set 1.
let johnMass = 92;
let johnHeight = 1.95;

/* Data set 2.
let johnMass = 85;
let johnHeight = 1.76;
*/

// Calculate John's BMI
const JOHN_BMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = MARK_BMI > JOHN_BMI;
console.log(markHigherBMI);

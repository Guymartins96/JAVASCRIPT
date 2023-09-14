//+++++++++ Values and Variables ++++++++++++++
console.log("Hello World!");
document.write('Hello World');
// window.alert('Hello World');

let firstName = "Guy";
console.log(firstName);



//+++++++++ Variable Naming Conventions ++++++++++++++

let obinna4 = "Obinna";
let _charles = "Charles";
let $chidubem = "Chidubem";

console.log(obinna4, _charles, $chidubem);

//+++++++++ Data Types ++++++++++++++

/*
JavaScipt has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

*/
// Booleans -> True or False


var javaScriptIsEasy = true;
var lifeIsHard = false;

console.log(typeof javaScriptIsEasy);
console.log(typeof lifeIsHard);


// Numbers
let chekwube = 30;
let kingsley = 29.8;

console.log(typeof chekwube);
console.log(typeof kingsley);


// Strings
let message = "Welcome to France";
console.log(typeof message);

let guy = "34";
console.log(typeof guy);

let donald = "24" + 2;
console.log(donald, typeof donald);


// Undefined Data type
let year;
console.log(year, typeof year);

// An empty value has nothing to do with "undefined" 

let car = '';
console.log(typeof car);


// When adding a number and a String, javeScript will treat the number as a String.
let vehicle = 16 + 4 + "Volvo";
console.log(vehicle, typeof vehicle);


/* Null

In JavaScript, Null is nothing. It is supposed to be something that doesnt exist.
the typeof of null is object
*/

let money = null;
console.log(money, typeof money);



/*

-- Difference between undefined and null

* Typeof of undefined is undefined
* Typeof of null is object

*/

// Similarities
console.log(null == undefined);
console.log(null === undefined);

// **************************** let, const and var ****************************

/* the let keyword


the let keyword was introduced in ES6 (2015)

Rules
1. let cannot be Redeclared
2. let must be Declared before use
3. let has Block Scope.


*/

// 1. let cannot be Redeclared
let subject = "mathematics";
// let subject = "English"; (this line will give an error)


// var can be redeclared

var fruit = "Orange";
var fruit = "Apple";

console.log(fruit);
//this will result to "Apple" because the last var declaration for the same variable overides the previous declarations

// 2. let must be Declared before use
let myVariable = 10;
console.log(myVariable);

//this will result to an error there was nor declarations for myVariable before use.
//now, we declare it to clear the error on line 128


let myNumber = 10;
console.log(myNumber);



sayHiToMe = "Hi Donald";
var sayHiToMe;
console.log(sayHiToMe);

// line 140-142 can also work, we assigned "Hi Donald", and then assign the variable to var
// this doesnt work for const and let


/*
Hoisting -> You can use the variable before it is declared
----------------  let and const are not hoisted -----------------
*/

sayHiToMe = console.log("Hi Donald");
var sayHiToMe;

//3. let has Block Scope.

{
    let job = 5;
    console.log(job);
}

// console.log(job); if you call let outside the block, it will show an error

// -------------- var does not have block scope -----------------
{
    var animal = "Lion";
    console.log(animal);

}
console.log(animal);
// it still works inside and outside the block


// -------------- var Redeclaring a variable inside the block will also redeclare the variable outside the block -----------------

var macBook = 10;

{
    var macBook = 200;
}

console.log(macBook);

// -------------- let Redeclaring a variable inside the block will not also redeclare the variable outside the block -----------------

let windows = 5;

{
    let windows = 200;
}

console.log(windows);

/*
The const keyword

      **Rules**

      1. const cannot be Reassigned
      2. const cannot be Redeclared
      3. const has Block Scope
*/

//1. const cannot be Reassigned

const costFromTempSiteToKodex = 200;
// costFromTempSiteToKodex =100;
// console.log(costFromTempSiteToKodex);

// the code above (207-209) will run into an error


//2. const cannot be Redeclared
// const yes = true;
// const yes = no;


//3. const has Block Scope

const mechanic = 500;

{
    const mechanicc = 50;
}

// console.log(mechanicc);
console.log(mechanic);


// **************************** Basic Operators ****************************

// Math Operators (Subtraction)
const now = 2023;
const kingsleyAge = now - 1988;
const chekwubeAge = now - 1990;

console.log(kingsleyAge, chekwubeAge);

// Multiplication, Division and raise to power

console.log(kingsleyAge * 2, chekwubeAge / 5, chekwubeAge ** 3);

/** classwork
 * Create 2 variables
 * The datatype must be strings
 * Add the two variables
 * and display the result in the console
 */

const fistName = "Igholade";
const lastName = "Joshua";

console.log(fistName + " " + lastName);


// **************************** Assignment Operators (=) ****************************

let numberOne = 10 + 5;
numberOne += 5; // numberOne = numberOne + 5; (can be re-written as)
numberOne += 5;
console.log(numberOne);


let numberTwo = 2 + 5;
numberTwo *= 7; // numberTwo = numberTwo * 7; (can be rewritten as)
console.log(numberTwo);


let numberThree = 1;
numberThree++; // numberThree = numberThree + 1; (can be rewritten as)
console.log(numberThree);


let numberFour = 4;
numberFour--; // numberFour = numberFour - 1; (can be rewritten as)
console.log(numberFour);



// **************************** Comparison Operators (>, <, >=, <=, ==, ===) ****************************
let obinnaAge, CharlesAge;

obinnaAge = '35';
charlesAge = 29;

console.log(obinnaAge <= charlesAge);


// **************************** Operators Precedence ****************************

const yearNow = 2023;
const guysAge = yearNow - 1982;
const chidubemAge = yearNow - 1990;

// console.log(guysAge,  chidubemAge, guysAge + chidubemAge);
console.log((guysAge + chidubemAge) * 10);

// items in the bracket are evaluated first







// -------------- CODING CHALLENGE -> JAVASCRIPT OPERATORS -----------------

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// TEST 1
let markMass, johnMass, markheight, johnHeight;

markMass = 78;
johnMass = 92;
markheight = 1.69;
johnHeight = 1.95;

markBMI = markMass / (markheight ** 2);
johnBMI = johnMass / (johnHeight ** 2);


const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);

// markMass += 17;
// johnMass -= 7;
// markheight += 0.19;
// johnHeight -= 0.19;
// console.log(markHigherBMI);

//TEST 2

let markMass1, johnMass1, markheight1, johnHeight1;

markMass1 = 95;
johnMass1 = 85;
markheight1 = 1.88;
johnHeight1 = 1.76;

markBMI1 = markMass1 / (markheight1 ** 2);
johnBMI1 = johnMass1 / (johnHeight1 ** 2);


const markHigherBMI1 = (markBMI1 > johnBMI1);
console.log(markHigherBMI1);


console.log(markBMI);


// **************************** Strings and Template Literals ****************************

const myName = "Donald";
const myJob = "Backend Developer";
const yearOfBirth = 1888;
const currentYear = 2023;

const donaldNew = "I'm " + myName + ", a " + (currentYear - yearOfBirth) + " year old " + myJob + "!";
console.log(donaldNew);

const donalnewer = `I'm ${myName}, a ${currentYear - yearOfBirth} year old ${myJob}!`;
console.log(donalnewer);

// this is knoown as template literals, 


// **************************** Taking Decisions: if / else Statement ****************************

const johnAge = 16;

if (johnAge >= 18) {
    console.log(`John is eligible to drink alchohol 🍺, because his age is ${johnAge}`);
}
else {
    const yearsLeft = 18 - johnAge;
    console.log(`John is not eligible to drink alchohol 😢, wait another ${yearsLeft} year(s)`);
}

let dayOfTheWeek = 'Monday';
if (dayOfTheWeek === 'Mmonday') {
    console.log("SIT AT HOME 🏡");
}
else {
    console.log("Write some code!");
}



//1.
if (markBMI > johnBMI) {
    const markBMIIsHigher = `Mark's BMI which is ${markBMI} is higher than John's BMI which is ${johnBMI}!`;
    console.log(markBMIIsHigher);
}
else {
    console.log(`John's BMI which is ${johnBMI} is higher than John's BMI which is ${markBMI}!`);
}


//2
// const markBMIIsHigher1 = `Mark's BMI which is ${markBMI1} is higher than John's BMI which is ${johnBMI1}`;
// console.log(markBMIIsHigher1);

// **************************** Type Conversion and Coersion ****************************
// Type conversion is the process of converting a value from one to another

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
// this is used to convert String to Number
console.log(Number(inputYear) + 10);

console.log(Number('Donald'));

console.log(String(23), 23);
// this is used to convert Number to String

// Type Coersion
// Type Coersion is when JavaScript coerces or changes a data type by itself

const sum = 35 + 'hello';
console.log(sum);

console.log('23' - '10' - 3);

console.log('24' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n, typeof n);

//Next Class - Truthy and Falsy Values

// **************************** Truthy and Falsey Values ****************************

// in javaScript, we have 5 Falsey values: 0, '', undefined, null and NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));


const moneyMaker = NaN;

if (moneyMaker) {
    console.log("Buy something nice");
}
else {
    console.log("Save the money!");
}

// **************************** Logical Operators ****************************

/*
Logical Operators are used to determine the logic between variables or values
   && is the AND Operator
   || is the OR Operator
   ! is the NOT Operator
*/

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;


//For AND Operator

if (hasDriversLicense && hasGoodVision) {
    console.log('Donald is Eligible to Drive');
}

else {
    console.log('Someone else should Drive!')
}

//For OR Operator

if (hasDriversLicense || hasGoodVision) {
    console.log('Donald is Eligible to Drive');
}

else {
    console.log('Someone else should Drive!')
}

//For NOT Operator

if (!hasDriversLicense || hasGoodVision) {
    console.log('Donald is Eligible to Drive');
}

else {
    console.log('Someone else should Drive!')
}

//COMBINATION

if (!hasDriversLicense && hasGoodVision || isTired) {
    console.log('Donald is Eligible to Drive');
}

else {
    console.log('Someone else should Drive!');
}


/* Coding Challange 3 - If Statements and Opeartors
 There are two football teams, Manchester and Barcelona. They compete against each other 3 times. The team with the highest average score will win the trophy!

 1. Calculate the average score for each team using the test data below.

 2. Compare the average scores of the teams to determine the winner of the competition and display it on the console. Remember to account for a possible draw, where both teams have the same average score.

 3. BONUS 1: Introduce a minimum score requirement of 100. According to this rule, a team can only win if it has a higher score than the other team and a score of at least 100 points. Hint: Use a logical operator to test for the minimum score, along with multiple else-if blocks. 😉

 4. BONUS 2: The minimum score requirement also applies to a draw. A draw will only occur if both teams have the same score and both teams have a score greater than or equal to 100 points. Otherwise, neither team wins the trophy.

 TEST DATA: Manchester scores 96, 108, and 89. Barcelona scores 88, 91, and 110.
 TEST DATA BONUS 1: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 123.
 TEST DATA BONUS 2: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 106.
 GOOD LUCK! 😀


 // Step 1
 const manchesterScore = (96 + 108 + 89) / 3;
 const barcelonaScore = (88 + 91 + 110) / 3;

 console.log(manchesterScore, barcelonaScore);


 // Step 2
 if(manchesterScore > barcelonaScore){
     console.log("Manchester wins the Trophy 🏆");
 }
 else if(barcelonaScore > manchesterScore){
     console.log("Barcelona wins the Trophy 🏆");
 }
 else if(manchesterScore === barcelonaScore){
     console.log("It's a Draw!");
 }

 // Step 3
 const manchesterScore2 = (97 + 112 + 101) / 3;
 const barcelonaScore2 = (109 + 95 + 123) / 3;
 console.log(manchesterScore2, barcelonaScore2);


 if(manchesterScore2 > barcelonaScore2 && manchesterScore2 >= 100){
     console.log("Manchester wins the Trophy 🏆");
 }
 else if(barcelonaScore2 > manchesterScore2 && barcelonaScore2 >= 100){
     console.log("Barcelona wins the Trophy 🏆");
 }
 else if(manchesterScore2 === barcelonaScore2 && manchesterScore2 >= 100 && barcelonaScore2 >= 100){
     console.log("Both Teams win the Trophy 🏆");
 }
 else{
     console.log("Nobody wins the Trophy 😭");
 }

 */


1.
const manchesterAverageScore = (96 + 108 + 89) / 3;
const barcelonaAverageScore = (88 + 91 + 110) / 3;
console.log(manchesterAverageScore, barcelonaAverageScore);


2.
if (manchesterAverageScore > barcelonaAverageScore)

    console.log('Manchester is the Winner');

else if (barcelonaAverageScore > manchesterAverageScore)

    console.log('Barcelona is the Winner');

else {
    console.log('Winner is Undetermined yet!')
}


3.
const manchesterAverageScore1 = ((97 + 112 + 101) / 3);
const barcelonaAverageScore1 = ((109 + 95 + 123) / 3);
const matchMinimumScore = 100;

if ((manchesterAverageScore1 > barcelonaAverageScore1) && (manchesterAverageScore1 >= matchMinimumScore))

    console.log('Manchester is the Winner');

else if ((barcelonaAverageScore1 > manchesterAverageScore1) && (barcelonaAverageScore1 >= matchMinimumScore))
    console.log('Barcelona is the Winner');

else if ((barcelonaAverageScore1 === manchesterAverageScore1) && (manchesterAverageScore1 >= matchMinimumScore) && (barcelonaAverageScore1 >= matchMinimumScore))
    console.log('Both Team wins the Trophy');

else {
    console.log('Winner is Undetermined yet!')
}

// console.log(barcelonaAverageScore1);


4.
const manchesterAverageScore2 = ((97 + 112 + 101) / 3);
const barcelonaAverageScore2 = ((109 + 95 + 106) / 3);


if ((manchesterAverageScore2 > barcelonaAverageScore2) && (manchesterAverageScore2 >= matchMinimumScore))

    console.log(`Manchester is the Winner`);

else if ((barcelonaAverageScore2 > manchesterAverageScore2) && (barcelonaAverageScore2 >= matchMinimumScore))

    console.log('Barcelona is the Winner');


else if ((manchesterAverageScore2 == barcelonaAverageScore2) && (manchesterAverageScore2 && barcelonaAverageScore2) >= matchMinimumScore)


    //OPTIONS
    // else if ((barcelonaAverageScore2 == manchesterAverageScore2) && ((barcelonaAverageScore2 >= matchMinimumScore) && (barcelonaAverageScore2 >= matchMinimumScore)))

    // else if ((manchesterAverageScore2 == barcelonaAverageScore2) && (manchesterAverageScore2 >= matchMinimumScore) && (barcelonaAverageScore2 >= matchMinimumScore))

    console.log(`This match is a Draw`);

else {
    console.log('Winner is Undetermined yet!')
}

console.log(barcelonaAverageScore2);

// **************************** The Switch Statement ****************************
const day = "Sunday"

switch (day) {
    case 'Monday':
        console.log('Sit at Home')
        break;
    case 'Tuesday':
        console.log('Attend KODEX class');
        break;
    case 'Wednesday':
        console.log('Sleep');
        break;
    case 'Thursday':
        console.log('Watch Movies');
        break;
    case 'Friday':
        console.log('Go to the Club');
        break;
    case 'Saturday':
        console.log('Clean up the house');
        break;
    case 'Sunday':
        console.log('Thank God, go to Church');
        break;
    default:
        console.log("Don't do anything");
}

// ASSIGNMENT 1: Express the Switch STatement in an if, else if, else statement


const day2 = 'Monday';

if (day2 === 'Monday') {
    console.log('Sit at Home');
}
else if (day2 === 'Tuesday') {
    console.log('Attend KODEX class');
}
else if (day2 === 'Wednesday') {
    console.log('Sleep');
}

else if (day2 === 'Thursday') {
    console.log('Watch Movies');
}

else if (day2 === 'Friday') {
    console.log('Go to the Club');
}

else if (day2 === 'Saturday') {
    console.log('Clean up the house');
}

else if (day2 === 'Sunday') {
    console.log('Thank God, go to Church');
}

else {
    console.log("Don't do anything");
}

// **************************** ADDITIONAL CLASS BY MISS START ****************************

// let dayofweek = 1;
// switch (dayofweek) {
//     case 1:
//         document.write('Sunday');
//         break;
//     case 2:
//         document.write('Monday');
//         break;
//     case 3:
//         document.write('Tuesday')
//         break;
//     case 4:
//         document.write('Wednesday');
//         break;
//     case 5:
//         document.write('Thursday');
//         break;
//     case 6:
//         document.write('Friday')
//         break;

//     case 7:
//         document.write('Saturday');
//         break;

//     default:
//         document.write('Not a valid day');
//         break;

// }
// **************************** ADDITIONAL CLASS BY MISS END ****************************



// **************************** NEXT CLASS: The Ternary Operator ****************************

// --------------------------------------- Tasks (22-08-23) -----------------------------------------------------

// Express the Switch Statement in an If else if else condition


// ************************************** The Ternary Operator ************************************************
////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


// SOLUTION
let bill = 430;
let tipOne = 15 / 100;
let tipTwo = 20 / 100;

let billTipOne = bill * tipOne;
let billTipTwo = bill * tipTwo;

let show;

show = bill >= 50 && bill <= 300 ? `the bill is ${bill} and the tip is ${billTipOne}, then your total bill ${bill + billTipOne}` : (bill >= 301 ? `Tthe bill is ${bill} and the tip is ${billTipTwo}, then your total bill ${bill + billTipTwo}` : "You have no Tip")

console.log(show);


let age10 = 4;
if (age10 <= 3) {
    document.write("Preschool");
    console.log("Preschool");

} else {
    document.write("Nursery School");
    console.log("Nursery School");
}



// **************************** LOOP ****************************

//LOOP: FOR, WHILE LOOP, DO WHILE LOOP, FOREACH
// for(Initialization; condition; Increment/Decrement){
//    What should be outputed
// }


// a way of writing
let a10;
for(a=0; a<=10; a++){
    document.write(a+"<br>");
}

// another way of writing

let b=0;
for(; b<=10; b++){
    document.write(b+"<br>");
}

// another way of writing

for(let c=0; c<=10; c++){
    document.write(c+"<br>");
}

// DO WHILE LOOP

let d=20;
do{
    document.write(d + "<br>")
    d++
}while(d<=10)

// WHILE LOOP

let e = 1;
while(a<=10){

document.write(e+ ' ')
}

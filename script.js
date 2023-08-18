//+++++++++ Values and Variables ++++++++++++++
console.log("Hello World!");

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
const chidubemAge = yearNow -1990;

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







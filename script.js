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
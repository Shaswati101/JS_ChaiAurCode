// Lesson 3
console.log("Kyoshi")

// Lesson 4
const name = "Kyoshi"
/* Scope of const is that you cannot reassign or change the value of the variable.
   */

let id = 1234
var roll = 1495
sub = "JavaScript"

// Lesson 5
"Use Strict"; // This command treats all further JS code as per its newer version

// PRIMITIVE Data Types in JavaScript
// number - can support any number up 2^ 53
// bigint - can support numbers bigger than the number data type
// string - always prefer "" to wrap your string
// boolean - true/false
// null - a standalone value in JS which acts as a placeholder for an empty value
   // eg: say, a server was to send us the temperature of a place upon request.
   // But due to some technical issues, it couldn't send any data.
   // In this case, we can't assume the value to be 0 because that is also a valid temperature.
   // Thus comes "null" to save the day and take the place of the empty/no value.

// undefined - the value of a variable that has been declared, but no value for that variable has been set
// symbol - a lil unique, but we'll come back to it while learning about React
// 


// ADVANCED Data Type
// object

// console.log(typeof undefined); //The typeof keyword lets us know the data type of the value passed after it. In this case, it's undefined
// console.log(typeof null) // object data type

// Lesson 6
let score = 33
console.log(typeof score); // number

let score_in_str = "33"
console.log(typeof score_in_str); // string


// What if we wanted to convert score_in_str into a number?
let score_in_num = Number(score_in_str)
console.log(typeof score_in_num); // number


// What if we convert an alphanumeric?
let score_aphanum = "33abc"
let score_only_num = Number(score_aphanum)
console.log(typeof score_only_num); // number

// But... There's a twist!
console.log(score_only_num);
/*
NaN(Not a Number)! But Why?
That's because any alphanumeric character cannot be converted into an actual number.
But since JS is a loosely typed language, it will not directly throw an error; however, it converts alphanums into NaN
*/

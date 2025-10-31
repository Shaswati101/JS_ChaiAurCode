// Lesson 6
let score = 33
// console.log(typeof score); // number

let score_in_str = "33"
// console.log(typeof score_in_str); // string


// What if we wanted to convert score_in_str into a number?
let score_in_num = Number(score_in_str)
// console.log(typeof score_in_num); // number


// What if we convert an alphanumeric?
let score_aphanum = "33abc"
let score_only_num = Number(score_aphanum)
// console.log(typeof score_only_num); // number

// But... There's a twist!
// console.log(score_only_num);
/*
NaN(Not a Number)! But Why?
That's because any alphanumeric character cannot be converted into an actual number.
But since JS is a loosely typed language, it will not directly throw an error.
However, it converts alphanums into NaN
*/



// ***********************************OPEATIONS************************************** //
let value = 3
let neg_value = -value

// console.log(neg_value); // Returns -3

// Now, let's try to add two strings!
let str1 = "Hello"
let str2 = " Earthlings!"
let str3 = str1 + str2

// console.log(str3); // Returns "Hello Earthlings!"
//Hmm... what if we add str1 and str2 in the console statement itself?
// console.log(str1 + str2); // Returns "Hello Earthlings!"


// Now... How about we try adding a string to a number?
// console.log("1" + 2); // Returns 12
// And, what is the data type of this 12?
// console.log(typeof("1" + 2)); // Returns string

// So, if we add a string and a number(s), the result will be of a string type!

// BUT... There's a twist! 🥨
// console.log(1 + 2 + "2"); // Returns 32!
// console.log(typeof(1 + 2 + "2")); // But don't be fooled! The result will be of string data type

// How?! Well, it turns out that any number written AFTER a string and added will be viewed as CONCATENATION
// While any numbers added before that will be considered as number and will be summed together.

// What if we subtract two strings?
// console.log("a" - "b"); // Interesting... It returns NaN 🤔

// How about a num and a str?
// console.log(3 - "a"); // Also NaN

// I'm feeling extra curious today... How about a str and a num?
// console.log("a" - 3);   // NaN, again!


let x1 = 3
console.log("x1 before operation:", x1); // 3

let y1 = x1++
console.log("x1 after operation: ", x1); // 3
console.log("y1:", y1); // 3 
/*
But how is x1 -> 4 and y1 -> 3? 
That's because, x1++ means value of x1 will be incremented AFTER OG value of x1 has been returned.
Meaning...
x1 is assigned value of 3 -> y1 is assigned the value of x1, i.e, 3 -> x1 is incremented by 1
*/


let x2 = 3 
console.log("x2 before operation:", x2); // 3

let y2 = ++x2
console.log("x2 before operation:", x2); //4
console.log("y2:", y2); //4
/*
Okay, but how does ++x2 make the value of y2 and ++x2 same?
Here's how this operation works:
x2 is assigned value 3 -> x2 is incremented to 4 -> y2 is then assigned the value of x2, i.e, 4
*/















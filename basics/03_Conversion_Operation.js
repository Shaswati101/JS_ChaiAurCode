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
But since JS is a loosely typed language, it will not directly throw an error.
However, it converts alphanums into NaN
*/



// ***********************************OPEATIONS************************************** //
let value = 3
let neg_value = -value

console.log(neg_value);

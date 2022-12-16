/* (DATA TYPES NOTES)

// this is a comment (JS ignores any thing after //)
//console.log(true)
// (you can use // to cancel out code like above)

true;
// boolean value
console.log(true)
// above will log true into console

let javascriptIsFun = true;

// console.log(typeof true); // this will log "boolean"
console.log(typeof javascriptIsFun); // this will log "boolean" because we let it = true
// console.log(typeof 23); // this will log number
// console.log(typeof 'Jonas'); // this will log string

javascriptIsFun = 'YES!' // this is how you change the value of an already assigned variable
console.log(javascriptIsFun); // this will log as "YES!"
console.log(typeof javascriptIsFun); // this will now log as a string because you changed javascriptIsFun = "YES!"

let year;
console.log(year); //  will come out as undefined becasue you didn't define year
console.log(typeof year); // will come out as undefined


year = 1991; // here we will reassign year to make it defined 
console.log(typeof year); // it will now come out as number

console.log(typeof null); // this is a bug that is never corrected 
*/

/* (LET, CONST, AND VAR NOTES)
// we use the let key to change declare variables that can chagne later (during the execution of our program)\

//let age = 30;
//age = 31; // this is called "mutating the variable"

// we use the const ket to declare variables that can not be changed 

//const birthYear = 1991; // this is an unmutable variable (birth year cant change but age can thats why we use const here)
//birthYear = 1990; // this will lead to a TypeError 

//const job; // missing initializer error will occur

// use const as default and let only when you're sure the varibale is going to need to change
// var should be avoided but we should know how it works for legacy reasons (you will see this in old code). It works the same as let

//var job = 'programmer';
//job = 'teacher';

lastName = 'Conner'; // this doesn't create a variable in the scope; always properly declare variables never write it like this
console.log(lastName); */

/* (BASIC OPERATORS NOTES)

// an operator allows us to transform values 
const now = 2037; //so that we don't have to repeat 2037
const ageJonas = now - 1991;
const ageLucy = now - 1998;
console.log(ageJonas, ageLucy);// here we use the minus operator to calculate an age
console.log(ageJonas * 2, ageJonas / 2 /10, 2**3) // ** = to the power of 

const firstName = 'Lucy';
const lastName = 'Conner';
console.log(firstName + ' ' + lastName); // you can use + to join two sriongs toigether too. The ' ' is used to add a space.

// Assignment Operators
let x = 10 + 5; // the = is an operator and the + is an operator
x += 10; // means x = x + 10. We are reassigning the x value that's why we used let. It should now be 25.
x *= 4; // means x = x * 4 (25 * 4) so x should = 100 here
x++; // x = x +1
x--; // decreases value by 1
x--; // value should be 99 here (101 -2 (because there is two x--))
console.log(x); // result will be 15 

// Comparison Operators
console.log(ageJonas > ageLucy); // this is asking if this is true or false 
// <, >, >=, <= are all comparison operators
console.log(ageLucy >= 18); // this should be true because I'm older then 18. This would be true if the variable used is 18 or greater and false if it is less than 18.

const isFullAge = ageLucy >= 18; // this variable holds the boolean value "true"

console.log(now - 1991 > now - 1998); // this code is the same

const year = 1999;
let age = 23;
console.log(2037 - year);*/
// usually all math operators are executed before comparison operators
// division happens before subtraction

/*// (String and Template Literals Notes)
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!' // need double quotes here because of "I'm". It wont work with ''
console.log(jonas) // should come out as "I'm Jonas, a 46 year old teacher!"

//Template Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`// `` is a template string 
console.log (jonasNew) // should come out as I'm Jonas, a 46 year old teacher!

console.log(`Just a regular string...`)// you can use `` to write string; if you use these you don't have to know which quotations to use

console.log('String with \n\
multiple \n\
lines') 
// \n\  means new line; 
console. log(`String
with 
multiple 
lines`) // using template literal(``) will make it so you don't have to use \n\
*/

//(Taking Decisions: if/else statement notes)

/* const age = 15;
const isOldEnough = age >= 18;

if(age >= 18){
    console.log('Sarah can get driving license 👹')
} else {
const yearsLeft = 18 - age
console.log(`Sarah is too young. Wait another ${yearsLeft} years `)
}
// else block will be executed when whatever is inside if () is false
//whenever value inside () is true, then what is inside {} for if statement will be executed
// this was executed because const age = 19 and const isOldEnough is true if age is >= 18
// when const age = lower then 18 else statement will be executed

/*if (){

} else {

} // this is called a control structure because it allows us to have more control over the way our code is executed
*/
/* const birthYear = 2012; // if this value is above 2000 then it will come out as 21, if it is below (like 1998) then it will log 20

let century; // make sure you always define all variables inside the code block
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21
}
console.log(century)
*/ //we can take decisions using if/else statement. We need a condition or any code that returns a boolean (true or false value)


// (CONVERSION AND COERCION NOTES)

// type conversion: when we manually convwert from one type to the other
// type coercion: when JS automatically converts types behind the scenes for us

// type conversion
const inputYear = '1998'; // can't use a string because it'll come out as 199818
console.log(Number(inputYear));
console.log(Number(inputYear) + 18); // we can use this to calculate when someone will be of full age 

console.log(Number('Lucy')) // will come out as NaN (means an invalid number)
console.log(typeof NaN) // will come out as number

console.log(String(23)) 

// type coercion
console.log('I am ' + 24 + ' years old') // this is using type coercion; it automatically converted 23 to a string
console.log('23' - '10' - 3) // should get 10 here because - operator converted strings to number 
console.log('23' + '10' + 3) // should get 23103 here because + operator turn numbers to strings
console.log('23' * '2') // should get 46 because * (times) operator converts strings into numbers too

let n = '1' + 1; // = string 11
n = n -1 // n = 11-1
console.log(n) // should come out as 10
console.log('10' - '4' - '3' - 2+'5') // should come out as 15

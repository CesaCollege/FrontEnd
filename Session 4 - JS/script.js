//introduction from here: https://javascript.info/intro
//ways to import javascript

/* <script type="text/javascript">
  alert("This alert box was called with the onload event");
</script>
<script type="text/javascript" src="path-to-javascript-file.js"></script> */


//teach console.log:
console.log("yasaman");
//taking input
var name = prompt("Please enter your name", "Bill Smith");

//Data Types:
//explain typeof function
// Primitive Data types - This includes null, undefined, string, boolean, number and object.
// Derived data types/Special Objects - These include functions, arrays and regular expressions. And yes, these are all derived from "Object" in JavaScript.
// An object in JavaScript is similar in structure to the associative array/dictionary seen in most object oriented languages - i.e., it has a set of key-value pairs.

// An array can be considered to be an object with the following properties/keys:

// Length - This can be 0 or above (non-negative).
// The array indices. By this, I mean "0", "1", "2", etc are all properties of array object.
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const Mycars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

a = 5; 
b = 4;
console.log(a + 2) ;
console.log(a + b) ;



//say the difference between let cosnt and variable
//ba if else

// no error
let message = "hello";
//talk about basic functions of strings
message = 123456;
//error
const message1 = "hello";s
message1 = 123456;

let n = 123;
n = 12.345;
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 )
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


// let ageone = null;
// let ageone;
// alert(ageone); // shows "undefined"

// What is the output of the script?
let he = "Ilya";
console.log( `hello ${he}` ); 
console.log( `hello ${1}` ); 
console.log( `hello ${"name"}` ); 



// Basic operators, maths:
// The following math operations are supported:
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.
// The first four are straightforward, while % and ** need a few words about them.
//question
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

//precedence
// https://javascript.info/operators

// These operators are not JavaScript-specific. They are supported in most programming languages.
// The list of operators:

// AND ( & )
// OR ( | )


//comparisons
// In JavaScript they are written like this:
// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.


// window.alert("Use alert to show simple massage");
// console.log("");
//confirm
//prompt



//conditionals
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

//ternary
// let result = condition ? value1 : value2;
let age = prompt('How old are you?', 'Age');
let accessAllowed = (age > 18) ? alert(true) : alert(false);
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);


// Multiple ‘?’
// A sequence of question mark operators ? can return a value that depends on more than one condition.
// For instance:
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );
// It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

// The first question mark checks whether age < 3.
// If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
// If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
// If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.




//Arrays:
const carsList = ["Saab", "Volvo", "BMW"];
//or
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
//or
// const cars = new Array("Saab", "Volvo", "BMW");

//Accessing Array Elements
// let car = cars[0];
// cars[0] = "Opel";

//convert to string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();

//methods for arrays:

//lengths:
//let length = fruits.length;

//join:
//The join() method also joins all array elements into a string.
fruits.join(" * ");

//pop and push:

//shift and unshift:
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruits.shift();
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements and returns the new array length:
fruits.unshift("Lemon");

//delete:
//Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array. Use pop() or shift() instead.
// const fruits = ["Banana", "2", "Apple", "Mango"];
delete fruits[0]
console.log(fruits)

//Merging (Concatenating) Arrays:
//The concat() method creates a new array by merging (concatenating) existing arrays. 
//The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const MyChildren = myGirls.concat(myBoys);

//The concat() method can take any number of array arguments:
const arr = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
MyChildren = arr.concat(arr2, arr3);

//The concat() method can also take strings as arguments:
//ask this as a question
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

//Splicing and Slicing Arrays:
//The splice() method can be used to add new items to an array:
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");


//The splice() method returns an array with the deleted items:
//check this example
// const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.splice(0, 1))

//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(0, 1);
//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.

//JavaScript Array slice():
//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange"):
//Note:
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
//This example slices out a part of an array starting from array element 3 ("Apple"):
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits4.slice(1);

const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits5.slice(3);

//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.
//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
const citrus3 = fruits5.slice(1, 3);


//Automatic toString():
//JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
//This is always the case when you try to output an array.
//All JavaScript objects have a toString() method.
//These two examples will produce the same result:
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.toString();


//JavaScript arrays have a push() function that lets you add elements to the end of the array, 
//and an unshift() function that lets you add elements to the beginning of the array. 
//The splice() function is the only native array function that lets you add elements to the middle of an array.

//Sorting an Array:
//The sort() method sorts an array alphabetically:
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();

//Reversing an Array:
//The reverse() method reverses the elements in an array.
//You can use it to sort an array in descending order:
const arra = ["Banana", "Orange", "Apple", "Mango"];
arra.sort();
arra.reverse();


//Numeric Sort:
//By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana").
//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
const num = [100,25];
num.sort();
console.log(num)
//Because of this, the sort() method will produce incorrect result when sorting numbers.
//You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
//descending:
points.sort(function(a, b){return b - a});

// The Compare Function:
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
// When the sort() function compares two values, 
// it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
function c(a, b){return a - b}
// Example:
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.


// Find the Min or Max Array Value
// There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.


//Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.
//Using Math.max() on an Array
//You can use Math.max.apply to find the highest number in an array:

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

//Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
// Using Math.min() on an Array
// You can use Math.min.apply to find the lowest number in an array:

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

//Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

//Class Work
// My Min / Max JavaScript Methods
// The fastest solution is to use a "home made" method.
// This function loops through an array comparing each value with the highest value found:
//max
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

//This function loops through an array comparing each value with the lowest value found:
//min
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}








// JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
//The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)
//The code to be executed, by the function, is placed inside curly brackets: {}
function myFunction(p1, p2) {
  return p1 + p2;
}
const result = myFunction(2,4)
console.log(result)
//Function parameters are listed inside the parentheses () in the function definition.
//Function arguments are the values received by the function when it is invoked.
//Inside the function, the arguments (the parameters) behave as local variables.

//When JavaScript reaches a return statement, the function will stop executing.
//If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
//Functions often compute a return value. The return value is "returned" back to the "caller":

//Accessing a function without () returns the function and not the function result:
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius;

//explain scope and difference between const and let
//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables can only be accessed from within the function.

//Function Expressions:
const add = function(a, b) {
  console.log(a+b);
} 
// Calling function
add(2, 3);
//Function expressions are not hoisted, meaning they must be defined before they can be called.
//hoisting in JS

//Arrow Functions: Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. 
//Here we do not use the “function” keyword and use the arrow symbol.
let addTwo = (a, b) => a + b; 
console.log(addTwo(3, 2));
//Note: When there is a need to include multiple lines of code we use brackets. 
//Also, when there are multiple lines of code in the bracket we should write return explicitly to return the value from the function.
const great = (a, b) => {
    if (a > b) 
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3,5));

//Anonymous Function 
// it is a function that does not have any name associated with it. 
// Normally we use the function keyword before the function name to define a function in JavaScript, however, 
// in anonymous functions in JavaScript, we use only the function keyword without the function name.
// An anonymous function is not accessible after its initial creation, 
// it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, 
// but only one expression.

// function() {
//  }
// ( function() => {
//      Function Body...
// } )();
setTimeout(function () {
    console.log("Welcome to GeeksforGeeks!");
}, 2000);
var greet = () => 
{
    console.log("Welcome to GeeksforGeeks!");
}
greet();
//Self-Invoking Functions:
// Function expressions can be made "self-invoking".
// A self-invoking expression is invoked (started) automatically, without being called.
// Function expressions will execute automatically if the expression is followed by ().
// You cannot self-invoke a function declaration.
// You have to add parentheses around the function to indicate that it is a function expression:
(() => {
    console.log("Hello");
})();

//arays:
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


//Loops:
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
}

//do
    //statement
//while (condition);
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//while (condition)
    //statement

let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}

//for...in statement:
function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {

    }
    result += "<hr>";
    return result;
  }

//A label provides a statement with an identifier that lets you refer to it elsewhere in your program. 
//For example, you can use a label to identify a loop, 
//and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.
markLoop: while (theMark) {
    doSomething();
  }


//break and continue:
//Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.
//When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
//When you use break with a label, it terminates the specified labeled statement.
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
  }

//   let i = 0;
// let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}


//DOM
//When a web page is loaded, the browser creates a Document Object Model of the page.
//The HTML DOM model is constructed as a tree of Objects:
//https://www.w3schools.com/js/js_htmldom.asp
//With the object model, JavaScript gets all the power it needs to create dynamic HTML:
// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

//Changing HTML Content
//The easiest way to modify the content of an HTML element is by using the innerHTML property.
// most common way to access an HTML element is to use the id of the element.
// the getElementById method used id="demo" to find the element.
<html>
<body>
<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>
</body>
</html>

//Changing the Value of an Attribute:
{/* <img id="myImage" src="smiley.gif">
<script>
document.getElementById("myImage").src = "landscape.jpg";
</script> */}

// document.write()
// In JavaScript, document.write() can be used to write directly to the HTML output stream:
// <!DOCTYPE html>
// <html>
// <body>
// <p>Bla bla bla</p>

// <script>
// document.write(Date());
// </script>

// <p>Bla bla bla</p>
// </body>
// </html>

//JavaScript querySelector():
// The querySelector() is a method used for searching and returning the very first element within the document that matches 
// the given selector. The queryselector in javascript only returns the element that matches with one of the specified CSS selectors,
//  or a group of selectors. 
// However, if no matches are found, it returns null.
let element = document.querySelector('h2')
console.log(element)
//https://www.scaler.com/topics/javascript-queryselector/


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="header"></h1>
    <p class="par"></p>
    <p class="par"></p>
    <div id="div1"></div>

    <script>

        document.getElementsByClassName("par")[0].innerHTML = "one"
        document.getElementsByClassName("par")[1].innerHTML = "Two"
        let one =  document.querySelector('.par')
        document.getElementById("header").innerHTML = one.innerHTML
        document.write(Date())
    </script>
</body>
</html>
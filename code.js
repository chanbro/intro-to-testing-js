// helloWorld function
// Ultimately, sayHello should say "Hello" to any string we pass to it.

// function helloWorld() {
//     return "Hello, World!";
// }

// Clone this repo to your projects folder following the "Getting Started" directions. Take a moment to orient yourself with the test runner, the existing tests, and the implementation inside of code.js.
//
//     Once you're setup and comfortable, go to code.js and change the name of the helloWorld function to hello. Then refresh report.html in your browser.
//
// function helloWorld() {
//     return "Hello");
// }
// What do you notice about the test results?
//    All red
//     What are some ways you think we could get the tests to turn green again?
// Test variables must match code
//     Set the function name in code.js back to helloWorld and re-run the tests.
//     Inside of the helloWorld function in code.js, replace return "Hello, World!" with return "Hello".
//
//     Run the tests by refreshing report.html in your browser.
//     Which tests fail? Which tests are still green?
// ALL FAIL!
//     Set the implementation back to return "Hello, World!"
// Inside of the helloWorld function in code.js, change the line return "Hello, World!" to console.log("Hello, World!"). Then refresh report.html.
//
// function helloWorld() {
//     return console.log("Hello, World!");
// }
//     What happens to the tests? Identify which tests stay green and which ones turn red.
// Pass: should be defined function; All else fail
//     Why do you think that is?
// It's a function but the funtion does not return the argument the test is looking for
//     Consider, what is the return value of a console.log? hint, it's always the same
//  Return value of console.log is the argument (in this case a message) logged into the console
// Consider, what is the return value of a return?
//  A plan return? Undefined
//     Fix your helloWorld implementation so that it greens all the tests.
//     Now, let's purposefully put a syntax error into the helloWorld function, to see what happens with the tests.
// function helloWorld() {
//     return "Hello, World!");

// Open up code.js and remove the closing curly brace from the end of the helloWorld function definition.
// Refresh report.html in your browser.
//     Fix the syntax error and confirm that tests are all green.
//     Now, go to code.js and replace the function statement for helloWorld with a function experession. Do all the tests stay green or not? Why or why not? Double check your syntax. These are interchangeable because functions are first class citizens in the JS language.
// IT DOESN'T WORK but I'm not sure why
// // function statement syntax
//     function helloWorld() {
//     return "Hello, World!";
// }
// // function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }


// EXERCISE 1

// Step 3: Now, let's go to code.js and create an empty function definition for sayHello.
// Step 4: Run all the tests. We're expecting all tests, including the new test for sayHello to be green.

// function sayHello() {
//
// }

//EXERCISE 2

// Step 3: Have your sayHello function return a string. The simplest code and smallest change possible is to return an empty string return "".

// function sayHello() {
//     return ""
// }

//EXERCISE 3
// Step 3: If the test wants us to return "Hello, Jane!" then literally write return "Hello, Jane!"; because that's the simplest way to green a test looking for "Hello, Jane!".

// function sayHello() {
//     return "Hello, Jane!";
// }

//EXERCISE 4
// Step 3: It's challenging not to jump to the "correct" answer already, but let's stay close to the TDD method. Write just enough code to green the test. This means making sure that the sayHello function definition inside of code.js takes an an input argument. If input === "Alex",

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

//EXERCISE 5

// Step 3: Again, you may feel the urge to jump to the "correct" answer already. Let's stay on target. Write just enough code to green the test. For this case, just enough code means adding another conditional such that if input === "Pat", then the function should have return "Hello, Pat!".

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!";
//     } else if (input === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

// EXERCISE 6

// Inside sayHello in code.js, what's a change you can identify that will improve the overall functioning of this function?
// Can you get the implmentation of sayHello down to a function with only one line of code inside?
//If we have return "Hello, " + input + "!";, does this work for all names?
// Does this bring up any other issues with other inputs?
// Does not work with "Hello, Jane!"

function sayHello(input) {
    return "Hello, " + input + "!";
}

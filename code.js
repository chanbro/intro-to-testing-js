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
function helloWorld() {

}

//EXERCISE 2

// Step 3: Have your sayHello function return a string. The simplest code and smallest change possible is to return an empty string return "".
    function helloWorld() {
    return ""
}




// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

// Step 1: Let's write the smallest test possible. Open up tests.js. Add a describe, an it, and an expect to assert that sayHello is a defined function. Use your tests for helloWorld as a guide.
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//         expect(typeof helloWorld).toBe('function');
//     });
// });

// Step 2: Run all the tests. At this point, we're expecting and hoping for a single, red failing test that we just now authored.
// Step 3: Now, let's go to code.js and create an empty function definition for sayHello.
// Step 4: Run all the tests. We're expecting all tests, including the new test for sayHello to be green.
// go to code.js

// Step 1: The smallest possible test, now that the function exists, is to ensure that calling the function gives us a string. Inside of tests.js, add an assertion to sayHello that it "should return a string when called.". The test should look similar to expect(typeof sayHello()).toBe("string")
// Step 2: Run all tests to make sure that the new test starts red.
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
});
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
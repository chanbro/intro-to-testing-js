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

//EXERCISE 1

// Step 1: Let's write the smallest test possible. Open up tests.js. Add a describe, an it, and an expect to assert that sayHello is a defined function. Use your tests for helloWorld as a guide.
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
});

// Step 2: Run all the tests. At this point, we're expecting and hoping for a single, red failing test that we just now authored.
// Step 3: Now, let's go to code.js and create an empty function definition for sayHello.
// Step 4: Run all the tests. We're expecting all tests, including the new test for sayHello to be green.
// go to code.js


//EXERCISE 2

// Step 1: The smallest possible test, now that the function exists, is to ensure that calling the function gives us a string. Inside of tests.js, add an assertion to sayHello that it "should return a string when called.". The test should look similar to expect(typeof sayHello()).toBe("string")
// Step 2: Run all tests to make sure that the new test starts red.
describe('sayHello', function() {
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
});


    // EXERCISE 3

// Step 1: How that the function exists and returns the right data type, let's add our first realistic assertion. In tests.js, assert that sayHello("Jane") returns "Hello, Jane!". Our first test should be super simple and super small.

describe('sayHello', function() {
        it('should return the string "Hello, Jane!" when executed', function() {
            expect(sayHello()).toBe("Hello, Jane!");
        });
});

//EXERCISE 4

// Step 1: In tests.js, assert that sayHello("Alex") returns "Hello, Alex!". Our first test should be super simple and super small. This means that our next test should look like expect(sayHello("Alex")).toBe("Hello, Alex!").
// Step 2: Run all tests and make sure that this newly added test is red.

describe('sayHello', function() {
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
});

//EXERCISE 5
//Step 1: Add another (tiny) assertion! In tests.js, assert that sayHello("Pat") returns "Hello, Pat!". Since our tests should be super simple, the assertion should be expect(sayHello("Pat")).toBe("Hello, Pat!")
// Step 2: Run all tests and make sure that this newly added test is red and failing.

describe('sayHello', function() {
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});
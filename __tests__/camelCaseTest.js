// https://www.codewars.com/kata/58097ae96037b88f57000105
// const Test = require('@codewars/test-compat');

// Continue with Jing as driver and Laura as navigator

const toCamelCase= require("../src/camelCase");

describe("toCamelCase", () => {
    test("should return helloWorld when using strategy 1", () => {
        expect(toCamelCase("hello world",1)).toBe("helloWorld");
    });

    test("should return hellOworld when using strategy 2", () => {
        expect(toCamelCase("hello world",2)).toBe("hellOworld");
    });

    test("should return hellOWorld when using strategy 3", () => {
        expect(toCamelCase("hello world",3)).toBe("hellOWorld");
    });

    test("'Each number plus one' with strategy 1 should return eachNumberPlusOne", () => {
        expect(toCamelCase("Each number plus one",1))
            .toBe("eachNumberPlusOne");
    });

//        Test.assertSimilar(toCamelCase("Each number plus one",1) , "eachNumberPlusOne")

//        Test.assertSimilar(toCamelCase("Each number plus one",2) , "eacHnumbeRpluSone")

//        Test.assertSimilar(toCamelCase("Each number plus one",3) , "eacHNumbeRPluSOne")

})

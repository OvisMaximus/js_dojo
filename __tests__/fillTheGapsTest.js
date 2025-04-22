const fill_gaps = require("../production/fillTheGaps");

describe("fill_gaps", () => {
    test("should return [1, 1, 1] when the input is [1, null, 1]", () => {
        const input = [1, null, 1];
        const expected = [1, 1, 1];
        expect(fill_gaps(input)).toEqual(expected);
    });
});
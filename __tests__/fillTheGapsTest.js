const fill_gaps = require("../production/fillTheGaps");

describe.each`
input | expected
${[1, null, 1]} | ${[1, 1, 1]}
${[1, null, null, null, 1]} | ${[1, 1, 1, 1, 1]}
${[1, null, 1, 2, null, 2]} | ${[1, 1, 1, 2, 2, 2]}
`("fill_gaps($input) should return $expected", ({ input, expected }) => {
    test("", () => {
        expect(fill_gaps(input)).toEqual(expected);
    });
});


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.75);
})

test("One dollar should be 156.5 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen (2)).toBe(292.52);
});

test("Un yen debe de ser ", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(10)).toBe(0.06);
});

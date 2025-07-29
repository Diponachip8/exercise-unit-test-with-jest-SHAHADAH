test("One dollar should be 148.51 Yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(2);

    // If 1 dollar is 148.51 yen, then 2 dollars should be (2 * 148.51)
    const expected = 2 * 148.51; 
     expect(fromDollarToYen(2)).toBe(297.02);
})


test("One yen should be 0.0050 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(3.5);

    // If 1 yen is 0.0050 pound, then 3.5 yen should be (3.5 * 0.0050)
    const expected = 3.5 * 0.0050; 
     expect(fromYenToPound(3.5)).toBe(0.0175);
})
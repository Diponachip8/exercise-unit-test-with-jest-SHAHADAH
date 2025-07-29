// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = {fromEuroToDollar }




const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 148.51;
    return valueInYen;
}
module.exports = {fromDollarToYen}




const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0050;
    return valueInPound;
}
module.exports = {fromYenToPound}
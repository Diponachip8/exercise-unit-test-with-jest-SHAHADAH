const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 148.51;
    return valueInYen;
}




const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0050;
    return valueInPound;
}
module.exports = {fromDollarToYen, fromYenToPound}
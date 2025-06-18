let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return Number(valueInDollar.toFixed(2));
}

const fromDollarToYen = function(valueInDollar) {
    let euros = valueInDollar / oneEuroIs.USD;
     let yenes = euros * oneEuroIs.JPY;
    return Number(yenes.toFixed(2));
}

const fromYenToPound = function(valueInYen) {
    let euros = valueInYen / oneEuroIs.JPY;
     let pound = euros * oneEuroIs.GBP;
    return Number(pound.toFixed(2));
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
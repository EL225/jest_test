

const fromDollarToYen = (USD) => {
    let JPY = 130.24;
    let USDToJPY = USD * JPY;
    return USDToJPY;
}
const fromEuroToDollar = (EUR) => {
    let USD = 1.2;
    let EURToUSD = EUR * USD;
    return EURToUSD;
}
const fromYenToPound = (JPY) => {
    let GBP = 0.0062;
    let JPYToGBP = JPY * GBP;
    return JPYToGBP
} 
const sum = (a,b) => {
    return a + b
    }
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
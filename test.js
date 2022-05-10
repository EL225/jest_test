test("One euro should be 1.206 dollars", function(){
    const {fromEuroToDollar} = require("./app.js");
    expect(fromEuroToDollar(50)).toBe(60); 
})
test("20 dollars is 2604.8 yen",function(){
    const {fromDollarToYen} = require("./app.js");
    expect (fromDollarToYen(20)).toBe(2604.8);
})
test("400 yen is 2.48 pounds", function(){
    const {fromYenToPound} = require("./app.js");
    expect (fromYenToPound(400)).toBe(2.48);
})
test('adds 14 + 9 to equal 23', () => {
    const{sum} = require("./app.js")
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
    });
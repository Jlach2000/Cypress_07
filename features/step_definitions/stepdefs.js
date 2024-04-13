const assert = require('assert');

const { Given, When, Then } = require('@cucumber/cucumber');

let shoppingCart = [];
[
    {"Product": "Laptop", "Price": "1000"},
    {"Product": "Headphones", "Price": "100"},
    {"Product": "Mouse", "Price": "20"}
]
  
    

Given('produkty zostały dodane do koszyka:', function (dataTable) {
    shoppingCart = dataTable.hashes();
});


When('przeliczam cały koszt koszyka', function () {
    let totalCost = 0;
    
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i];
        totalCost += parseInt(product.Price);
    }
})

Then('koszt zakupów {int}', function (sexpectedTotalCost) {
    const actualTotalCost = this.totalCost;
    assert.strictEqual(actualTotalCost, expectedTotalCost )
});
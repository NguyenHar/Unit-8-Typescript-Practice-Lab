var mountains = [];
mountains.push({ name: "Kilimanjaro", height: 19341 });
mountains.push({ name: "Everest", height: 29029 });
mountains.push({ name: "Denali", height: 20310 });
function findNameOfTallestMountain(mountains) {
    var tallestName = "";
    var tallestHeight = 0;
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestHeight) {
            tallestName = mountains[i].name;
            tallestHeight = mountains[i].height;
        }
    }
    return tallestName;
}
var products = [];
products.push({ name: "Toothbrush", price: 0.99 });
products.push({ name: "Keyboard", price: 149.99 });
products.push({ name: "Monitor", price: 249.99 });
function calcAverageProductPrice(products) {
    var i = 0;
    var total = 0;
    products.forEach(function (value) {
        i++;
        total += value.price;
    });
    return total / i;
}
var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(items) {
    var total = 0;
    items.forEach(function (value) {
        total += (value.product.price * value.quantity);
    });
    return total;
}
console.log(findNameOfTallestMountain(mountains));
console.log(calcAverageProductPrice(products));
console.log(calcInventoryValue(inventory));

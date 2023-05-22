interface Mountain {
    name : string;
    height : number;
}
let mountains : Mountain[] = [];
mountains.push({name:"Kilimanjaro", height:19341});
mountains.push({name:"Everest", height:29029});
mountains.push({name:"Denali", height:20310});

function findNameOfTallestMountain(mountains : Mountain[]) : string {
    let tallestName = "";
    let tallestHeight = 0;
    for (let i=0; i<mountains.length; i++)
    {
        if (mountains[i].height > tallestHeight)
        {
            tallestName = mountains[i].name;
            tallestHeight = mountains[i].height;
        }
    }
    return tallestName;
}


interface Product {
    name : string;
    price : number;
}
let products : Product[] = [];
products.push({name:"Toothbrush", price:0.99});
products.push({name:"Keyboard", price:149.99});
products.push({name:"Monitor", price:249.99});

function calcAverageProductPrice(products : Product[]) : number {
    let i=0;
    let total=0;
    products.forEach((value : Product) => {
        i++;
        total += value.price;
    });
    return total/i;
}


interface InventoryItem {
    product : Product;
    quantity : number;
}
let inventory : InventoryItem[] = [
    {product : {name:"motor",price:10.00}, quantity:10},
    {product : {name:"sensor",price:12.50}, quantity:4},
    {product : {name:"LED",price:1.00}, quantity:20}
];
function calcInventoryValue(items : InventoryItem[]) : number {
    let total = 0;
    items.forEach((value : InventoryItem) => {
        total += (value.product.price * value.quantity);
    });
    return total;
}


console.log(findNameOfTallestMountain(mountains));
console.log(calcAverageProductPrice(products));
console.log(calcInventoryValue(inventory));
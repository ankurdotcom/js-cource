
const saleItems = [
    {
    itemName: 'Samosa',
    itemCatagory: 'Snacks',
    sellingType: 'SellByUnit',
    measuringUnit: 'piece',
    sellingPrice : 10,
    variantName : null
},
{
    itemName: 'Lattha Barfi',
    itemCatagory: 'Sweets',
    sellingType: 'SellByFraction',
    measuringUnit: 'KG',
    sellingPrice : 400.00,
    variantName : null
},
{
    itemName: 'Milk',
    itemCatagory: 'Dairy',
    sellingType: 'SellByFraction',
    measuringUnit: 'litter',
    sellingPrice : 60.00,
    variantName : null
},
];

const sellingType = ['SellByUnit','SellByFraction'];

const catagory = ['Snacks','Sweets', 'Dairy'];

// Loop Array Elements using forEach
saleItems.forEach( item => console.log(`${item.itemName}`));

// to delete all elements of array do this trick
// saleItems.length = 0;
// console.log(`${saleItems.length}`);

// reverse element sof array
console.log(`${catagory}`);
console.log(`${catagory.reverse()}`);
console.log(`${catagory.sort()}`);



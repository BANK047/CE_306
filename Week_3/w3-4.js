const product = [{price : 543 , discount : 25},
               {price : 152, discount : 10}, 
               {price : 189, discount : 15},
               {price : 177, discount : 15},
               {price : 165, discount : 15}
];
function calculatorTotal(){
    let total = 0;
    product.forEach(function(products) {
        const discountPrice = products.price - ((products.price * products.discount)/100);
        total += discountPrice;
    });
    return total;
}
console.log("Total price after discount: $" + calculatorTotal().toFixed(2));
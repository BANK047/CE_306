let Product_Price = 700;
let Discount_Percentage = 10;
Discount_Price = Product_Price - ((Product_Price * Discount_Percentage)/100); 

if (Discount_Price <= 0) {
    console.log("0 Baht" );
} else if (Discount_Price < 500) {
    let fee = Discount_Price + 50;
    console.log(fee + " Baht");
} else{
    console.log(Discount_Price + " Baht");
}
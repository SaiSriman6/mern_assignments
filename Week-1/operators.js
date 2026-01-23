//Initial data:
//totalAmount = 0;
let totalamount=0;
//1. Add ₹500 to the total
totalamount+=500;
//2. Add ₹1200 to the total
totalamount+=1200;
//3. Apply a ₹200 discount
totalamount-=200;
//  4. Add 18% GST
totalamount=totalamount+totalamount*(18/100)
// 5. Print the final bill amount
console.log(totalamount)

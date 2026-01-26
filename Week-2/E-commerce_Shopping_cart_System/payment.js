 //payment.js - Payment processing
import {reduceStock} from './products.js';
import {getCartItems,getCartTotal,clearCart} from './cart.js';
import {applyDiscount} from './discount.js';
                          
// TODO: Implement these functions

export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
  let methods=['card','upi','cod'];
  return methods.includes(method);
}

function generateOrderId() {
// Generate random order ID
  return 'ORD' + Date.now();
}

export function processPayment(paymentMethod, couponCode = null) {


// Get cart items and total

let cartItems=getCartItems();
let subtotal=getCartTotal();

//Apply discount if coupon provided
  let discount = 0;
  let finalTotal = subtotal;
  let discountMessage="no discount applied";
  if(couponCode) {
    let discountResult=applyDiscount(subtotal,couponCode,cartItems);
    discount=discountResult.discount;
    finalTotal=discountResult.finalTotal;
    discountMessage=discountResult.message;
  }

//Validate payment method (card/upi/cod)
if(!validatePaymentMethod(paymentMethod)){
    return{status:"failed",message:"Invalid payment method"};
}

//Process payment (simulate)


// Reduce stock for all items
 cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });
  
// 6. Clear cart
clearCart();


// 7. Generate order summary
return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal: subtotal,
    discount: discount,
    total: finalTotal,
    paymentMethod: paymentMethod,
    status: "success",
    message: discountMessage
};

}
                                                  

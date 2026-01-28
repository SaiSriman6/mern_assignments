 //discount.js - Coupon and discount logic

// Available coupons
let coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
                          
// TODO: Implement these functions
                          
export function validateCoupon(couponCode, cartTotal, cartItems) {
 // Return { valid: true/false, message: '...' }

 // Check if coupon exists
 let coupon=coupons[couponCode];
 if(!coupon){
   return { valid:false , message:"coupon does not exist" }; 
 }

 // Check minimum amount requirement
 if(coupon.minAmount>cartTotal){
   return { valid:false , message:'minum amount not reached' };
 }

 // Check category requirement (if any)
 if(coupon.category) {
    let hasCategoryItem=cartItems.find(item=>item.category===coupon.category);
    if(!hasCategoryItem) {
      return { valid:false,message:"Coupon cannot be applicable" };
    }
 }
    return { valid: true, message: "Coupon applied successfully" };
}
                          
export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  // Return discount amount
  let coupon=coupons[couponCode];
  if(!coupon){
    return 0;
  }
  if(coupon.type==="percentage") {
    return (cartTotal*coupon.value) / 100;
  }
  if(coupon.type==="flat") {
    return coupon.value;
  }
  return 0;
}
                          
export function applyDiscount(cartTotal, couponCode, cartItems) {
  // Return final amount and discount details
  // Return { 
  //   originalTotal: ..., 
  //   discount: ..., 
  //   finalTotal: ...,
  //   message: '...'
  // }
  // Validate coupon

  let Couponvalidation=validateCoupon(couponCode, cartTotal, cartItems);
  if(!Couponvalidation.valid) {
    return {
      originalTotal : cartTotal,
      discount : 0,
      finalTotal : cartTotal,
      message : Couponvalidation.message
    };
  }

  //If valid, calculate discount

  let discount=calculateDiscount(couponCode, cartTotal);
  let finalTotal=cartTotal-discount;
  return {
    originalTotal: cartTotal,
    discount: discount,
    finalTotal: finalTotal,
    message: Couponvalidation.message
  };
}

 import { getProductById, checkStock } from "./products.js";                         
  let cartItems = [];
                          
  // TODO: Implement these functions
                          
  export function addToCart(productId, quantity) {
    // 1. Get product details
    // 2. Check stock availability
    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    // 4. Return success/error message
    let res1=getProductById(productId);
    if(!res1){
      return "product not found";
    }
    let res2=checkStock(productId,quantity);
    if(!res2){
        return "Insufficient stock";
    }
      let res3=cartItems.find(x=>x.productId==productId);
if(res3){
res3.quantity+=quantity;
}
else{
cartItems.push({productId,quantity});
}
return "Item added to cart succesfully";
}                                                    
export function removeFromCart(productId) {
cartItems=cartItems.filter(x => x.productId !== productId);
return "Item removed from cart";
}     
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
let product=getProductById(productId);
if(!product){
return "item not found";
}
if(!checkStock(productId,newQuantity)){
return "insufficient Stock";
}
cartItems = cartItems.map(item =>(item.productId === productId)?{ ...item, quantity: newQuantity }: item);
return "quantity updated";
}
                          
export function getCartItems() {
// Return all cart items with product details
let res=cartItems.map(item => {
let product = getProductById(item.productId);
return {...product,quantity:item.quantity};});
return res;

}
export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
let totalcartcost = cartItems.reduce((total, item) => {
let product = getProductById(item.productId);
return total+product.price*item.quantity;
},0);
return totalcartcost;
}


export function clearCart() {
// Empty the cart
cartItems=[];
return "CartCleared";
}

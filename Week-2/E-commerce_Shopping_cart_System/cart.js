  import { getProductById, checkStock } from "./products.js";                         
  let cartItems = [];
                          
  // TODO: Implement these functions
                          
  export function addToCart(productId, quantity) {
    
    // Get product details
    let product=getProductById(productId);
    if(!product){
      return "product not found";
    }

    // Check stock availability
    let stock=checkStock(productId,quantity);
    if(!stock){
        return "Insufficient stock";
    }

    // Check if product already in cart
    let cartItem=cartItems.find(x=>x.productId==productId);
    if(cartItem){
       cartItem.quantity+=quantity;  
    }
    else{
       cartItems.push({productId,quantity}); 
    }
    // Return success/error message
    return "Item added to cart succesfully";
  }            

  export function removeFromCart(productId) {
    cartItems=cartItems.filter(item => item.productId !== productId);
    return "Item removed from cart";
  }    
   
  export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    // Check stock before 
    let cartItem=cartItems.find(item=>item.productId===productId);
    if(!cartItem){
      return "Product is not in cart";
    }

    let product=getProductById(productId);
    if(!product){
      return "item not found";
    }
    if(!checkStock(productId,newQuantity)){
      return "insufficient Stock";
    }
    cartItem.quantity=newQuantity;
    return "quantity updated";
  }
                          
  export function getCartItems() {
    // Return all cart items with product details
    let allItems=cartItems.map(item => {
    let product = getProductById(item.productId);
    return {
      ...product,
      quantity:item.quantity
    };
  });
  return allItems;
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

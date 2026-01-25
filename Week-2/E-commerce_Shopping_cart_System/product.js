const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];                
// TODO: Implement these functions                          
export function getProductById(id) {
// Find and return product by ID
let res1=products.find(x=>x.id==id);
return res1;
}
                         
export function getAllProducts() {
// Return all products
return products;
}
                          
export function getProductsByCategory(category) {
// Filter products by category
let res2=products.filter(x=>x.category==category);
return res2;
}
                          
export function searchProducts(query) {
// Search products by name (case-insensitive)
let res3=products.find(x=>x.name==query);
return res3;
}
                          
export function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false
let res4=products.find(x=>x.id==productId);
return res4.stock > quantity;
}
                          
export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
 return products.map(product => {
 if (product.id === productId) {
 return {
 ...product,
 stock: product.stock - quantity
 };
}
return product;
});
}

//You are building a shopping cart summary for an e-commerce website.
//Test Data : 
/*cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
let res31=cart.filter(x=>x.inStock==true)
console.log(res31)

//Use map() to create a new array with:  { name, totalPrice }
let res32=cart.map(x=> [x.name,x.price*x.quantity])
console.log(res32)

//Use reduce() to calculate grand total cart value
let res33=cart.reduce((acc,x)=>acc+x.quantity+x.price,0)
console.log(res33)

//Use find() to get details of "Mouse"
let res34=cart.find(x=>x.name=='Mouse')
console.log(res34)

//Use findIndex() to find the position of "Keyboard"
let res35=cart.findIndex(x=>x.name=='Keyboard')
console.log(res35)

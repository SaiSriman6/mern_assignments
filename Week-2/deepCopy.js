// Deep Copy (Isolation & Safety Use Case)
//  Given Data:
//   const order = {
//    orderId: "ORD1001",
//    customer: {
//    name: "Anita",
//    address: {
//    city: "Hyderabad",
//    pincode: 500085
//   }
//   },
//   items: [
//   { product: "Laptop", price: 70000 }
//  ]
//  };


let order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
    city: "Hyderabad",
    pincode: 500085
    }
    },
     items: [
      { product: "Laptop", price: 70000 }
     ]
};

// 1. Create a deep copy of order
let orderCopy=structuredClone(order);

// Modify in copied object:
// i. customer.address.city
orderCopy.customer.address.city='mumbai';

// ii. items[0].price
 orderCopy.items[0].price=60000;

// iii. Verify original object remains unchanged
console.log(order);

//original order remained unchanged

//Shallow Copy (Controlled Mutation Use Case)
/*Given Data:
const user = {
id: 101,
name: "Ravi",
preferences: {
theme: "dark",
language: "en"
}
};
*/
let user = {
     id: 101,
     name: "Ravi",
     preferences: {
     theme: "dark",
     language: "en"
    }
};

//Create a shallow copy of user
let userShallowCopy={...user};

//Change : name in the copied object
userShallowCopy.name='abc';
console.log(userShallowCopy.name);
console.log(user.name);

//Change: preferences.theme in the copied object
userShallowCopy.preferences.theme='light';
console.log(user);

//.Log both original and copied objects
console.log(userShallowCopy);
console.log(user);


//Observe what changes and what doesn’t
I observed that shallow copy copies only the first level of an object. Nested objects are shared by reference, 
so changes to nested properties affect both the original and the copy.



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

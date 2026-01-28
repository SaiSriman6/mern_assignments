import {courses} from "./courseEngine.js";

// SHOPPING CART ENGINE
let cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// -> Merge cart with courses to get full course info
let mergeCartWithCourses=cart.map(item=>{ 
  let course=courses.find(c => c.id===item.courseId);
  return{ ...course, qty: item.qty };
});
console.log('Cart with course Info:',mergeCartWithCourses);

// -> Calculate total cart amount
let calculateCartTotal= mergeCartWithCourses.reduce((total,item)=>total+=item.price*item.qty,0);
console.log('Total Cart Amount',calculateCartTotal);

// -> Increase quantity of a course (immutably)
let increaseQty=(courseId)=>
    mergeCartWithCourses.map(item => 
      item.courseId === courseId?{ ...item, qty: item.qty + incBy }:item
  );
let newCart=increaseQty(103);

// -> Remove a course from cart
let removedFromCart=(cart,id) =>{
  return cart.filter(item => item.courseId!==id);
}
let updatedCart=removedFromCart(cart,103)
console.log(updatedCart)

// -> Check if all cart items are paid courses
let allPaidCourses=cart.every(item=>{
    let course = courses.find(c => c.id === item.courseId);
    return course && course.price > 0;
});
console.log(allPaidCourses);


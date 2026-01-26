// module3.js
import {courses} from "./module2.js";

// SHOPPING CART ENGINE
let cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// -> Merge cart with courses to get full course info
let mergeCartWithCourses=(cart,courses)=>
    cart.map(item => { const course=courses.find(c => c.id === item.courseId);
    return{ ...course, qty: item.qty };});

let mergedCart=mergeCartWithCourses(cart, courses);
console.log(mergedCart);

// -> Calculate total cart amount
let calculateCartTotal=(cart, courses) =>
  cart.reduce((total,item)=>{const course = courses.find(c => c.id === item.courseId);
    return course?total+course.price*item.qty:total;},0);

console.log(calculateCartTotal(cart,courses));

// -> Increase quantity of a course (immutably)
let increaseQty=(cart,courseId)=>cart.map(item=>item.courseId===courseId?{...item,qty:item.qty+1}:item);

let updatedCart=increaseQty(cart, 101);
console.log(updatedCart);

// -> Remove a course from cart
let removeFromCart=(cart, courseId)=>cart.filter(item=>item.courseId!==courseId);

let cartAfterRemoval=removeFromCart(cart, 103);
console.log(cartAfterRemoval);

// -> Check if all cart items are paid courses
let allPaidCourses=(cart, courses)=>cart.every(item=>{
    let course = courses.find(c => c.id === item.courseId);
    return course && course.price > 0;
});
console.log(allPaidCourses(cart, courses));


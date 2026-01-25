//  COURSE CATALOG ENGINE

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

//-> Get published courses
let res1=courses.filter(x=>x.published==true);
console.log(res1);

//   -> Sort courses by price (high → low)






//-> Extract { title, price } only
let res3=courses.map(x=>{ 
    return `${x.title} , ${x.price}`;
});
console.log(res3);

//-> Calculate total value of published courses
let res4=courses.reduce((acc,x)=>{
    (x.published==true)?acc+=x.price:acc+=0;
    return acc;
},0)
console.log(res4);

//-> Add a new course immutably
courses.push({ id: 103, title: "Node", price: 1299, published: true })
console.log(courses);

export {courses};

//  COURSE CATALOG ENGINE

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

//-> Get published courses
let publishedCourses=courses.filter(course=>course.published==true);
console.log('published Courses are',publishedCourses);

//-> Sort courses by price (high → low)
let sortedCourses = [...courses].sort((a,b) =>b.price - a.price);
console.log(sortedCourses);

//-> Extract { title, price } only
let extractedInfo=courses.map(x=>{ 
    return `${x.title}  ${x.price}`;
});
console.log(extractedInfo);

//-> Calculate total value of published courses
let publishedCoursesValue=publishedCourses.reduce((acc,course)=> acc+=course.price,0)
console.log('value of published courses',publishedCoursesValue);

//-> Add a new course immutably
let newCourse={id:104,title:'java',price:1099,published:true};
let addCourse=[...courses, newCourse];
console.log(addCourse);
export {courses};

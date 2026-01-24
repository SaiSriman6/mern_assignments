/*You are managing a logged-in user’s profile in a web application.
Test data:
user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
 */

const user={
    id:101,
    name:'ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
}

//Read and print the user’s name and email
console.log(user.name," ",user.email)

//Adding a new property lastLogin: "2026-01-01"
user.lastLogin="2026-01-01"
console.log(user.lastLogin)

//Update role from "student" to "admin"
user.role='admin'
console.log(user.role)

//Deleting the isActive property
delete user.isActive
console.log(user.isActive)

//Using Object.keys() to list all remaining fields
console.log(Object.keys(user))




//Exam Result Summary
//Marks are stored subject-wise for a student.
/*
Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
*/
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//Calculate total marks
let totalmarks=Object.values(marks).reduce((acc,x)=> acc+x);
console.log(totalmarks);

//Calculate average marks
let avgmarks=Object.values(marks).reduce((acc,x)=> acc+x) / Object.values(marks).length;
console.log(avgmarks);

//Finding highest scoring Subject
let maxsub;
let maxmarks=0
for (let subject in marks) {
  if (marks[subject] > maxmarks) {
    maxsub=subject;
    maxmarks=marks[subject];
  }
}
console.log(maxsub);


//Add a new subject computer: 90
marks.computer=90;
console.log(marks)



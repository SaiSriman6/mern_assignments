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

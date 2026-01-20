/*You are managing a logged-in user’s profile in a web application.
Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields
    */

const user={
    id:101,
    name:'ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
}
console.log(user.name," ",user.email)
user.lastLogin="2026-01-01"
console.log(user.lastLogin)
user.role='admin'
console.log(user.role)
delete user.isActive
console.log(user.isActive)
console.log(Object.keys(user))
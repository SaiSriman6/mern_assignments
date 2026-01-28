// USER PROCESSING ENGINE

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

//-> Get only active users
let activeUsers= users.filter(user=> user.active==true);
console.log(activeUsers);

//-> Extract names of active users
let activeUserNames = users.filter(user => user.active==true).map(user => user.name);
console.log(activeUserNames);

//-> Check if any admin exists
let userAdmin=users.filter(user=> user.role=='admin');
console.log(userAdmin);

//-> Find user by id
let FinduserById=(id)=>users.find(user=>user.id==id);
let userById= FinduserById(1);
console.log(userById);

//-> Deactivate a user immutably
let updatedUsers=users.map(user=>user.id === 1?{...user,active:false}:user);
console.log(updatedUsers);

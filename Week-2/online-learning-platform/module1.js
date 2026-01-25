//USER PROCESSING ENGINE

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// -> Get only active users
let res1= users.filter(x=> x.active==true);
console.log(res1);

// -> Extract names of active users
let res2= res1.map(x=> x.name);
console.log(res2);

// -> Check if any admin exists
let res3=users.filter(x=> x.role=='admin');
console.log(res3);

//  -> Find user by id
let res4=users.find(x=>x.id==3);
console.log(res4);

// -> Deactivate a user immutably



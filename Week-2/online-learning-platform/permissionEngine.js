// ROLE & PERMISSION ENGINE
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// -> Get all role names
let roleNames=Object.keys(roles);
console.log('roles are',roleNames);

// -> Check if student can delete
let studentCanDelete=roles.student.includes("delete");
console.log('student can delete?',studentCanDelete);

// -> Create a flat list of all unique permissions
let allUniquePermissions=[...new Set(Object.values(roles).flat())]
console.log(allUniquePermissions);

// -> Add new role "moderator" immutably
let addRole={
...roles,
mentor:['update','delete','view']
};
console.log(addRole);

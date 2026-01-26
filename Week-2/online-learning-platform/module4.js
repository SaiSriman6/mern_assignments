// module4.js
// ROLE & PERMISSION ENGINE
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// -> Get all role names
let res1=roles=>Object.keys(roles);

// -> Check if student can delete
let res2=roles=>roles.student.includes("delete");

// -> Create a flat list of all unique permissions
let res3= roles => {
  const allPermissions = Object.values(roles).flat();
  return [...new Set(allPermissions)];
};

// -> Add new role "moderator" immutably
let addRole=(roles,roleName,permissions) => ({
  ...roles,
  [roleName]: permissions
});

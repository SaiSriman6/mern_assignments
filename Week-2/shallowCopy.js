//Shallow Copy (Controlled Mutation Use Case)
/*Given Data:
const user = {
id: 101,
name: "Ravi",
preferences: {
theme: "dark",
language: "en"
}
};
*/
let user = {
     id: 101,
     name: "Ravi",
     preferences: {
     theme: "dark",
     language: "en"
    }
};

//Create a shallow copy of user
let userShallowCopy={...user};

//Change : name in the copied object
userShallowCopy.name='abc';
console.log(userShallowCopy.name);
console.log(user.name);

//Change: preferences.theme in the copied object
userShallowCopy.preferences.theme='light';
console.log(user);

//.Log both original and copied objects
console.log(userShallowCopy);
console.log(user);


//Observe what changes and what doesn’t
I observed that shallow copy copies only the first level of an object. Nested objects are shared by reference, 
so changes to nested properties affect both the original and the copy.

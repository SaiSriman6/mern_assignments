import exp from 'express';

//create mini - express(Seperate Route) app
export const userApp=exp.Router();

// In-memory array to store user data
let users=[];


//create api (req handlers - route)
//get req handling route
userApp.get('/users',(req,res)=>{

  //send users data
  res.status(200).json({message:'All users',payload:users})  //message,payload is best way of response

})


//post req handling route
userApp.post('/users',(req,res)=>{
 
  // Read user details sent by client
  let newUser=req.body;

  //adding user to users
  users.push(newUser);

  //sending respone
  res.json({message:"User created"});
})


//put req handling route
userApp.put('/users',(req,res)=>{
  
  //get modified user from client
  let updatedUser=req.body;

  //find the user with id exists in array
  let userIndex=users.findIndex(user=>user.id===updatedUser.id);

  //if user not found send res as "user not found
  if(userIndex===-1){
    return res.status(404).json({message:"User not Found"});
  }

  //if user found ,then modify the user
  //send response as "user modified"
  let deletedUser=users.splice(userIndex,1,updatedUser);
  res.status(200).json({message:"User Modified"});

})

// GET user by id
userApp.get('/users/:id',(req,res)=>{
  
  // Convert id from URL parameter to number
  let userId=Number(req.params.id)      

  // Find user using id
  let user=users.find(userObj=>userObj.id==userId);

  // If user is not found
  if(!user){
     return res.status(404).json({message:"User not found"});
  }

  // Send user data
  res.status(200).json({message:"user",payload:user})
})



//delete req handling route
userApp.delete('/users/:id',(req,res)=>{

  // Convert id from URL parameter to number
  let userId=Number(req.params.id);

  // Find index of user to be deleted
  let userIndex=users.findIndex(user=>user.id===userId);

  // If user does not exist
  if(userIndex===-1){
    return res.json({message:"user not found"});
  }

  // Remove user from array
  let deletedUser=users.splice(userIndex,1);
  
  // send success response
  res.json({message:"user deleted"});
})
//Smart Login Status Engine
//Initial data:
// isLoggedIn = true;
// isProfileComplete = false;
let isLoggedIn=true;
let isProfileComplete=false;
let msg="";       //taking a variable msg to store result

// 1. If user is not logged in → show "Please login"
if(!isLoggedIn){
    msg+="Please login";   //storing result into msg
}
//2. If logged in but profile incomplete → show "Complete your profile"
else if(isLoggedIn && !isProfileComplete){
    msg+="Complete your profile"   //storing result into msg
}
//3. If logged in and profile complete → show "Welcome back!"
else{
    msg+="Welcome back"   //storing result into msg
}
console.log(msg)    // Print the message

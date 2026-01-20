let isLoggedIn=true;
let isProfileComplete=false;
msg="";
if(!isLoggedIn){
    msg+="Please login";
}
else if(isLoggedIn && !isProfileComplete){
    msg+="Complete your profile"
}
else{
    msg+="Welcome back"
}
console.log(msg)

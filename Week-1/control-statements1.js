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


//Course Price Tag Labeler
//Initial data:
//price = 1299;
let price=1299;
let courseTag=""  //   4. To Store label in courseTag

//1. If price < 500 → "Budget Course"
if(price<500){
    courseTag+="Budget Course"
}
//2. If price between 500–1000 → "Standard Course"
else if(price>500 && price<1000){
    courseTag+="standardcourse"
}
//3. If price > 1000 → "Premium Course"
else{
    courseTag+="premium Course"
}
//5. Print the label
console.log(courseTag)

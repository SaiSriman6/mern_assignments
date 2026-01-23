//Enrollment Eligibility Checker
//Initial data:
let hasPaid=true;
let hasCompletedBasics=false;

//If both conditions are true → "Enroll Now"
//Otherwise → "Complete Requirements"
let enrollMessage=(hasPaid==true && hasCompletedBasics==true)?"Enroll now":"Complete Requirements";  // Using ternary operator and storing result into enrollMessage
//Printing message
console.log(enrollMessage);

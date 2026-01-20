let hasPaid=true;
let hasCompletedBasics=false;
let enrollMessage=(hasPaid==true && hasCompletedBasics==true)?"Enroll now":"Complete Requirements";
console.log(enrollMessage);
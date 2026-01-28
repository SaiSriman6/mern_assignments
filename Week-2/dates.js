//Date Creation & Extraction (Beginner)
 //Create a Date object for current date & time.
let d1=new Date();
console.log(d1);

//Extract and display:
//* Year
console.log(d1.getFullYear());

//* Month (human readable)
let months = [  "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
let monthindex = d1.getMonth(); 
console.log(months[monthindex]);
 
 //* Date
console.log(d1.getDate());

//Day of Week
let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
dayindex=d1.getDay();
console.log(days[dayindex]);

//* Hours, minutes, seconds
console.log(d1.getHours(),",",d1.getMinutes(),",", d1.getSeconds());

// Display the date in this format: DD-MM-YYYY HH:mm:ss
console.log(d1.getDate(),"-",d1.getMonth()+1,"-",d1.getFullYear() ,d1.getHours(),":",d1.getMinutes(),":",d1.getSeconds());


//  Date Comparison & Validation (Beginner → Intermediate)
let enrollmentDeadline = new Date("2026-01-20");
//   1.Check if:
// * Today is before deadline → "Enrollment Open"
// * Today is after deadline → "Enrollment Closed"
let currentDate=new Date();
if(currentDate<=enrollmentDeadline){
    console.log('Enrollment Open');
}
else{
    console.log('Enrollment Closed');
}



// 2. Validate user input date:
// * Input: "2026-02-30"
// * Detect whether the date is valid or invalid
let inputDate="2026-02-30";
let parts=inputDate.split("-");
let validatedDate = new Date(parts[0],parts[1]-1,parts[2]);
if(parts[0]==validatedDate.getFullYear() && parts[1]==validatedDate.getMonth() && parts[2]==validatedDate.getDate()){
    console.log("Valid date");
}
else{
    console.log("Invalid Date")
}


//Age Calculator (Intermediate)
//Input: dob = "2000-05-15";
let dob = new Date("2000-01-26");
// 1. Calculate exact age in years
let currdate=new Date();
let age=currdate.getFullYear()-dob.getFullYear();
if(currdate.getMonth()-dob.getMonth()<0 || currdate.getDate()-dob.getDate()<0){
    age--;
}
console.log(age);

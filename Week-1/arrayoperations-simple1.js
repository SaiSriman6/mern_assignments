//Online Course Name Processor
//Scenario : You are preparing a course list for display on a website.
//Test data:
//courses = ["javascript", "react", "node", "mongodb", "express"];

const courses=['javascript','react','node','mongodb','express']

//filter() courses with name length > 5
let res21=courses.filter((x)=>x.length>5) //storing names length>5 into res21
console.log(res21)

//map() to convert course names to uppercase
let res22=courses.map((x)=>x.toUpperCase())  //storing result into res22
console.log(res22)

//reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let res23=courses.reduce((acc,x)=>acc+=x)   //storing result into res23
console.log(res23)

 //find() the course "react"
let res24=courses.find(x=>x=='react') //storing result into res24
console.log(res24)

//findIndex() of "node"
let res25=courses.findIndex(x=>x=='node') //storing result into res25
console.log(res25)

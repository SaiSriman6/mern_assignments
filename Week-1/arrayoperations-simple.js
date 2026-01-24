//Daily Temperature Analyzer
//You are analyzing daily temperatures recorded by a weather app.
//Test data:
//temperatures = [32, 35, 28, 40, 38, 30, 42];
let temperatures = [32, 35, 28, 40, 38, 30, 42];
// filter() temperatures above 35
let res11= temperatures.filter(x=> x>35);
console.log(res11);
// map() to convert all temperatures from Celsius → Fahrenheit
let res12=temperatures.map(x=> x*1.8+32);
console.log(res12);
// reduce() to calculate average temperature
let res13=temperatures.reduce((acc,x)=> acc+x) / temperatures.length
console.log(res13);
// find() first temperature above 40
let res14= temperatures.find(x=> x>40);
console.log(res14);
//findIndex() of temperature 28
let res15=temperatures.findIndex(x=> x==28);
console.log(res15);


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


//Student Marks List
//Scenario : You receive marks from an exam system.

//Test data:
//marks = [78, 92, 35, 88, 40, 67];

const marks = [78, 92, 35, 88, 40, 67];
//1. filter() marks ≥ 40 (pass marks)
let res31=marks.filter(x=>x>=40)
console.log(res31)

//2. map() to add 5 grace marks to each student
let res32=marks.map(x=>x+5)
console.log(res32)

//3. reduce() to find highest mark
let res33=marks.reduce((acc,x)=>(acc<x)?x:acc,0)
console.log(res33)

//4. find() first mark below 40
let res34=marks.find(x=>x<40)
console.log(res34)

//5. findIndex() of mark 92
let res35=marks.findIndex(x=>x==92)
console.log(res35)

//Daily Temperature Analyzer
//You are analyzing daily temperatures recorded by a weather app.
//Test data:
//temperatures = [32, 35, 28, 40, 38, 30, 42];
let temperatures = [32, 35, 28, 40, 38, 30, 42];
// filter() temperatures above 35
let tempAbove35= temperatures.filter(x=> x>35);
console.log('temperatures above 35 are',tempAbove35);
// map() to convert all temperatures from Celsius → Fahrenheit
let tempInFahrenheit=temperatures.map(x=> x*1.8+32);
console.log('temp in Fahrenheit',tempInFahrenheit);
// reduce() to calculate average temperature
let avgTemperature=temperatures.reduce((acc,x)=> acc+x) / temperatures.length
console.log('Avg temperature is',avgTemperature);
// find() first temperature above 40
let firstTempabove40= temperatures.find(x=> x>40);
console.log('first temperature above 40 is',firstTempabove40);
//findIndex() of temperature 28
let indexOf28=temperatures.findIndex(x=> x==28);
console.log('Index of temp 28 is',indexOf28);


//Online Course Name Processor
//Scenario : You are preparing a course list for display on a website.
//Test data:
//courses = ["javascript", "react", "node", "mongodb", "express"];

const courses=['javascript','react','node','mongodb','express']

//filter() courses with name length > 5
const courses=['javascript','react','node','mongodb','express']
let filteredCourses=courses.filter((course)=>course.length>5)
console.log('courses with length>5',filteredCourses)

//map() to convert course names to uppercase
let coursesInUpperCases=courses.map((course)=>course.toUpperCase())
console.log('courses in Upper Cases',coursesInUpperCases)

//reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let coursesInString=courses.reduce((acc,course)=>acc+=course)
console.log('Single String is',coursesInString)

 //find() the course "react"
let isReact=courses.find(course=>course=='react')
if(!isReact){
    console.log('react is not in courses');
}
else{
    console.log('react is in courses')
}

//findIndex() of "node"
let nodeIndex=courses.findIndex(course=>course=='node')
console.log('node Index is',nodeIndex);


//Student Marks List
//Scenario : You receive marks from an exam system.

//Test data:
//marks = [78, 92, 35, 88, 40, 67];

/*
You receive marks from an exam system.
Test data:
const marks = [78, 92, 35, 88, 40, 67];
Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/
   
const marks = [78, 92, 35, 88, 40, 67];
//1. filter() marks ≥ 40 (pass marks)
let marksGreaterThan40=marks.filter(x=>x>=40)
console.log('marks greater than 40 are',marksGreaterThan40);

//2. map() to add 5 grace marks to each student
let increasedMarks=marks.map(x=>x+5)
console.log('increased marks are',increasedMarks);

//3. reduce() to find highest mark
let highestMarks=marks.reduce((acc,x)=>(acc<x)?x:acc,0)
console.log('highest marks',highestMarks);

//4. find() first mark below 40
let firstMarksbelow40=marks.find(x=>x<40)
console.log('first mark below 40',firstMarksbelow40);

//5. findIndex() of mark 92
let indexOf92=marks.findIndex(x=>x==92)
console.log('Index of marks 92',indexOf92);

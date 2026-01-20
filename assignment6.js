/*
You are preparing a course list for display on a website.
Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

const courses=['javascript','react','node','mongodb','express']
let res21=courses.filter((x)=>x.length>5)
console.log(res21)

let res22=courses.map((x)=>x.toUpperCase())
console.log(res22)

let res23=courses.reduce((acc,x)=>acc+=x)
console.log(res23)

let res24=courses.find(x=>x=='react')
console.log(res24)

let res25=courses.findIndex(x=>x=='node')
console.log(res25)
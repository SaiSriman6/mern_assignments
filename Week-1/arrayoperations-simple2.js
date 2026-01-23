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

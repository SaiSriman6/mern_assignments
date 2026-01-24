//Student Performance Dashboard
//You are working on a college result analysis system.
//Test Data:
/*students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];*/


const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
let res51=students.filter(x=>x.marks>=40)
console.log(res51)

//map() to add a grade field
 /*       ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D*/
let res52=students.map(x=>{
    if(x.marks>=90){
        x.grade='A'
    }
    else if(x.marks>=75&&x.marks<90){
        x.grade='B'
    }
    else if(x.marks>=60 && x.marks<75){
        x.grade='C'
    }
    else{
        x.grade='D'
    }
    return x
})
console.log(res52)

//reduce() to calculate average marks
let res53=students.reduce((acc,x)=>acc+x.marks,0)/students.length
console.log(res53)

//find() the student who scored 92
let res54=students.find((x)=>x.marks==92);
console.log(res54);

//findIndex() of student "Kiran"
let res55=students.findIndex((x)=>x.name=='kiran');
console.log(res55);

//filter() students who passed (marks ≥ 40)
//map() to add a grade field
 /*       ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D*/
//reduce() to calculate average marks
//find() the student who scored 92
//findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let res51=students.filter(x=>x.marks>=40)
console.log(res51)

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

let res53=students.reduce((acc,x)=>acc+x.marks,0)/students.length
console.log(res53)

let res54=students.find((x)=>x.marks==92);
console.log(res54);

let res55=students.findIndex((x)=>x.name=='kiran');
console.log(res55);

let res56 = students.findIndex(x => x.name === "Kiran");
console.log(res55);
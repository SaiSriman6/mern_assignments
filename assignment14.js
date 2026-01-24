//Exam Result Summary
//Marks are stored subject-wise for a student.
/*
Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
*/
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//Calculate total marks
let totalmarks=Object.values(marks).reduce((acc,x)=> acc+x);
console.log(totalmarks);

//Calculate average marks
let avgmarks=Object.values(marks).reduce((acc,x)=> acc+x) / Object.values(marks).length;
console.log(avgmarks);

//Finding highest scoring Subject
let maxsub;
let maxmarks=0
for (let subject in marks) {
  if (marks[subject] > maxmarks) {
    maxsub=subject;
    maxmarks=marks[subject];
  }
}
console.log(maxsub);


//Add a new subject computer: 90
marks.computer=90;
console.log(marks)

/*Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90
*/
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let r1=0;
for(let i in marks){
 r1+=marks[i];
}
console.log(r1);

let r2=0;
let count=0;
for(let i in marks){
    r2+=marks[i];
    count++;
}
r2/=count;
console.log(r2);

let max=0;
for(let i in marks){
    if(marks[i]>max){
        max=marks[i];
    }
}
console.log(max);

marks.computer=90;
console.log(marks)
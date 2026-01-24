/*Marks are stored subject-wise for a student.

Test data:
marks = {
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
let r11=0;
for(let i in marks){
 r11+=marks[i];
}
console.log(r11);

//Calculate average marks
let r12=0;
let count=0;
for(let i in marks){
    r12+=marks[i];
    count++;
}
r12/=count;
console.log(r12);

//Find the highest scoring subject
let max=0;
for(let i in marks){
    if(marks[i]>max){
        max=marks[i];
    }
}
console.log(max);

//Add a new subject computer: 90
marks.computer=90;
console.log(marks)

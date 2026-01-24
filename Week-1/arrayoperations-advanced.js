//You are building a shopping cart summary for an e-commerce website.
//Test Data : 
/*cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
let res11=cart.filter(x=>x.inStock==true)
console.log(res11)

//Use map() to create a new array with:  { name, totalPrice }
let res12=cart.map(x=> [x.name,x.price*x.quantity])
console.log(res12)

//Use reduce() to calculate grand total cart value
let res13=cart.reduce((acc,x)=>acc+x.quantity+x.price,0)
console.log(res13)

//Use find() to get details of "Mouse"
let res14=cart.find(x=>x.name=='Mouse')
console.log(res14)

//Use findIndex() to find the position of "Keyboard"
let res15=cart.findIndex(x=>x.name=='Keyboard')
console.log(res15)


//Employee Payroll Processor
//You are building a salary processing module in a company HR app.
//Test data:
/*employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
]; */
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter() employees from IT department
let res21=employees.filter((x)=> x.department=='IT');
console.log(res21);

//map() to add: netSalary = salary + 10% bonus
let res22=employees.map((x)=>{ 
       x.netsalary=x.salary+(x.salary*10)/100;
       return x;
})
console.log(res22);

//reduce() to calculate total salary payout
let res23=employees.reduce((acc,x)=>acc+x.salary,0);
console.log(res23);

//find() employee with salary 30000
let res24=employees.find(x=>x.salary==30000);
console.log(res24);

//findIndex() of employee "Neha"
let res25=employees.findIndex(x=>x.name=="Neha");
console.log(res25);

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
let res31=students.filter(x=>x.marks>=40)
console.log(res31)

//map() to add a grade field
 /*       ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D*/
let res32=students.map(x=>{
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
console.log(res32)

//reduce() to calculate average marks
let res33=students.reduce((acc,x)=>acc+x.marks,0)/students.length
console.log(res33)

//find() the student who scored 92
let res34=students.find((x)=>x.marks==92);
console.log(res34);

//findIndex() of student "Kiran"
let res35=students.findIndex((x)=>x.name=='kiran');
console.log(res35);

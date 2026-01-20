/*Employee Payroll Processor

You are building a salary processing module in a company HR app.
Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let q1=employees.filter((x)=> x.department=='IT');
console.log(q1);

let q2=employees.map((x)=>{ 
       x.netsalary=x.salary+(x.salary*10)/100;
       return x;
})
console.log(q2);

let q3=employees.reduce((acc,x)=>acc+x.salary,0);
console.log(q3);

let q4=employees.find(x=>x.salary==30000);
console.log(q4);

let q5=employees.findIndex(x=>x.name=="Neha");
console.log(q5);
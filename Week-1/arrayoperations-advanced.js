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
let res31=cart.filter(x=>x.inStock==true)
console.log(res31)

//Use map() to create a new array with:  { name, totalPrice }
let res32=cart.map(x=> [x.name,x.price*x.quantity])
console.log(res32)

//Use reduce() to calculate grand total cart value
let res33=cart.reduce((acc,x)=>acc+x.quantity+x.price,0)
console.log(res33)

//Use find() to get details of "Mouse"
let res34=cart.find(x=>x.name=='Mouse')
console.log(res34)

//Use findIndex() to find the position of "Keyboard"
let res35=cart.findIndex(x=>x.name=='Keyboard')
console.log(res35)


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
let q1=employees.filter((x)=> x.department=='IT');
console.log(q1);

//map() to add: netSalary = salary + 10% bonus
let q2=employees.map((x)=>{ 
       x.netsalary=x.salary+(x.salary*10)/100;
       return x;
})
console.log(q2);

//reduce() to calculate total salary payout
let q3=employees.reduce((acc,x)=>acc+x.salary,0);
console.log(q3);

//find() employee with salary 30000
let q4=employees.find(x=>x.salary==30000);
console.log(q4);

//findIndex() of employee "Neha"
let q5=employees.findIndex(x=>x.name=="Neha");
console.log(q5);


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
let inStockProducts=cart.filter(prod =>prod.inStock==true)
console.log('Products available are',inStockProducts)

//Use map() to create a new array with:  { name, totalPrice }
let coursesWithDetails=cart.map(prod=> [prod.name,prod.price*prod.quantity])
console.log('Product With details',coursesWithDetails);

//Use reduce() to calculate grand total cart value
let cartTotal=cart.reduce((acc,prod)=>acc+prod.quantity*prod.price,0)
console.log(cartTotal);

//Use find() to get details of "Mouse"
let mouseInCart=cart.find(prod=>prod.name=='Mouse')
if(!mouseInCart){
  console.log('mouse is not in cart');
}
else{
  console.log('mouse is in cart');
}

//Use findIndex() to find the position of "Keyboard"
let indexOfKeyboard=cart.findIndex(prod=>prod.name=='Keyboard')
console.log('Index of keyboard',indexOfKeyboard)


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
let itEmployees=employees.filter((emp)=> emp.department=='IT');
console.log('IT employees are',itEmployees);

//map() to add: netSalary = salary + 10% bonus
let empWithNetSalary=employees.map((emp)=>{ 
    let netsalary=emp.salary+(emp.salary*10)/100;
    return{...emp,netsalary};
})
console.log('employees with net salary',empWithNetSalary);

//reduce() to calculate total salary payout
let payout=employees.reduce((acc,emp)=>acc+emp.salary,0);
console.log('total salary payout',payout);

//find() employee with salary 30000
let empWithSalary=employees.find(emp=>emp.salary==30000);
console.log('emp with 30000 salary',empWithSalary);

//findIndex() of employee "Neha"
let indexOfNeha=employees.findIndex(emp=>emp.name=="Neha");
console.log('Neha index is',indexOfNeha);

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
let passedStudents=students.filter(student=>student.marks>=40)
console.log('Student Passed in Exam are',passedStudents);

//map() to add a grade field
 /*       ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D*/
let studentWithGrades=students.map(student=>{
    let grade='D';
    if(student.marks>=90){
        grade='A'
    }
    if(student.marks>=75&&student.marks<90){
        grade='B'
    }
    if(student.marks>=60 && student.marks<75){
        grade='C'
    }   
    return {...student,grade};
})
console.log('Student with Grades',studentWithGrades);


//reduce() to calculate average marks
let avgMarks=students.reduce((acc,x)=>acc+x.marks,0)/students.length
console.log('Average marks:',avgMarks)


//find() the student who scored 92
let studentWith92=students.find((x)=>x.marks==92);
console.log('Student scored 92 marks',studentWith92);

//findIndex() of student "Kiran"
let indexOfKiran=students.findIndex((student)=>student.name=='Kiran');
console.log('Index of Kiran:',indexOfKiran);



/*Movie Streaming Platform

You are working on a movie recommendation system.
Test data:
movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter() only "Sci-Fi" movies
let scifiMovies=movies.filter(movie=>movie.genre=="Sci-Fi");
console.log('Sci-Fi movies are',scifiMovies);

// map() to return:"Inception (8.8)"
let detailedInfo=movies.map((movie)=>{ 
    return [movie.title,movie.rating];
});
console.log('Movie info with title and rating:',detailedInfo);

//reduce() to find average movie rating
let avgRating=movies.reduce((acc,movie)=>acc+movie.rating,0)/movies.length;
console.log(avgRating.toFixed(2));

//find() movie "Joker"
let jokerMovie=movies.find(movie=>movie.title=='Joker');
if(!jokerMovie){
  console.log('Joker is not in Movie')
}
else{
  console.log('Joker is in Movies')
}

//findIndex() of "Avengers"
let indexOfAvengers=movies.findIndex(movie=>movie.title=='Avengers');
console.log('Index of Avengers is',indexOfAvengers);



/*
Bank Transaction Analyzer
You are building a bank statement summary.
Test data:
transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter() all credit transactions
let creditTranscations=transactions.filter(transaction=>transaction.type=='credit');
console.log('credit transactions are:',creditTranscations);

//map() to extract only transaction amounts
let transactionAmount=transactions.map(transaction=> transaction.amount)
console.log('Transaction Amount is',transactionAmount);

//reduce() to calculate final account balance
let accountBalance=transactions.reduce((acc,transaction)=>{
    return (transaction.type=='credit')?acc+transaction.amount:acc-transaction.amount;
},0);
console.log('Account Balance is',accountBalance);

 //find() the first debit transaction
let firstDebit=transactions.find(transaction=>transaction.type=='debit');
console.log('First Debit transaction is',firstDebit);

//findIndex() of transaction with amount 10000
let indexOf10000=transactions.findIndex(transaction=>transaction.amount==10000);
console.log('Index of 10000 Transaction is',indexOf10000);

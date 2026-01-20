/*
Bank Transaction Analyzer

You are building a bank statement summary.
Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    */
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

let q1=transactions.filter(x=>x.type=='credit');
console.log(q1);

let q2=transactions.map(x=> x.amount)
console.log(q2);

let q3=transactions.reduce((acc,x)=>{
    return (x.type=='credit')?acc+x.amount:acc-x.amount;
},0);
console.log(q3);

let q4=transactions.find(x=>x.type=='debit');
console.log(q4);

let q5=transactions.findIndex(x=>x.amount==10000);
console.log(q5);
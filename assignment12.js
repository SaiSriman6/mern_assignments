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
let res51=transactions.filter(x=>x.type=='credit');
console.log(res51);

//map() to extract only transaction amounts
let res52=transactions.map(x=> x.amount)
console.log(res52);

//reduce() to calculate final account balance
let res53=transactions.reduce((acc,x)=>{
    return (x.type=='credit')?acc+x.amount:acc-x.amount;
},0);
console.log(res53);

 //find() the first debit transaction
let res54=transactions.find(x=>x.type=='debit');
console.log(res54);

//findIndex() of transaction with amount 10000
let res55=transactions.findIndex(x=>x.amount==10000);
console.log(res55);

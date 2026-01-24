//Daily Temperature Analyzer
//You are analyzing daily temperatures recorded by a weather app.
//Test data:
//temperatures = [32, 35, 28, 40, 38, 30, 42];
let temperatures = [32, 35, 28, 40, 38, 30, 42];
// filter() temperatures above 35
let res1= temperatures.filter(x=> x>35);
console.log(res1);
// map() to convert all temperatures from Celsius → Fahrenheit
let res2=temperatures.map(x=> x*1.8+32);
console.log(res2);
// reduce() to calculate average temperature
let res3=temperatures.reduce((acc,x)=> acc+x) / temperatures.length
console.log(res3);
// find() first temperature above 40
let res4= temperatures.find(x=> x>40);
console.log(res4);
//findIndex() of temperature 28
let res5=temperatures.findIndex(x=> x==28);
console.log(res5);



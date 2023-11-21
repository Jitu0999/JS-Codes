/*
for (let i = 0; i<5; i++){
    console.log(i)
}
*/

/* Program to add first n natural numbers.
let sum = 0;
let n = 4;
for (let i=0; i<n; i++){
    sum += (i+1)
    console.log((i+1), "+")
}
console.log('Sum of first '+ n +' Natural numbers is '+ sum)
*/

let obj = {
    Jitu: 90,
    Shubham: 85,
    Vikash: 80,
    Ramesh: 70,
    Harish: 60
}
for(let a in obj){
    console.log('Marks of ' + a + ' is ' + obj[a])
}
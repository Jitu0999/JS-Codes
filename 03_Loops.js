//  ******** for loop *********

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
// For in loop
for(let a in obj){
    console.log('Marks of ' + a + ' is ' + obj[a])
}

// For of loop (Must be iterable array or string form)
for (let b of "India"){
    console.log(b)
}


// ********* while loop *********

let p = 10;
let i = 0;
while(i<p){
    console.log("While loop " + i)
    i++;
}

// ********* do-while loop *********
let q = 2;
let j = 8;
do{
    console.log('do-while loop ' + j)
    j++;
}while(j<q)

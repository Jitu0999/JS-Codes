/* 
************ OPERATORS IN JAVASCRIPT. **************
*/ 
//---------Airthmetic operators.
let i = 10;
let j = 4;
//console.log('i+j =', i+j)
// console.log('i-j =', i-j)
// console.log('i/j =', i/j)
// console.log('i % j =', i%j)
// console.log('i*j =', i*j)
// console.log('i**j =', i**j)
// console.log('i++ =', i++)
// console.log('++i =', ++i)
// console.log('i-- =', i--)
// console.log('i=', i)



let a = 50;
let b = 5;
// console.log('The value of a+b is', a+b);
// console.log('The value of a-b is', a-b);
// console.log('The value of a*b is', a*b);
// console.log('The value of a/b is', a/b);

// ---------Assignment Operators.
var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

//---------Comparison Operators.
var x = 55;
var y = 66;
// console.log(x == y);
// console.log(x === y);
// console.log(x != y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//---------Logical Operators.
let l=5;
let m=6;
 console.log(l<m && l==5)
// console.log(l>m || l==5)
// console.log(!false)
// console.log(!true)

// --------Conditional Operators.
let age1 = 10, age2 = 15, age3 = 20, age4 = 30;
if (age1<10){
console.log('Invalid Age.');
}
else if(age1<age2){
    console.log('Your are child, you can not drive.');
}else if(age2<age3){
    console.log('Your are not in under 18.');
}
else if(age3<age4 && age2<age3){
    console.log('Your can drive.');
}
else{
    console.log('You can drive as you are above 18');
}

// JavaScript Variables.
// What are variable? - Containers to store data value.
var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);
var a = 'Jitu';
let b = null
var c = 55
var d = undefined
const author = 'Jitu' // cannot be change.
{
    let b = 'this'
    //console.log(b)
}
//console.log(b)




 /***************  DATA TYPES ********************/
/*Data types in JavaScript. 7 Premitive data type
Null, Number, Symbol, String, Boolean, Bigint, Undefined
*/

let i = null;
let j = 555
let k = true; // can also be false
let l = 'Jitu'
let m = Symbol('I am a nice symbol')
let n = BigInt('444')
let o = undefined
//console.log(i, j, k, l, m, n, o)
console.log(typeof i)
console.log(typeof j)
console.log(typeof k)
console.log(typeof l)
console.log(typeof m)
console.log(typeof n)
console.log(typeof o)

/*
*************** OBJECTS **************
Non primitive DAta type
*/

const item = {
    'Jitu': true,
    'Shubham': false,
    'Rohan': 77,
    'Ramesh': undefined
}
console.log(item['Rohan'])

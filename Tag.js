/* Script Tag. (inline script and source script)
1. Using between <script></script> tag in index.html file.
2. Seprate file with .js extension.

Advantage of using script file using src attribute of script tag.
1. Separation of concerns.
2. Browser caching..


*/
console.log('Hello')
let a = 4;
let b = 6;
console.log(a+b)

/*  ........ Console object methods...............

console.error('Hey this is an error....')
console.assert(5>7) // Assertion failed.
console.assert(50>7) //  Assertion passed.
console.clear() // Clear all console screen.
obj = {a: 1, b: 2, c: 3, d: 4}
console.table(obj) // show in a tabular form.
console.warn('Hey please donot touch anythings here!!')
console.info('Info.')
console.time()
console.time('a')
console.timeEnd('a')
//console.time('Process1')
//console.timeEnd('Process2')

console.time('forLoop')
for(let i=0;i<10;i++){
    console.log('Jitu')
}
console.timeEnd('forLoop')

console.time('whileLoop')
let i=0;
while(i<10){
    console.log('Ritu')
    i++;
}
console.timeEnd('whileLoop')
*/

// .......... Alert, Prompt, Confirm ..........
//alert('hello your script works!!')
alert('Enter the value of t !')
let t = prompt('Enter t here', '555')

t = Number.parseInt(t)
alert('You enterd t of type ' + (typeof t))
let write = confirm('Do you want to write it to the page.')
if(write) {
document.write(t)
}
else {
    document.write('Please allow me to write.')
}
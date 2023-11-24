/*
Q.1 Write a program to print the marks of a student in an objrct using for loop? like obj = {Jitu : 88, Rohan : 90, Ajay : 70}
*/
let obj = marks = {
    Jitu : 88,
    Rohan : 90,
    Ajay : 70,
    Rahul : 60
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log('The marks of ' + Object.keys(marks)[i] + ' are ' + marks[Object.keys(marks)[i]])
}

/*
Q.2 Write a program in Q1 using for in loop?
*/

for(let key in marks){
    console.log('Ans-2, The marks of ' + key + ' are ' + marks[key])
}

/*
Q.3 write a program to print "try again" until the user enters the correct number?

let cNumber = 45
let i
while (i != cNumber){
    console.log('try again')
    i = prompt('Enter a number : ')
}
console.log('You have entered a correct number')
*/


/*
Q.4 Write a function to find mean of 5 numbers?
*/
const mean = (a, b, c, d)=>{
    return(a+b+c+d)/4
}
console.log(mean(4, 5, 6, 7))

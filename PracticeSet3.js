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



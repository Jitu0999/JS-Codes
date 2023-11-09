/*
Q1. Create a variable of type string and try to add a number to it ?
*/
let a = 'Jitu'
let b = 5
console.log(a+b) // Jitu5


/*
Q2. Use typeof operator to find the datatype of the string in last question ?
*/
console.log(typeof(a+b)) // string

/*
Q3. Create a const object in javascript can you change it to hold a number later ?
*/
const x = {
    name: 'Jitu',
    section: 1,
    isPrincipal: false
}
//x = 55 // TypeError: Assignment to constant variable. at Object.<anonymous>

/*
Q4. Try to add a new key to the const object in pbrblem 3 where you add to do it ?
*/
const y = {
    name: 'Jitu',
    section: 1,
    isPrincipal: false
}
y['friend'] = 'Naresh'
y['name'] = 'Dinesh'
console.log(y)

/*
Q5. Write a JS program to create a word-meaning dictionary to 5 words ?
*/
const dict = {
    appreciate: 'to understand the value of somebody/something',
    thank: 'to tell somebody that you are grateful',
    beautiful: 'very pretty or attractive',
    technology: 'the scientific knowledge',
    intelligence: 'the ability to understand, learn and think'
}
console.log(dict.appreciate);
console.log(dict.thank);
console.log(dict.beautiful);
console.log(dict.technology);
console.log(dict.intelligence);
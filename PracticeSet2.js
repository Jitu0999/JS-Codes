/*
Q1. Use logical operator to find wether the age of x person lies between 10 and 20?
*/
let age = 15;
if(age>10 && age<20){
    console.log('Ans No.1 * Your age lies between 1o and 20')
}
else{
    console.log('Ans No.1 * Your age doesnot lies between 10 and 20')
}

/*
Q2. Demonstrate the use of switch case statement in javaScript?
*/
let froutPrice = 55;
switch (froutPrice){
    case 55:
        console.log('Ans No.2 * Mangoes 55 Rs/Kg')
        break
    case 50:
        console.log('Banana 55 Rs/Dazn')
        break
    case 60:
        console.log('Apple 60 Rs/Kg')
    default:
        console.log('Frout is not available')
}

/*
Q3. Write a JavaScript Program to find whether a number is divisible by 2 and 3?
*/
let num = 12;
if (num % 2 == 0 && num % 3 == 0){
    console.log('Ans No.3 * Your number is divisible by 2 and 3')
}
else{
    console.log('Your number is not divisible by 2 and 3')
}

/*
Q4. Write a JavaScript Program to find whether a number is divisible by either 2 and 3?
*/
let num1 = 6;
if (num1 % 2 == 0 || num1 % 3 == 0){
    console.log('Ans No.4 * Your number is divisible by 2')
}
else{
    console.log('Your number is divisible by 3')
}

/*
Q5. Print "You can drive" or "You cannot drive" based on age being greter than 18 using ternary operator?
*/
let age2 = 19
let a = age2 > 18 ? "Ans No.5 * You can drive" : "You cannot deive"
console.log(a)

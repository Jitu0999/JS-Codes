/*
Q.1 Create an array of numbers and take input from the user to add numbers to this array?

let arr = [1, 2, 3, 4, 5, 6]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
*/

/*
Q.2 Keep adding numbers to the array in 1 until 0 is added to the array?
let arr = [1, 2, 3, 4, 5, 6]
let a;
do {
    a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr.push(a)
}
while (a != 0);
console.log(arr)
*/

/*
Q.3 Filter for numbers divisible by 10 from a given array? 
*/
let arr = [1, 2, 30, 4, 50, 6, 70, 8, 90]
let n = arr.filter((x) =>{
    return x%10 == 0
})
console.log(n)


/*
Q.4 Create an array of squire of given numbers? 
*/

/*
Q.5 Use reduce to calculate fictorial of a given number from an array of first n natural numbers(n being the number where factorial ruls to be calculated) 
*/


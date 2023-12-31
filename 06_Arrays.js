let marks_class_12 = [81, 92, 63, 74, 85, false, "Not Present"]
console.log(marks_class_12);
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist.
console.log("The length of marks class 12th is :", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array.
marks_class_12[0] = 88 // Changing the value of an array.
console.log("Updated Arrays are : " + marks_class_12)
console.log(typeof marks_class_12)

// ******** Methods *********
let num = [1, 2, 3, 4, 5]
let b = num.toString() // b is now a string.
console.log(b, typeof b);
let c = num.join(" and ") // Use to add.
console.log(c, typeof c)
num.pop() // Updates the original array and returns the pop value.
console.log(num)
//let r = num.pop()// Returns the popped element.
//console.log(num, r)
//let r = num.push(55)// push returns the new array length.
//console.log(num, r)
//let r = num.shift()// Remove an element from the start of the array.
//console.log(r, num)
//let r = num.unshift(80)// Add an element from beginning of the array.
//console.log(r, num)
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num3 = [21, 22, 23, 24, 25, 26, 27, 28, 29]
//console.log(num1.length)
//delete num1[0]
//console.log(num1);
//console.log(num1.length)

let newArray = num1.concat(num2, num3)
console.log(newArray)
console.log(num1, num2)

// Sort method.
//let ar = [554, 44, 22, 934, 22, 40, 20, 55, 22, 21]
//ar.sort()// sort by alphabeticaly
//console.log(ar)

/*let compare = (x, y)=>{
    return x-y;
}
let arr = [330, 8, 55, 400, 50, 1, 30, 55]
arr.sort(compare) // in to ascending order.
console.log(arr);
arr.reverse() // 
console.log(arr);
*/

// Splice and slice
let arr = [330, 8, 55, 400, 50, 1, 30, 55]
//arr.splice(2, 3, 1000, 2000, 3000, 4000)
//console.log(arr)

let newArr = arr.slice(3, 5)
//console.log(newArr)

// ******** Looping with Array ********

/*let num4 = [3, 5, 1, 2, 4]
for (let i=0; i<num4.length; i++){
   console.log(num4[i])
}
*/

/* forEach loop
num4.forEach((element)=> {
    console.log(element * element)
})
*/

/* array.from
let name = "Raju"
let arr0 = Array.from(name)
console.log(arr0)
*/

/* for...of
for(let i of num){
    console.log(i)
}
*/

/* for...in
let item = ["Chair", "Bed", "Fan", "Moter", "Mobile"]
for(let i in item){
    console.log(item[i])
}
*/

// @@@@@@@@@@@ Map filter and reduce @@@@@@@@@@@@

/* Map - creates a new array by performing some operation on each array element.
let arr1 = [45, 23, 21]
//console.log(arr1)
let a = arr1.map((value)=>{
    console.log(value)
    return value + 1
})
console.log(a)
*/

/* Array map method
let arr1 = [45, 23, 21]
let a = arr1.map((value, index, array)=>{
    console.log(value, index, array)
    return value + 1
})
console.log(a)
*/

/* Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((k) =>{
    return k < 10
})
console.log(a2)
*/

// Array reduce method
let arr3 = [1, 2, 3, 4, 5]
const reduce_func = (h1, h2) =>{
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)

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
let ar = [554, 44, 22, 934, 40, 20, 55]
ar.sort()
console.log(ar)

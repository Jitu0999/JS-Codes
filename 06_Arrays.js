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
console.log(marks_class_12[6])